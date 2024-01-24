// Aside Moving
document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.querySelector('.d-home');
    homeButton.classList.add('active');
});

function toggleSectionDisplay(showSection, activeButton) {
    var sections = ['.d-dashboard-content', '.d-ips-content', '.d-users-content', '.d-notes-content'];

    sections.forEach(function (section) {
        var currentSection = document.querySelector(section);
        if (section === showSection) {
            currentSection.classList.remove('d-display');
        } else {
            currentSection.classList.add('d-display');
        }
    });

    var buttons = ['d-home', 'd-ips', 'd-users', 'd-notes'];

    buttons.forEach(function (button) {
        var currentButton = document.querySelector('.' + button);
        if (button === activeButton) {
            currentButton.classList.add('active');
        } else {
            currentButton.classList.remove('active');
        }
    });
}

function dashboardOnDisplay() {
    toggleSectionDisplay('.d-dashboard-content', 'd-home');
}

function ipsOnDisplay() {
    toggleSectionDisplay('.d-ips-content', 'd-ips');
}

function usersOnDisplay() {
    toggleSectionDisplay('.d-users-content', 'd-users');
}

function notesOnDisplay() {
    toggleSectionDisplay('.d-notes-content', 'd-notes');
}
// --------------------------------------------------------------------------------------------------------------
// Per Day Chart
var options = {
    chart: {
      type: 'area',
      height: 350
    },
    series: [
      {
        name: 'Views Per Day',
        data: [1200, 500, 200, 1568, 100, 1000, 600, 300, 2000, 1500, 400, 768],
        curve: 'smooth'
      },
      {
        name: 'Work Per Day',
        data: [500, 200, 100, 1200, 50, 800, 400, 200, 1500, 1200, 300, 600],
        curve: 'smooth'
      }
    ],
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + " units";
        }
      },
      theme: 'light',
      marker: {
        show: true,
      }
    },
    legend: {
      show: true,
      position: 'top',
      onItemClick: {
        toggleDataSeries: false
      },
    }
}
var chart = new ApexCharts(document.querySelector("#PerDay"), options);
chart.render();

// Work Chart
var options = {
  chart: {
    type: 'area',
    height: 350
  },
  series: [
    {
      name: 'Generator',
      data: [124, 529, 789, 987, 1004, 1217, 1241, 1148, 987, 1324, 1471, 1134],
      curve: 'smooth'
    },
    {
      name: 'WannaPlay',
      data: [17, 20, 21, 12, 17, 8, 48, 2, 15, 17, 31, 67],
      curve: 'smooth'
    },
    {
      name: 'Wordlist',
      data: [121, 202, 44, 12, 54, 87, 247, 144, 389, 121, 341, 674],
      curve: 'smooth'
    },
    {
      name: 'Ryan Ai',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      curve: 'smooth'
    }
  ],
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return value + " units";
      }
    },
    theme: 'light',
    marker: {
      show: true,
    }
  },
  legend: {
    show: true,
    position: 'top',
    onItemClick: {
      toggleDataSeries: false
    },
  }
}
var chart = new ApexCharts(document.querySelector("#Work"), options);
chart.render();

// Langs Users Chart
var options = {
  chart: {
    height: 220,
    type: "radialBar"
  },
  series: [83],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
};
var chart = new ApexCharts(document.querySelector("#EnglishUse"), options);
chart.render();

var options = {
  chart: {
    height: 220,
    type: "radialBar"
  },
  series: [17],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
};
var chart = new ApexCharts(document.querySelector("#ArabicUse"), options);
chart.render();
