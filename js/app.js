


// ===================Alert===================================//
const alert = document.getElementById("alert");


alert.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alert.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
    }
});

// ===================Charts===================================//

// -------------------------------------------------------------------------line graph
let trafficCanvas = document.getElementById("chart1-chart");

let trafficData = {
    labels: [
    "",
    "11-18", 
    "20-41", 
    "8-15", 
    "30-32", 
    "1-18", 
    "21-26", 
    "41-31",
    "16-9", 
    "46-23", 
    "34-44", 
    "26-32",
    ""
    ],
    datasets: [{
        lineTension: 0,
        pointBorderWidth: 2,
        pointRadius: 5,
        borderColor: "rgb(107, 112, 190)",
        pointBackgroundColor: "#fff",
    data: 
    [
    0,
    300, 
    1000, 
    1500, 
    750, 
    1200, 
    1700, 
    2200,
    1250, 
    2250, 
    1200,
    500,
    0
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth:2.5,
    }]
    };


let trafficOptions = {
    aspectRatio: 2.5, 
    animation: {
         duration: 1200,
    },
    scales: {
        yAxes: [{
         ticks: {
            beginAtZero:true
          }
        }]
    },
    legend : {
          display: false
        }
    };


    
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });


    const hourlyTime = document.querySelectorAll(".chart1-nav li")[0];

    hourlyTime.addEventListener("click", function() {
        
        var chart = new Chart(trafficCanvas, {
          type: "line",
          data: {
            labels: [
              "",
              "16-22",
              "23-29",
              "30-5",
              "6-12",
              "13-19",
              "20-26",
              "27-3",
              "4-10",
              "11-17",
              "18-24",
              "25-31",
              ""
            ],
            datasets: [
              {
                label: "",
                backgroundColor: "rgb(107, 112, 190, 0.2)",
                borderColor: "rgb(107, 112, 190)",
                borderWidth: 2,
                lineTension: 0,
                pointRadius: 5,
                borderCapStyle: "round",
                borderJoinStyle: "bevel",
                pointBorderWidth: 2,
                pointBackgroundColor: "#fff",
                data: [
                  0,
                  750,
                  1250,
                  1000,
                  1500,
                  2000,
                  1500,
                  1750,
                  1250,
                  1750,
                  2250,
                  1750,
                  2250
                ]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawTicks: false
                  },
                  ticks: {
                    beginAtZero: true,
                    padding: 15,
                    labelOffset: 20
                  }
                }
              ]
            }
          }
        });
      });
      

    const dailyTime = document.querySelectorAll(".chart1-nav li")[1];

    dailyTime.addEventListener("click", function() {
        var chart = new Chart(trafficCanvas, {
        type: "line",
        data: {
            labels: [
            "",
            "16-22",
            "23-29",
            "30-5",
            "6-12",
            "13-19",
            "20-26",
            "27-3",
            "4-10",
            "11-17",
            "18-24",
            "25-31",
            ""
            ],
            datasets: [
            {
                label: "",
                backgroundColor: "rgb(107, 112, 190, 0.2)",
                borderColor: "rgb(107, 112, 190)",
                borderWidth: 2,
                lineTension: 0,
                pointRadius: 5,
                borderCapStyle: "round",
                borderJoinStyle: "bevel",
                pointBorderWidth: 2,
                pointBackgroundColor: "#fff",
                data: [
                0,
                750,
                1250,
                100,
                500,
                750,
                3250,
                1750,
                1250,
                750,
                2250,
                1750,
                2250
                ]
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
            display: false
            },
            scales: {
            yAxes: [
                {
                gridLines: {
                    drawTicks: false
                },
                ticks: {
                    beginAtZero: true,
                    padding: 15,
                    labelOffset: 20
                }
                }
            ]
            }
        }
        });
    });
      
    const weeklyTime = document.querySelectorAll(".chart1-nav li")[2];
    
    weeklyTime.addEventListener("click", function() {
    var chart = new Chart(trafficCanvas, {
        type: "line",
        data: {
        labels: [
            "",
            "16-22",
            "23-29",
            "30-5",
            "6-12",
            "13-19",
            "20-26",
            "27-3",
            "4-10",
            "11-17",
            "18-24",
            "25-31",
            ""
        ],
        datasets: [
            {
            label: "",
            backgroundColor: "rgb(107, 112, 190, 0.2)",
            borderColor: "rgb(107, 112, 190)",
            borderWidth: 2,
            lineTension: 0,
            pointRadius: 5,
            borderCapStyle: "round",
            borderJoinStyle: "bevel",
            pointBorderWidth: 2,
            pointBackgroundColor: "#fff",
            data: [
                0,
                350,
                1250,
                1750,
                500,
                750,
                3250,
                750,
                1250,
                1750,
                250,
                2750,
                750
            ]
            }
        ]
        },
        // Configuration options go here
        options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            yAxes: [
            {
                gridLines: {
                drawTicks: false
                },
                ticks: {
                beginAtZero: true,
                padding: 15,
                labelOffset: 20
                }
            }
            ]
        }
        }
    });
    });
    
    const monthlyTime = document.querySelectorAll(".chart1-nav li")[3];
    
    monthlyTime.addEventListener("click", function() {
    var chart = new Chart(trafficCanvas, {
        // The type of chart we want to create
        type: "line",
    
        // The data for our dataset
        data: {
        labels: [
            "",
            "16-22",
            "23-29",
            "30-5",
            "6-12",
            "13-19",
            "20-26",
            "27-3",
            "4-10",
            "11-17",
            "18-24",
            "25-31",
            ""
        ],
        datasets: [
            {
            label: "",
            backgroundColor: "rgb(107, 112, 190, 0.2)",
            borderColor: "rgb(107, 112, 190)",
            borderWidth: 2,
            lineTension: 0,
            pointRadius: 5,
            borderCapStyle: "round",
            borderJoinStyle: "bevel",
            pointBorderWidth: 2,
            pointBackgroundColor: "#fff",
            data: [
                0,
                350,
                2250,
                1250,
                500,
                750,
                1250,
                750,
                350,
                1150,
                1750,
                750,
                1750
            ]
            }
        ]
        },
        // Configuration options go here
        options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            yAxes: [
            {
                gridLines: {
                drawTicks: false
                },
                ticks: {
                beginAtZero: true,
                padding: 15,
                labelOffset: 20
                }
            }
            ]
        }
        }
    });
    });

    
        
    

//----------------------------------------------------------------------------daily graph
let dailyCanvas = document.getElementById("chart2-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [103, 99, 175, 53, 78, 234, 120],
        backgroundColor: '#7477BF',
        borderWidth: 1
      }]
    };
    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
    },
    legend : {
        display: false
        }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });

//----------------------------------------------------------------------Mobile Donut graph

let mobileCanvas = document.getElementById("chart3-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 500, 1865,],
        borderWidth: 0,
         backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
      }]
    };

    const mobileOptions = {
        legend: {
            position: 'right',
         labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
      }
    }
        

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });
    
    

//===================messages=============================//

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
if (user.value === "" && message.value === "") {
    alert("The USER and MESSAGE field must be filled before sending.");
        } else if(user.value ==="") {
            alert("Please state the USER.");
        } else if(message.value ==="") {
            alert("You cannot send an empty MESSAGE.");
        } else {
            alert('Message sent to: ${user.value}');
        }
    });
        
