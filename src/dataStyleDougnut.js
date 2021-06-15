export const data = totalStats =>  {
   return {
    labels: [
        'Deaths',
        'Cases',
        'Recovered'
      ],
      datasets: [{
        label: 'My First Dataset',
        data:  totalStats ? totalStats : [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(45,206,153)'
        ],
        hoverOffset: 4
      }]
   }
  };