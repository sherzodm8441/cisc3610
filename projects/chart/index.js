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
        text: "All US Rocket Launches (1950's-2010's)"
      }
    }
  });

new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["<1","1–4","5–14","15–24","25–34","35–44","45–54","55–64","65–74","75–84","≥85"],
      datasets: [
        {
          label: "All Deaths",
          backgroundColor: "#3e95cd",
          data: [19582,3529,5623,35816,73486,104490,191142,440549,674507,822084,1012805]
        }, {
          label: "Covid Related Deaths",
          backgroundColor: "#8e5ea2",
          data: [52,25,68,612,2609,6756,18250,45377,82055,106020,122707]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Number of US Deaths by Age Group (2020)'
      }
    }
});