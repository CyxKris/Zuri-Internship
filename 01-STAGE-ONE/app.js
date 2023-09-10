const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getUTCTime = () => {
    const today = new Date();
    const day = today.getDay();
    const weekday = days[day];

    utcTime = today.getTime();

    timeElement.innerHTML = utcTime;
    dayElement.innerHTML = weekday;
    return utcTime;
}

const updateUTCTime = setInterval(getUTCTime, 1000);
