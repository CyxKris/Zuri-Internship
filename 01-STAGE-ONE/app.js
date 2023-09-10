const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDay = () => {
    const dayIndex = new Date().getUTCDay();
    const weekday = days[dayIndex];
    dayElement.innerHTML = weekday;
}
getDay();

const getUTCTime = () => {
    let utcTime = new Date().getTime();
    timeElement.innerHTML = utcTime;
}

setInterval(getUTCTime, 1000);