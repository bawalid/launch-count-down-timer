let period = 1209600; //14 days in seconds (14 * 24 * 60 * 60)

// Selectors
const daysValue = $("#days");
const hoursValue = $("#hours");
const minutesValue = $("#minutes");
const secondsValue = $("#seconds");

const x = setInterval(function () {
    
  period--;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(period / (60 * 60 * 24));
  const hours = Math.floor((period % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((period % (60 * 60)) / 60);
  const seconds = Math.floor(period % 60);

  const modifiedDays = Math.floor((period - 1) / (60 * 60 * 24));
  const modifiedHours = Math.floor(((period - 1) % (60 * 60 * 24)) / (60 * 60));
  const modifiedMinutes = Math.floor(((period - 1) % (60 * 60)) / 60);
  const modifiedSeconds = Math.floor((period - 1) % 60);

  daysValue.find(".before").html(days.toString().padStart(2, "0"));
  daysValue.find(".after").html(days.toString().padStart(2, "0"));

  hoursValue.find(".before").html(hours.toString().padStart(2, "0"));
  hoursValue.find(".after").html(hours.toString().padStart(2, "0"));

  minutesValue.find(".before").html(minutes.toString().padStart(2, "0"));
  minutesValue.find(".after").html(minutes.toString().padStart(2, "0"));

  secondsValue.find(".before").html(seconds.toString().padStart(2, "0"));
  secondsValue.find(".after").html(seconds.toString().padStart(2, "0"));

  if (modifiedDays != days) {
    setTimeout(() => {
      daysValue.addClass("flip");
    }, 1000);
  }

  if (modifiedHours != hours) {
    setTimeout(() => {
      hoursValue.addClass("flip");
    }, 1000);
  }

  if (modifiedMinutes != minutes) {
    setTimeout(() => {
      minutesValue.addClass("flip");
    }, 1000);
  }

  if (modifiedSeconds != seconds) {
    secondsValue.addClass("flip");
  }

  setTimeout(function () {
    secondsValue.removeClass("flip");
    minutesValue.removeClass("flip");
    hoursValue.removeClass("flip");
    daysValue.removeClass("flip");
  }, 500);

  // If the count down is finished, write some text
  if (period == 0) {
    clearInterval(x);
  }
}, 1000);
