// const alertButton = document.querySelectorAll(".content__alert");
const alertButtons = document.querySelectorAll(".close--button");
const alertDivs = document.querySelectorAll(".content__alert");
const notificationsButton = document.getElementById("notifications--button");
const chartSelector = document.querySelector(".chart--selector").autofocus;

function insertGraph(location, type) {
  var ctx = document.getElementById(location).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ["9AM", "11AM", "1PM", "3PM", "6PM", "9PM"],
      datasets: [
        {
          label: "Website Traffic Throughout the Day",
          data: [1, 2, 7, 10, 14, 25],
          lineTension: 0,
          pointBackgroundColor: "white",
          // pointBorderColor: "rgba(150, 132, 208, 1)",
          pointRadius: 5,
          pointBorderWidth: 2,
          backgroundColor: "rgba(117, 120, 186, .25)",
          borderColor: "rgba(117, 120, 186, 1)",
          borderWidth: 1.5,
        },
      ],
    },
    responsive: true,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function insertBar(location, type) {
  var ctx = document.getElementById(location).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ["S", "M", "T", "W", "TH", "F", "S"],
      datasets: [
        {
          label: "# of Votes",
          data: [80, 120, 150, 125, 200, 190, 110],
          backgroundColor: "rgb(117, 120, 186",
          barPercentage: 0.5,
          borderWidth: 1,
        },
      ],
    },
    responsive: true,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function insertPie(location, type) {
  var ctx = document.getElementById(location).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3],
          backgroundColor: [
            "rgb(117, 120, 186)",
            "rgb(122,201,149)",
            "rgb(112,177,189)",
          ],
        },
      ],
    },
    responsive: true,
    options: {
      legend: {
        position: "right",
      },
    },
  });
}

insertGraph("myChart", "line");
insertBar("daily__traffic__chart", "bar");
insertPie("mobile__users__chart", "doughnut");

// alertButton.addEventListener("click", () => {
//   document.querySelector(".content__alert").style.display = "none";
// });

for (let x = 0; x < alertButtons.length; x++) {
  alertButtons[x].addEventListener("click", () => {
    alertDivs[x].style.display = "none";
  });
}

notificationsButton.addEventListener("click", () => {
  alertDivs.forEach((button) => (button.style.display = "block"));
  document.querySelector(".dot").style.display = "none";
});
