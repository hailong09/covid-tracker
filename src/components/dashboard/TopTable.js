import React from 'react'
import { useGlobalContext } from '../../Contexts/CovidInfoContext'
import { GetTopCategory } from '../../helper/helper'

const TopTable = ({title, caseType}) => {
    const {info:{countries}} = useGlobalContext()
    return (
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <h4 className="mb-4">{title}</h4>
            <ul className="p-0 ">
            {
                GetTopCategory(countries, caseType).map(country => (
                    <li key={country.country} className="rounded-2 p-2  mb-2 d-flex  justify-content-between text-light bg-secondary bg-gradient" style={{fontSize:"14px"}}>
                        <span className="d-flex me-1">
                            <img src={country.countryInfo.flag} alt={country.country} width="30" className="me-2"/>
                            {country.country}
                        </span>
                        <span className="fw-bolder">
                            {country[caseType]}
                        </span>
                    </li>
                    
                ))
            }
            </ul>
            
        </div>
    )
}

export default TopTable
