import React, { useEffect } from 'react'
import TopTable from '../components/dashboard/TopTable'
import TotalStats from '../components/dashboard/TotalStats'
import { useGlobalContext } from '../Contexts/CovidInfoContext'
import Spinner from 'react-bootstrap/Spinner'
import useDocumentTitle from '../useDocumentTitle'

const Dashboard = () => {
    const {getAll, getCountries, info:{isLoading}} = useGlobalContext()
    useEffect(() => {
        getAll()
        getCountries();
      }, [])
    
    useDocumentTitle('Dashboard')
    if(isLoading){
        return (
            <div className="content-body">
               <div className="container-fluid d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="warning"/>
                </div>
            </div>
        )

    }
    else{

        return (
        
            <div className="content-body">
               <div className="container-fluid">
                   
                    <TotalStats/> 
                    <div className="row mt-5">
                        <TopTable title={"Top Cases"} caseType={"cases"}/>
                        <TopTable title={"Today Cases"} caseType={"todayCases"}/>
                        <TopTable title={"Top Deaths"} caseType={"deaths"}/>
                        <TopTable title={"Today Death"} caseType={"todayDeaths"}/>
                        <TopTable title={"Top Actived"} caseType={"todayCases"}/>
                        <TopTable title={"Top Recovered"} caseType={"recovered"}/>
    
    
                    </div>
                    
                </div>
                
            </div>
        )

    }
   
}

export default Dashboard
