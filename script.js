const timerCards = document.querySelectorAll(".timer-card");
const todoListEl = document.getElementById("todo-list");

const tasks = ["celebrar a Roberto por su maestria"];

const format = (value) => String(value).padStart(2, "0");

const updateCountdown = (card) => {
  const targetValue = card.dataset.target;
  const targetDate = targetValue ? new Date(targetValue) : null;

  if (!targetDate || Number.isNaN(targetDate.getTime())) {
    return;
  }

  const now = new Date();
  const diffMs = targetDate - now;

  const daysEl = card.querySelector('[data-unit="days"]');
  const hoursEl = card.querySelector('[data-unit="hours"]');
  const minutesEl = card.querySelector('[data-unit="minutes"]');

  if (!daysEl || !hoursEl || !minutesEl) {
    return;
  }

  if (diffMs <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysEl.textContent = format(days);
  hoursEl.textContent = format(hours);
  minutesEl.textContent = format(minutes);
};

const updateAllCountdowns = () => {
  timerCards.forEach((card) => updateCountdown(card));
};

updateAllCountdowns();
setInterval(updateAllCountdowns, 60000);

if (todoListEl) {
  todoListEl.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
}
