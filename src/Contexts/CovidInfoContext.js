import {createContext, useContext, useReducer} from 'react'
import { api, convertFormat, covertCountryIDtoquery } from '../apis/axios';
import { CovidInfoReducer } from '../Reducers/CovidInfoReducer';
import { 
    SET_30DAYS_STATS, 
    SET_30DAYS_STATS_FAILED, 
    SET_ALL, SET_ALL_FAILED, 
    SET_COUNTRIES, 
    SET_COUNTRIES_FAILED, 
    SET_PIE_CHART 

} from './constant';

//@desc Create context
export const CovidInfoContext = createContext();

//@desc Setting up provider
const CovidInfoContextProvider = ({children}) => {
    const [info, dispatch] = useReducer(CovidInfoReducer,{
        all: {},
        countries: [],
        piechartData: [],
        historicalStats: [],
        isLoading: true,
    })

    //@desc get stats for last 30 days
    const getStats30days = async () => {
        try {
           
            const query = covertCountryIDtoquery();
            const resp  = await api.get(`/historical/${query}`)
            dispatch({type: SET_30DAYS_STATS, payload: resp.data})
        } catch (error) {

            dispatch({type:SET_30DAYS_STATS_FAILED})
        }
    }

    //@desc Get all information
    const getAll = async () => {
        try {

            const resp = await api.get('/all')
            dispatch({type: SET_ALL, payload: convertFormat(resp.data)})
            dispatch({type: SET_PIE_CHART, payload: [ 
               parseInt(resp.data.deaths), 
               parseInt(resp.data.cases), 
               parseInt(resp.data.recovered)
            
            ]})
            
        } catch (error) {

                dispatch({type: SET_ALL_FAILED})
        }
    }

    //@desc Get Covid Info of countries in the world
    const getCountries = async () => {
        try {

            const resp = await api.get('/countries')
            dispatch({type: SET_COUNTRIES, payload: resp.data})
        } catch (error) {

            dispatch({type: SET_COUNTRIES_FAILED})
        }
    }
    //@desc data will pass through
    const CovidInfoContextData = {
        info,
        getAll,
        getCountries,
        getStats30days,
    }


    return (
        <CovidInfoContext.Provider value = {CovidInfoContextData}>
            {children}
        </CovidInfoContext.Provider>
    )
}

export const useGlobalContext = () =>  useContext(CovidInfoContext)

export default CovidInfoContextProvider