import React from 'react'
import CardItem from './CardItem'
import {Doughnut} from 'react-chartjs-2'
import { data } from '../../dataStyleDougnut'
const GeneralStats = ({all,  piechartData}) => {
    return (
       
            <div className="col-xl-5 col-lg-12">
                <div className="row align-items-center">
                         <CardItem header={"Total Cases"} title={all.cases}/>
                         <CardItem header={"Total Deadths"} title={all.deaths} bg={"danger"}/>
                         <CardItem header={"Total Recovered"} title={all.recovered} bg={"success"}/>
                         <CardItem header={"New Cases"} title={all.todayCases} bg={"warning"}/>
                         <div className="col-xl-6 col-lg-6 col-md-6 col">
                            <CardItem bg={"secondary"} header={"New Deaths"} title={all.todayDeaths} />
                            <CardItem bg={"info"} header={"New Recovered"} title={all.todayRecovered}/>
                         </div>
                         <div className="col-xl-6 col-lg-6 col-md-6 col">
                             <div className="mt-3 p-2">
                             <Doughnut data={data( piechartData)}/>

                             </div>
                         </div>
                        
                         
                </div>
            </div>
                      

       
    )
}

export default GeneralStats


// 'Primary',
// 'Secondary',
// 'Success',
// 'Danger',
// 'Warning',
// 'Info',
