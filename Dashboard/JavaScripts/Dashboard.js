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

  var usersSection = document.querySelector('.d-users-content');
  if (showSection === '.d-users-content') {
    usersSection.classList.remove('d-display');
  } else {
    usersSection.classList.add('d-display');
  }

  var notesSection = document.querySelector('.d-notes-content');
  if (showSection === '.d-notes-content') {
    notesSection.classList.remove('d-display');
  } else {
    notesSection.classList.add('d-display');
  }
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
  return $(a).find(".P4").text().toLowerCase().indexOf(m[3].toLowerCase()) === 0;
};

$.expr[':'].containsIP = function(a, i, m) {
  return $(a).find(".P3").text().toLowerCase().indexOf(m[3].toLowerCase()) === 0;
};

$.expr[':'].containsDevice = function(a, i, m) {
  return $(a).find(".P5").text().toLowerCase().indexOf(m[3].toLowerCase()) === 0;
};
// --------------------------------------------------------------------------------------------------------------
// Block & UN Block Script
function checkIPStatus(ip) {
  var blockedElement = $('.d-ips-data-content .d-ips-data-line:contains(' + ip + ')');
  var unblockedElement = $('.d-ips-data-blocks .d-ips-data-line:contains(' + ip + ')');

  if (blockedElement.length > 0) {
    $('.d-ips-data-block-button').css('display', 'block');
    $('.d-ips-data-unblock-button').css('display', 'none');
  } else if (unblockedElement.length > 0) {
    $('.d-ips-data-block-button').css('display', 'none');
    $('.d-ips-data-unblock-button').css('display', 'block');
  } else {
    $('.d-ips-data-block-button').css('display', 'block');
    $('.d-ips-data-unblock-button').css('display', 'none');
  }
}

checkIPStatus($('.d-ips-data-block-input').val());

$('.d-ips-data-block-input').on('input', function() {
  var ipToBlock = $(this).val();
  checkIPStatus(ipToBlock);
});

