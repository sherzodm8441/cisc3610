let tensionVar = 0.2; //bezier curve

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1950,1960,1970,1980,1990,2000,2010],
      datasets: [{ 
          data: [43,567,275,161,295,194,211],
          label: "All Launches",
          borderColor: "#3e95cd",
          fill: false,
          tension: tensionVar
        }, { 
          data: [25,469,264,154,268,190,210],
          label: "Successful Launches",
          borderColor: "#8e5ea2",
          fill: false,
          tension: tensionVar
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'All US Rocket Launches (1957-2019)'
      }
    }
  });
