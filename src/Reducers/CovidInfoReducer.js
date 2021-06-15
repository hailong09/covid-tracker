import { SET_30DAYS_STATS, SET_30DAYS_STATS_FAILED, SET_ALL, SET_ALL_FAILED, SET_COUNTRIES, SET_COUNTRIES_FAILED, SET_PIE_CHART } from "../Contexts/constant"


export const CovidInfoReducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case SET_ALL:
            return {
                ...state,
                all: payload,
                isLoading: false,
            }
        case SET_ALL_FAILED:
            return {
                ...state,
                all: {},
                isLoading: false,
            }
        case SET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                isLoading: false,
            }
        case SET_COUNTRIES_FAILED:
            return {
                ...state,
                countries: [],
                isLoading: false,
            }
        case SET_PIE_CHART:
            return {
                ...state,
                piechartData: payload,
            }
        case SET_30DAYS_STATS:
            return {
                ...state,
                historicalStats: payload,
                isLoading: false
            }
        case SET_30DAYS_STATS_FAILED:
            return {
                ...state,
                historicalStats: [],
                isLoading: false
            }
        
        default:
            return state
    }
}