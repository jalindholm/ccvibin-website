(function () {
  const countdown = document.querySelector("[data-contest-countdown]");

  if (!countdown) return;

  const deadline = new Date(countdown.dataset.countdownEnd).getTime();

  if (!Number.isFinite(deadline)) return;

  const daysValue = countdown.querySelector("[data-countdown-days]");
  const hoursValue = countdown.querySelector("[data-countdown-hours]");
  const minutesValue = countdown.querySelector("[data-countdown-minutes]");
  const secondsValue = countdown.querySelector("[data-countdown-seconds]");
  const message = countdown.querySelector("[data-countdown-message]");
  const summary = countdown.querySelector("[data-countdown-summary]");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function setText(element, value) {
    if (element && element.textContent !== value) element.textContent = value;
  }

  function renderCountdown() {
    const remaining = Math.max(deadline - Date.now(), 0);
    const days = Math.floor(remaining / day);
    const hours = Math.floor((remaining % day) / hour);
    const minutes = Math.floor((remaining % hour) / minute);
    const seconds = Math.floor((remaining % minute) / second);

    setText(daysValue, String(days));
    setText(hoursValue, String(hours).padStart(2, "0"));
    setText(minutesValue, String(minutes).padStart(2, "0"));
    setText(secondsValue, String(seconds).padStart(2, "0"));

    if (remaining === 0) {
      countdown.classList.add("is-ended");
      setText(message, "Entries for the 2026 Summer Contest are now closed.");
      setText(summary, "The 2026 Summer Contest entry period has ended.");
      return false;
    }

    const dayLabel = days === 1 ? "day" : "days";
    const hourLabel = hours === 1 ? "hour" : "hours";

    setText(
      message,
      `${days} ${dayLabel} and ${hours} ${hourLabel} remain — entries close Labor Day at 11:59 p.m. ET.`
    );
    setText(
      summary,
      `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remain in the 2026 Summer Contest.`
    );

    return true;
  }

  if (renderCountdown()) {
    const timer = window.setInterval(() => {
      if (!renderCountdown()) window.clearInterval(timer);
    }, second);
  }
})();
