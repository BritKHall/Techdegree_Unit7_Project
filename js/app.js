


// ===================Alert===================================//
const red = document.getElementById("alert");


red.innerHTML =
`
<div class="alert-banner">
    <p class= "alert-message"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`

red.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    red.style.display = "none"
    }
});


//=====================notification=================================//
  
  const popup = document.getElementById("myPopup");
  const bellIcon = document.getElementById("bell");
  
  
  bellIcon.addEventListener("click", function() {
    popup.style.display = "block";
    bellIcon.style.visibility = "hidden";
    badge.style.visibility = "hidden";
  });
  
 const closeNoti = document.getElementById("closeNoti");
 const badge = document.getElementById("badge");
  
  closeNoti.addEventListener("click", function() {
    popup.style.display = "none";
    badge.style.display = "none";
    bellIcon.style.visibility = "visible";
  });

// ===================Charts===================================//

// ----------------------------------------------------------------line graph
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
        yAxes:[{
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

    
        
    

//-----------------------------------------------------------daily graph
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

//---------------------------------------------------------Mobile Donut graph

let mobileCanvas = document.getElementById("chart3-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2063, 504, 1865,],
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
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out USER and MESSAGE fields before sending");
    } else if (user.value === "" ) {
    alert("USER field must be filled out before sending");
    } else if (message.value === "" ) {
    alert("MESSAGE field must be filled out before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });


//===================local storage=============================//


function getSettings() {
    
    // EMAIL TOGGLE
    if (localStorage.getItem("yourapp_email_notification") === null) {
       document.getElementById("toggle-1").checked = true;
    } else {
       let email_notification = localStorage.getItem(
          "yourapp_email_notification"
       );
       if (email_notification === "true") {
          document.getElementById("toggle-1").checked = true;
       }
       if (email_notification === "false") {
          document.getElementById("toggle-1").checked = false;
       }
       if (email_notification !== "true" && email_notification !== "false") {
          localStorage.removeItem("yourapp_email_notification");
       }
    }
 
    // PROFILE TOGGLE
    if (localStorage.getItem("yourapp_profile_public") === null) {
       document.getElementById("toggle-2").checked = true;
    } else {
       let profile_public = localStorage.getItem("yourapp_profile_public");
 
       if (profile_public === "true") {
          document.getElementById("toggle-2").checked = true;
       }
       if (profile_public === "false") {
          document.getElementById("toggle-2").checked = false;
       }
       if (profile_public !== "true" && profile_public !== "false") {
          localStorage.removeItem("yourapp_profile_public");
       }
    }
 
    //  TIMEZONE
    let timezone = localStorage.getItem("timezones");
    if (timezone === null) {
       document.getElementById("timezones").value = 0;
    } else {
       document.getElementById("timezones").value = timezone;
    }
 }
 
 function saveSettings() {
    let email_notification = document.getElementById("toggle-1").checked;
    let public_profile = document.getElementById("toggle-2").checked;
    let timezone = document.getElementById("timezones").value;
 
    localStorage.setItem("yourapp_email_notification", email_notification);
    localStorage.setItem("yourapp_profile_public", public_profile);
    localStorage.setItem("timezones", timezone);
 }


 document.addEventListener("click", event => {
    
    if (event.target.className == "btn-save") {
        saveSettings();
        document.getElementById("save-box").style.display = "block";
     }

     if (event.target.className == "save-btn-close") {
        document.getElementById("save-box").style.display = "none";
     }

     if (event.target.className == "btn-close") {
        saveSettings();
        document.getElementById("close-box").style.display = "block";
     }

     if (event.target.className == "close-btn-close") {
        document.getElementById("close-box").style.display = "none";
     }

     if (event.target.className == "btn-close") {
        localStorage.clear();
     }
 });

 function main() {
    getSettings();
 }
 
main();