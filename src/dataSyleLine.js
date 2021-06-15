import dateFormat from "dateformat"
export const lineData = (country) => {
    const labels = Object.keys(country.timeline.cases)
                .filter(date => new Date(date).getDate() % 2 === 0)
                .map(date => dateFormat(new Date(date), "d-mmmm"))
    const casesData = Object.keys(country.timeline.cases).map(date => country.timeline.cases[date])
    const deathData = Object.keys(country.timeline.deaths).map(date => country.timeline.deaths[date])
    const recoveredData = Object.keys(country.timeline.recovered).map(date => country.timeline.recovered[date])


    const data = {
        labels,
        datasets: [{
            label: 'Confirmed',
            data: casesData,
            fill: false,
            borderColor: 'rgb(100,86,255)',
            tension: 0.1
          },
          {
            label: 'Death',
            data: deathData,
            fill: false,
            borderColor: 'rgb(245,56,90)',
            tension: 0.1
          },
          {
            label: 'Recovered',
            data: recoveredData,
            fill: false,
            borderColor: 'rgb(45,206,153)',
            tension: 0.1
          },
        
        
        ]

    }
    return data
}

