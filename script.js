const alertButtons = document.querySelectorAll(".close--button");
const alertDivs = document.querySelectorAll(".content__alert");
const notificationsButton = document.getElementById("notifications--button");
const chartSelector = document.querySelector(".chart--selector").autofocus;

const hourlySelector = document.querySelector("#hourly--selector");
const dailySelector = document.querySelector("#daily--selector");
const weeklySelector = document.querySelector("#weekly--selector");
const monthlySelector = document.querySelector("#monthly--selector");

const userSearch = document.querySelector("#user--search");
const saveButton = document.querySelector("#button--save");
const cancelButton = document.querySelector(".button--cancel");

function insertGraph(data, labels) {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          lineTension: 0,
          pointBackgroundColor: "white",
          pointRadius: 5,
          pointBorderWidth: 2,
          backgroundColor: "rgba(117, 120, 186, .25)",
          borderColor: "rgba(117, 120, 186, 1)",
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
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
          data: [80, 120, 150, 125, 200, 190, 110],
          backgroundColor: "rgb(117, 120, 186",
          barPercentage: 0.5,
          borderWidth: 1,
        },
      ],
    },
    responsive: true,
    options: {
      legend: {
        display: false,
      },
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

const hourlyData = [1, 2, 7, 10, 14, 25];
const hourlyLabels = ["9AM", "11AM", "1PM", "3PM", "6PM", "9PM"];

const dailyData = [50, 60, 70, 40, 50, 80, 100];
const dailyLabels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weeklyData = [700, 900, 300, 50, 1000];
const weeklyLabels = ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5"];

const monthlyData = [
  2000,
  2200,
  2400,
  2000,
  2500,
  2600,
  4000,
  3000,
  7000,
  6000,
  3000,
  1100,
];
const monthlyLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

insertGraph(hourlyData, hourlyLabels);
insertBar("daily__traffic__chart", "bar");
insertPie("mobile__users__chart", "doughnut");

hourlySelector.addEventListener("click", () => {
  insertGraph(hourlyData, hourlyLabels);
});

dailySelector.addEventListener("click", () => {
  insertGraph(dailyData, dailyLabels);
});

weeklySelector.addEventListener("click", () => {
  insertGraph(weeklyData, weeklyLabels);
});

monthlySelector.addEventListener("click", () => {
  insertGraph(monthlyData, monthlyLabels);
});

const validateForm = () => {
  let user = document.forms["messageForm"]["username"].value;
  let message = document.forms["messageForm"]["message"].value;
  if (!user) {
    alert("Please enter a user");
    return false;
  } else if (!message) {
    alert("Please enter a message!");
    return false;
  }
  alert("Message has been delivered successfully!");
};

/* 
Autocomplete Function 
*/

let users = [
  { label: "Victoria Chambers", value: "VC" },
  { label: "Dale Byrd", value: "DB" },
  { label: "Dawn Wood", value: "DW" },
  { label: "Dan Oliver", value: "DO" },
];

autocomplete({
  input: userSearch,
  fetch: function (text, update) {
    text = text.toLowerCase();
    let suggestions = users.filter((n) =>
      n.label.toLowerCase().startsWith(text)
    );
    update(suggestions);
  },
  onSelect: function (item) {
    this.input.value = item.label;
  },
});

// Toggler

const emailCheckbox = document.querySelector("#myonoffswitch");
const profileCheckbox = document.querySelector("#myonoffswitchtwo");
const timeZone = document.querySelector("#timezone-offset");

// Set localStorage Function

const checkPreferences = () => {
  if (localStorage.emailPreferences === "true") {
    emailCheckbox.checked = true;
  }
  if (localStorage.profilePreferences === "true") {
    profileCheckbox.checked = true;
  }
  if (localStorage.timezonePreferences) {
    timeZone.value = localStorage.timezonePreferences;
  }
};

checkPreferences();

// Save Button
saveButton.addEventListener("click", () => {
  if (emailCheckbox.checked) {
    localStorage.setItem("emailPreferences", "true");
  } else {
    localStorage.setItem("emailPreferences", "false");
  }
  if (profileCheckbox.checked) {
    localStorage.setItem("profilePreferences", "true");
  } else {
    localStorage.setItem("profilePreferences", "false");
  }
  localStorage.setItem("timezonePreferences", `${timeZone.value}`);
});

// Cancel Button / Remove localStorage

cancelButton.addEventListener("click", () => {
  localStorage.clear();
  emailCheckbox.checked = false;
  profileCheckbox.checked = false;
  timeZone.value = "default";
});

// Notifications

for (let x = 0; x < alertButtons.length; x++) {
  alertButtons[x].addEventListener("click", () => {
    alertDivs[x].style.display = "none";
  });
}

notificationsButton.addEventListener("click", () => {
  alertDivs.forEach((button) => (button.style.display = "block"));
  document.querySelector(".dot").style.display = "none";
});
