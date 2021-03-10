const alertButton = document.querySelector(".content__alert");

function insertGraph(location, type) {
  var ctx = document.getElementById(location).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ["9AM", "11AM", "1PM", "3PM", "6PM", "9PM"],
      datasets: [
        {
          label: "# of Votes",
          data: [1, 2, 7, 10, 14, 25],
          backgroundColor: [
            "rgba(106, 90, 205, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
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

function insertBar(location, type) {
  var ctx = document.getElementById(location).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: ["Green", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgb(117, 120, 186)",
            "rgb(117, 120, 186)",
            "rgb(117, 120, 186)",
            "rgb(117, 120, 186)",
            "rgb(117, 120, 186)",
            "rgb(117, 120, 186)",
          ],
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
  });
}

insertGraph("myChart", "line");
insertBar("daily__traffic__chart", "bar");
insertPie("mobile__users__chart", "doughnut");

alertButton.addEventListener("click", () => {
  document.querySelector(".content__alert").style.display = "none";
});
