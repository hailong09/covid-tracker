import React from 'react'

const CountryInfo = ({country}) => {
    console.log(country.countryInfo._id)
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        <span className="me-2">
                            <img 
                                src={country.countryInfo.flag} 
                                alt={country.country}
                                width="50"
                                className="me-2"
                            />
                            {country.country}
                        </span>
                    </h4>
                </div>
                <div className="card-body bg-light">
                    <div className="row">
                        <div className="col-xl-3 mb-3">
                            <span>Death</span>
                            <h4>{country.deaths}</h4>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <span>Recovered</span>
                            <h4>{country.recovered}</h4>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <span>Today Death</span>
                            <h4>{country.todayDeaths}</h4>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <span>Today Cases</span>
                            <h4>{country.todayCases}</h4>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <span>Critical</span>
                            <h4>{country.critical}</h4>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <span>Active Cases</span>
                            <h4>{country.active}</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryInfo
