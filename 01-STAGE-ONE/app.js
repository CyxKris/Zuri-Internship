const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getUTCTime = () => {
    const today = new Date();
    const weekday = days[today.getUTCDay()];

    let utcTime = Date.now();

    timeElement.innerHTML = utcTime;
    dayElement.innerHTML = weekday;
}

const updateUTCTime = setInterval(getUTCTime, 1000);