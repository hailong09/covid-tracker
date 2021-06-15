import React, { useEffect } from 'react'
import { useGlobalContext } from '../Contexts/CovidInfoContext'
import Spinner from 'react-bootstrap/Spinner'
import CountryInfo from '../components/widget/CountryInfo'
import useDocumentTitle from '../useDocumentTitle'
const Widget = () => {
    const {getCountries, info:{countries, isLoading}} = useGlobalContext()
    useEffect(() => {
        getCountries();
      }, [])

    useDocumentTitle('Widget')
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
                   {countries.map(country => (
                       <CountryInfo country={country} key={country.country}/>
                   ))}
               </div>
            </div>
        </div>
    )
}

export default Widget
