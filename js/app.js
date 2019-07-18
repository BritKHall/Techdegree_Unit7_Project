


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

// line graph
let trafficCanvas = document.getElementById("chart1-chart");

let trafficData = {
    labels: ["11-18", "20-41", "8-15", "30-32", "1-18", "21-26", "41-31",
    "16-9", "46-23", "34-44", "26-32"],
    datasets: [{
    data: [800, 1000, 1500, 750, 1200, 1700, 2000, 1750, 2250, 1900,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
         duration: 0
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
        
    

//daily graph
let dailyCanvas = document.getElementById("chart2-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
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

//mobile donut graph
let mobileCanvas = document.getElementById("chart3-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
         backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
      }]
    };

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

send();
        
