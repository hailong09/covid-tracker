import React from 'react'
import {Line} from 'react-chartjs-2'
import { lineData } from '../../dataSyleLine'
const Chartcard = ({country}) => {
    
    return (
        <div className="col-lg-6 mb-3">
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h4 className="card-title">{country.country}</h4>
                    <span>Last 30 Days</span>
                </div>
                <div className="card-body bg-light">
                        <Line data={lineData(country)}/>
                       
                </div>
            </div>
            
        </div>
    )
}

export default Chartcard
