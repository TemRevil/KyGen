// Loading ON Display
let isLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loadingScreen").style.display = "flex";
    isLoaded = false;

    window.addEventListener("load", function () {
        isLoaded = true;

        if (isLoaded) {
            document.getElementById("loadingScreen").style.display = "none";
        }
    });
});
// --------------------------------------------------------------------------------------------------------------
// Aside Moving
document.addEventListener('DOMContentLoaded', function() {
  var homeButton = document.querySelector('.d-home');
  homeButton.classList.add('active');

  // إخفاء d-ips-content عند بدء التشغيل
  var ipsContent = document.querySelector('.d-ips-content');
  ipsContent.style.display = 'none';
});

function toggleSectionDisplay(showSection, activeButton) {
  var sections = ['.d-dashboard-content', '.d-ips-content', '.d-users-content', '.d-notes-content'];

  sections.forEach(function (section) {
      var currentSection = document.querySelector(section);
      if (section === showSection) {
          currentSection.style.display = 'flex';
      } else {
          currentSection.style.display = 'none';
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
// Date Calender
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentDate = new Date();
let selectedDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

document.querySelector('.d-calendar-month').innerText = months[currentDate.getMonth()];
document.querySelector('.d-calendar-year').innerText = currentYear;

let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let week;
let container = document.querySelector('.d-calendar-day-numbers');

for (let i = 1; i <= daysInMonth; i++) {
  if (i === 1 || new Date(currentYear, currentMonth, i).getDay() === 0) {
    week = document.createElement('div');
    week.classList.add('d-calendar-day-numbers-row');
  }

  let day = document.createElement('span');
  day.classList.add('d-calendar-day-number');
  day.innerText = i;
  day.addEventListener('click', () => handleDayClick(i));
  (i == selectedDay) && day.classList.add('d-calendar-day-number--current');
  week.append(day);

  if (i === daysInMonth || new Date(currentYear, currentMonth, i).getDay() === 6) {
    container.append(week);
  }
}

function handleDayClick(day) {
  selectedDay = day;
  updateSelectedDayVisual();
}

function updateSelectedDayVisual() {
  document.querySelectorAll('.d-calendar-day-number').forEach(element => {
    element.classList.remove('d-calendar-day-number--selected');
  });

  document.querySelectorAll('.d-calendar-day-number').forEach(element => {
    if (parseInt(element.innerText) === selectedDay) {
      element.classList.add('d-calendar-day-number--selected');
    }
  });
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
// --------------------------------------------------------------------------------------------------------------
// World Wide
var mapData = {
  "EGY": { fillKey: 'selected', borderColor: '#047dff', selected: true, views: 3200 },
  "USA": { fillKey: 'selected', borderColor: '#EDF2F7', selected: true, views: 2500 },
  "FRA": { fillKey: 'selected', borderColor: '#59a7fb', selected: true, views: 1800 },
  "RUS": { fillKey: 'selected', borderColor: '#6bb2ff', selected: true, views: 1200 },
  "OTHER1": { fillKey: 'default', borderColor: '#EDF2F7', selected: false },
  "OTHER2": { fillKey: 'default', borderColor: '#EDF2F7', selected: false },
  // قد تقوم بإضافة المزيد من الدول هنا
};

var map = new Datamap({
  element: document.getElementById('map'),
  geographyConfig: {
    popupTemplate: function (geography, data) {
      var content = '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong><br>';
      if (data.selected && data.views !== undefined) {
        content += 'Views: ' + (data.views ? data.views.toLocaleString() : 'N/A') + '<br>';
      }
      content += '</div>';
      return content;
    },
    borderColor: '#EDF2F7',
    highlightBorderColor: '#3395FF',
    highlightFillColor: '#3395FF'
  },
  fills: { defaultFill: 'white', selected: '#3395FF' },
  data: mapData
});

window.addEventListener('resize', function() {
  map.resize();
});
// --------------------------------------------------------------------------------------------------------------
// IP Box
// Control Scroll UP
document.addEventListener("DOMContentLoaded", function () {
  var dIpsData = document.querySelector('.d-ips-data');
  var searchBox = document.querySelector('.d-ips-data-control');

  dIpsData.addEventListener("scroll", function () {
      if (dIpsData.scrollTop <= 0) {
          searchBox.style.display = "flex";
          searchBox.style.height = "60px";
      } else {
          searchBox.style.height = "0";
      }
  });
});
// --------------------------------------------------------------------------------------------------------------
// Search Box Script
$(document).ready(function(){
  $("#searchField").on("input", function(){
      var searchTerm = $(this).val().toLowerCase();

      $(".d-ips-data-line").hide();

      $(".d-ips-data-line:containsCity(" + searchTerm + ")").show();
      $(".d-ips-data-line:containsIP(" + searchTerm + ")").show();
      $(".d-ips-data-line:containsDevice(" + searchTerm + ")").show();
  });
});

$.expr[':'].containsCity = function(a, i, m) {
  return $(a).find(".P4").text().toLowerCase().indexOf(m[3].toLowerCase()) >= 0;
};

$.expr[':'].containsIP = function(a, i, m) {
  return $(a).find(".P3").text().toLowerCase().indexOf(m[3].toLowerCase()) >= 0;
};

$.expr[':'].containsDevice = function(a, i, m) {
  return $(a).find(".P5").text().toLowerCase().indexOf(m[3].toLowerCase()) >= 0;
};
// --------------------------------------------------------------------------------------------------------------
// Block Script Adds
$('.d-ips-data-block-button').on('click', function() {
  var ipToBlock = $('.d-ips-data-block-input').val();

  if (ipToBlock.trim() !== "") {
      var blockedElement = $('.d-ips-data-content .d-ips-data-line:contains(' + ipToBlock + ')');

      if (blockedElement.length > 0) {
          var fullInfo = blockedElement.html();

          $('.d-ips-data-blocks').append('<div class="d-ips-data-line">' + fullInfo + '</div>');

          blockedElement.remove();
          $('.d-ips-data-alert').text("IP Blocked");
      } else {
          $('.d-ips-data-blocks').append('<div class="d-ips-data-line">' +
              '<p class="P1">-</p>' +
              '<p class="P2"></p>' +
              '<p class="P3">' + ipToBlock + '</p>' +
              '<p class="P4">-</p>' +
              '<p class="P5"></p>' +
              '<p class="P6"></p>' +
              '<p class="P7">-</p>' +
              '<p class="P8">-</p>' +
              '</div>');
          $('.d-ips-data-alert').text("IP Added to Block List");
      }
  } else {
      $('.d-ips-data-alert').text("Enter IP");
  }
  setTimeout(function() {
      $('.d-ips-data-alert').text('');
  }, 3000);
});
// --------------------------------------------------------------------------------------------------------------
// IPS & Blocks Display
const ipsContentButton = document.querySelector('.show-ips-content');
const ipsBlocksButton = document.querySelector('.show-ips-blocks');
const ipsContent = document.querySelector('.d-ips-data-content');
const ipsBlocks = document.querySelector('.d-ips-data-blocks');

function toggleDisplay(elementToShow, elementToHide) {
    elementToShow.style.display = 'flex';
    elementToHide.style.display = 'none';
}
ipsContentButton.addEventListener('click', () => toggleDisplay(ipsContent, ipsBlocks));
ipsBlocksButton.addEventListener('click', () => toggleDisplay(ipsBlocks, ipsContent));
