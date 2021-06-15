import React from 'react'
import GeneralStats from './GeneralStats'
import { useGlobalContext } from '../../Contexts/CovidInfoContext'
import MyMap from './MyMap'



const TotalStats = () => {

    const {info: {all, countries,  piechartData}} = useGlobalContext() 
   
    return (
        <div className="p-3">
            <div className="row">
                <div className="col-12">
                    <div>
                        <span>Last Update: </span>
                        <strong>{all.updated}</strong>
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-center">
                <GeneralStats all={all} piechartData= { piechartData} />
                <div className="col-xl-7 col-lg-12">
                        <div className="card">
                            <div className="card-body ">
                                <MyMap countries={countries}/>
                            </div>
                        </div>
                </div>
            </div>
        </div>  
    )
}

export default TotalStats