$('.d-ips-data-block-button, .d-ips-data-unblock-button').on('click', function() {
  var ipToBlock = $('.d-ips-data-block-input').val();

  if (ipToBlock.trim() !== "") {
    var blockedElement = $('.d-ips-data-content .d-ips-data-line:contains(' + ipToBlock + ')');
    var unblockedElement = $('.d-ips-data-blocks .d-ips-data-line:contains(' + ipToBlock + ')');

    if (blockedElement.length > 0) {
      var fullInfo = blockedElement.html();

      $('.d-ips-data-blocks').append('<div class="d-ips-data-line">' + fullInfo + '</div>');

      blockedElement.remove();
      $('.d-ips-data-alert').text("IP Blocked");

      $('.d-ips-data-unblock-button').css('display', 'block');
      $('.d-ips-data-block-button').css('display', 'none');
    } else if (unblockedElement.length > 0) {
      var fullInfo = unblockedElement.html();

      $('.d-ips-data-content').append('<div class="d-ips-data-line">' + fullInfo + '</div>');

      unblockedElement.remove();
      $('.d-ips-data-alert').text("IP UNBlocked");

      $('.d-ips-data-unblock-button').css('display', 'none');
      $('.d-ips-data-block-button').css('display', 'block');
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
      $('.d-ips-data-alert').text("IP Blocked");

      $('.d-ips-data-unblock-button').css('display', 'block');
      $('.d-ips-data-block-button').css('display', 'none');
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
// --------------------------------------------------------------------------------------------------------------
// Change User Photo
function openFileInput() {
  document.getElementById('imageInput').click();
}
function handleImageChange() {
  var input = document.getElementById('imageInput');
  var newPhoto = input.files[0];

  if (newPhoto && newPhoto.type.startsWith('image/')) {
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('userImage').src = e.target.result;

          localStorage.setItem("userPhoto", e.target.result);
      };
      reader.readAsDataURL(newPhoto);
  } else {
      alert("Please select a valid image file.");
  }
}
document.addEventListener("DOMContentLoaded", function() {
  var storedPhoto = localStorage.getItem("userPhoto");
  if (storedPhoto) {
      document.getElementById("userImage").src = storedPhoto;
  }
});
// --------------------------------------------------------------------------------------------------------------
// Time Update
document.addEventListener('DOMContentLoaded', function () {
  function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    const isDaytime = hours >= 6 && hours < 18;
    const isAM = hours < 12;

    const timeElement = document.getElementById('time');
    if (timeElement) {
      const timeText = timeElement.querySelector('span');
      const timeSubText = timeElement.querySelector('.d-user-time-text-sub');
      if (timeText && timeSubText) {
        timeText.textContent = `${hours % 12 || 12}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        timeSubText.textContent = isAM ? 'AM' : 'PM';
      }
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateElement = document.getElementById('date');
    if (dateElement) {
      dateElement.innerHTML = `${daysOfWeek[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}<br>${now.getFullYear()}`;
    }

    const timeCard = document.querySelector('.d-user-time');
    if (timeCard) {
      const sunIcon = timeCard.querySelector('.fa-sun');
      const cloudIcon = timeCard.querySelector('.fa-cloud');
      const moonIcon = timeCard.querySelector('.fa-moon');

      sunIcon.style.display = 'none';
      cloudIcon.style.display = 'none';
      moonIcon.style.display = 'none';

      const sunriseTime = new Date();
      sunriseTime.setHours(5, 0, 0);

      const sunsetTime = new Date();
      sunsetTime.setHours(18, 0, 0);

      const cloudStartTime = new Date();
      cloudStartTime.setHours(15, 0, 0);

      const moonAppearTime = new Date();
      moonAppearTime.setHours(5, 0, 0);

      if (now >= sunriseTime && now < sunsetTime) {
        sunIcon.style.display = 'block';
      } else if (now >= sunsetTime && now < cloudStartTime) {
        cloudIcon.style.display = 'block';
      } else if (now >= cloudStartTime && now < moonAppearTime) {
        cloudIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        timeCard.classList.add('d-time-night');
      }

      timeCard.classList.toggle('d-time-light', isDaytime && isAM);
    }
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
// --------------------------------------------------------------------------------------------------------------
// To Do List
var todoList = [];

function addItem() {
    document.querySelector(".d-user-opacity").style.display = "flex";
    disableScroll();
}

function addNote() {
    var noteInput = document.getElementById("noteInput");
    var newNote = noteInput.value;

    if (newNote !== null && newNote.trim() !== "") {
        var checkboxId = "0" + (todoList.length + 1);
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", checkboxId);
        checkbox.addEventListener("change", function () {
            var index = parseInt(checkboxId) - 1;
            if (this.checked) {
                var parent = this.parentNode;
                setTimeout(function () {
                    parent.removeChild(checkbox);
                    parent.removeChild(label);
                    todoList.splice(index, 1);
                }, 3000);
            }
        });

        var label = document.createElement("label");
        label.setAttribute("for", checkboxId);
        label.appendChild(document.createTextNode(newNote));

        todoList.push({ checkbox, label });
        document.querySelector(".d-user-todo").appendChild(checkbox);
        document.querySelector(".d-user-todo").appendChild(label);

        noteInput.value = "";
    }
}

function disableScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "";
}

document.querySelector(".d-user-opacity").addEventListener("click", function (event) {
    if (event.target.classList.contains("d-user-opacity")) {
        document.querySelector(".d-user-opacity").style.display = "none";
        enableScroll(); // استئناف التمرير عند إخفاء .d-user-opacity
    }
});
// --------------------------------------------------------------------------------------------------------------
// Alert IPS Blocker
$('.d-user-alert-block-button').on('click', function () {
  const currentRow = $(this).closest('.d-user-alert-line');
  const ipToBlock = currentRow.find('.P2').text();
  const country = currentRow.find('.P3').text();
  const time = currentRow.find('.P4').text();

  const ipExists = isIPBlocked(ipToBlock);

  if (ipExists) {
      unblockIP(currentRow, ipToBlock);
  } else {
      addToBlockedIPList(currentRow, ipToBlock, country, time);
      startContinuousCheck(currentRow, ipToBlock);
      currentRow.css('color', 'red');
      // تعطيل زر الحظر بمجرد إضافة IP إلى قائمة المحظورات
      $(this).prop('disabled', true);
  }
});

function isIPBlocked(ip) {
  return $('.d-ips-data-blocks .P3:contains(' + ip + ')').length > 0;
}

function startContinuousCheck(row, ip) {
  setInterval(function () {
      const ipStillExists = isIPBlocked(ip);

      if (!ipStillExists) {
          console.log('IP Removed:', ip);
          row.css('color', '#162e53');
          // إعادة تفعيل زر الحظر بمجرد إزالة IP من قائمة المحظورات
          row.find('.d-user-alert-block-button').prop('disabled', false);
      }
  }, 10);
}

function unblockIP(row, ip) {
  row.find('.d-user-alert-block-button').prop('disabled', false);
}

function addToBlockedIPList(row, ip, country, time) {
  $('.d-ips-data-blocks').append('<div class="d-ips-data-line">' +
      '<p class="P1">-</p>' +
      '<p class="P2">-</p>' +
      '<p class="P3">' + ip + '</p>' +
      '<p class="P4">' + country + '</p>' +
      '<p class="P5">-</p>' +
      '<p class="P6">-</p>' +
      '<p class="P7">-</p>' +
      '<p class="P8">' + time + '</p>' +
      '</div>');
  console.log('IP Blocked:', ip);
}
// --------------------------------------------------------------------------------------------------------------
// Log Delete & Download
function downloadLog() {
  var logLines = document.querySelectorAll('.d-user-log-line');
  var logContent = Array.from(logLines).map(function(line) {
      var user = line.querySelector('.P1').innerText;
      var action = line.querySelector('.P2').innerText;
      var timestamp = line.querySelector('.P3').innerText;
      return user + ',' + action + ',' + timestamp;
  }).join('\n');

  var blob = new Blob([logContent], { type: 'text/plain' });

  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'EncryptorLog.txt';

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}

function clearLog() {
  document.querySelector('.d-user-log-content').innerText = '';
}
// --------------------------------------------------------------------------------------------------------------
// Password Change Form
function changePassword() {
  var oldPassword = document.querySelector(".d-user-old-pass-input").value;
  var newPassword = document.querySelector(".d-user-new-pass-input").value;
  var checkPassword = document.querySelector(".d-user-check-pass-input").value;

  var passwordAlert = document.querySelector(".d-user-pass-alert");

  var currentPassword = localStorage.getItem('userPassword');

  if (oldPassword === "" || newPassword === "" || checkPassword === "") {
      passwordAlert.innerText = "Fill Inputs";
      return;
  }

  if (currentPassword !== oldPassword) {
      passwordAlert.innerText = "Old Password is incorrect.";
      return;
  }

  if (newPassword !== checkPassword) {
      passwordAlert.innerText = "New Password Does Not Match.";
      return;
  }

  localStorage.setItem('userPassword', newPassword);

  passwordAlert.innerText = "Password Done!";
}
// --------------------------------------------------------------------------------------------------------------
// Notes Script
window.onload = function () {
  console.log("Page loaded");
  restoreNotes();
  setupDownloadButton();
  switchView("notes"); // عند تحميل الصفحة يكون العرض على "Notes"
};

var recentlyDeleted = [];

function restoreNotes() {
  var storedNotes = localStorage.getItem('notes');
  if (storedNotes) {
    document.querySelector('.d-notes-box').innerHTML = storedNotes;
    setupNoteSelection();
  }
}

function saveNotes() {
  var notesContent = document.querySelector(".d-notes-box").innerHTML;
  localStorage.setItem('notes', notesContent);
}

function setupNoteSelection() {
  document.querySelectorAll(".d-notes-check").forEach(function (checkBoxInput) {
    checkBoxInput.addEventListener("change", function () {
      updateSelectedNotesCount();
      updateDeleteButtonStatus();
      saveNotes();
    });
  });

  setupDeleteButton();
}

function updateSelectedNotesCount() {
  var selectedNotes = document.querySelectorAll(".d-notes-check:checked").length;
  var selectedNotesCountElement = document.querySelector(".d-notes-selected-calc");
  selectedNotesCountElement.textContent = "Selected " + selectedNotes + " Notes";
  selectedNotesCountElement.style.display = selectedNotes > 0 ? "block" : "none";
}

function updateDeleteButtonStatus() {
  var selectedNotes = document.querySelectorAll(".d-notes-check:checked");
  if (selectedNotes.length > 0) {
    showDeleteButton();
  } else {
    hideDeleteButton();
  }
  saveNotes();
}

function showDeleteButton() {
  document.querySelector(".d-notes-delete").style.display = "flex";
}

function hideDeleteButton() {
  document.querySelector(".d-notes-delete").style.display = "none";
}

function setupDeleteButton() {
  var deleteButton = document.querySelector(".d-notes-delete");
  deleteButton.addEventListener("click", function () {
    var selectedNotes = document.querySelectorAll(".d-notes-check:checked");
    selectedNotes.forEach(function (selectedNote) {
      var noteElement = selectedNote.closest(".d-notes-note");
      if (noteElement.dataset.deleted !== "true") {
        moveToRecentlyDeleted(noteElement);
      } else {
        deletePermanently(noteElement);
      }
    });
    updateSelectedNotesCount();
    hideDeleteButton();
    updateDeleteButtonStatus();
    saveNotes();
  });
}

function moveToRecentlyDeleted(noteElement) {
  noteElement.dataset.deleted = "true";
  recentlyDeleted.push(noteElement.outerHTML);
  noteElement.remove();
  saveNotes();
}

function deletePermanently(noteElement) {
  var index = recentlyDeleted.indexOf(noteElement.outerHTML);
  if (index !== -1) {
    recentlyDeleted.splice(index, 1);
  }
  saveNotes();
}

function setupDownloadButton() {
  document.querySelector(".d-notes-download").addEventListener("click", function () {
    var selectedNotes = document.querySelectorAll(".d-notes-check:checked");

    if (selectedNotes.length > 0) {
      var notesContent = Array.from(selectedNotes).map(function (selectedNote) {
        return selectedNote.closest(".d-notes-note").querySelector(".d-notes-text").textContent;
      }).join("\n");

      var blob = new Blob([notesContent], { type: "text/plain" });
      var downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "selected_notes.txt";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      selectedNotes.forEach(function (selectedNote) {
        selectedNote.checked = false;
      });
      updateSelectedNotesCount();
      updateDeleteButtonStatus();
    } else {
      showSelectSomethingAlert();
    }
  });
}

function showSelectSomethingAlert() {
  var alertElement = document.querySelector(".d-notes-alert");
  alertElement.textContent = "Select something!";
  alertElement.style.display = "block";
  setTimeout(function () {
    alertElement.style.display = "none";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  setupNoteSelection();
  setupDownloadButton();
});

function addNote() {
  var notesBox = document.querySelector(".d-notes-box");
  var newNote = document.createElement("div");
  newNote.classList.add("d-notes-note");

  var noteTitle = document.createElement("div");
  noteTitle.classList.add("d-notes-note-title");

  var checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("d-notes-check-label");

  var checkBoxInput = document.createElement("input");
  checkBoxInput.classList.add("d-notes-check");
  checkBoxInput.setAttribute("type", "checkbox");

  var checkBoxSpan = document.createElement("span");
  checkBoxSpan.classList.add("d-notes-check-span");

  var editButton = document.createElement("button");
  editButton.classList.add("d-notes-note-edit");
  var editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pencil");
  editIcon.style.color = "#162e53";
  editButton.appendChild(editIcon);

  editButton.addEventListener("click", function () {
    var noteText = newNote.querySelector(".d-notes-text");
    noteText.contentEditable = true;
    noteText.focus();
  });

  checkBoxLabel.appendChild(checkBoxInput);
  checkBoxLabel.appendChild(checkBoxSpan);
  noteTitle.appendChild(checkBoxLabel);
  noteTitle.appendChild(editButton);

  newNote.appendChild(noteTitle);

  var noteText = document.createElement("p");
  noteText.classList.add("d-notes-text");
  noteText.contentEditable = true;
  newNote.appendChild(noteText);

  notesBox.appendChild(newNote);

  noteText.addEventListener("blur", function () {
    noteText.contentEditable = false;
    if (noteText.textContent.trim() === "") {
      notesBox.removeChild(newNote);
    }
    updateSelectedNotesCount();
    updateDeleteButtonStatus();
    saveNotes();
  });

  noteText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      noteText.contentEditable = false;
      if (noteText.textContent.trim() === "") {
        notesBox.removeChild(newNote);
      }
      updateSelectedNotesCount();
      updateDeleteButtonStatus();
      saveNotes();
    }
  });

  noteText.focus();

  checkBoxInput.addEventListener("change", function () {
    updateSelectedNotesCount();
    updateDeleteButtonStatus();
    saveNotes();
  });
}

function switchView(view) {
  var notesBox = document.querySelector(".d-notes-box");
  var recentlyDeletedBox = document.querySelector(".d-notes-bin");
  var addButton = document.querySelector(".d-notes-new");
  var downloadButton = document.querySelector(".d-notes-download");

  if (view === "notes") {
    notesBox.style.display = "flex";
    recentlyDeletedBox.style.display = "none";
    addButton.style.display = "block";
    downloadButton.style.display = "block";
  } else if (view === "recentlyDeleted") {
    notesBox.style.display = "none";
    recentlyDeletedBox.style.display = "flex";
    recentlyDeletedBox.innerHTML = recentlyDeleted.join("");
    addButton.style.display = "none";
    downloadButton.style.display = "none";
  }
}