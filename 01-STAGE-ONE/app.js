const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getUTCTime = () => {
    const today = new Date();
    
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const weekday = days[day];

    let utcTime = Date.UTC(year, month, day, hour, minute, second);

    timeElement.innerHTML = utcTime;
    dayElement.innerHTML = weekday;
    return utcTime;
}

const updateUTCTime = setInterval(getUTCTime, 1000);
