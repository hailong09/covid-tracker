import React, { useEffect } from 'react'
import Chartcard from '../components/charts/Chartcard'
import { useGlobalContext } from '../Contexts/CovidInfoContext'
import Spinner from 'react-bootstrap/Spinner'
import useDocumentTitle from '../useDocumentTitle'
const Charts = () => {
    const { getStats30days,info: { historicalStats, isLoading}} = useGlobalContext()
    useEffect(() => {

        getStats30days()
    }, [])
    useDocumentTitle('Charts')
    
if(isLoading){
   
    return (
        <div className="content-body">
           <div className="container-fluid d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="warning"/>
            </div>
        </div>
    )

}
    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row">
                    {historicalStats.filter(country => country !== null).map(country => (
                        <Chartcard key={country.country} country={country}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Charts
