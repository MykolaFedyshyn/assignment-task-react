export function calcFactorA() {
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentWeekDay = date.getDay();
  const randomValue = getRandomValue();

  return Math.round((currentMonth + currentWeekDay)/randomValue);
}

export function calcPersonAverageAttitude(personAttitudeData) {
  let totalAttitude = 0;
  personAttitudeData.forEach((month) => {
    totalAttitude += month.attitude;
  });

  return Math.round(totalAttitude/12);
}

export function updateRawsByClassName(className) {
  const raws = document.getElementsByClassName(className);
  for (let raw of raws) {
    raw.className = className;
  }
}

export function getGreeting() {
  const date = new Date();
  const currentHour = date.getHours();

  let msg;

  if (currentHour < 5)
      msg = 'Good Night';
    else if (currentHour < 12)
      msg = 'Good Morning';
    else if (currentHour >= 12 && currentHour < 16)
      msg = 'Good Afternoon';
    else if (currentHour >= 16 && currentHour < 22)
      msg = 'Good Evening';
    else if (currentHour >= 22)
      msg = 'Good Night';

    return msg;
}

export function getWeekdayMessage() {
  const day = new Date().getDay() + 1;
  if (day % 2 === 0) {
    return "Relax..."
  } else {
    return "Do it now..."
  }
}

function getRandomValue() {
  const randomValue = parseFloat(Math.random().toFixed(1));
    
  if (randomValue !== 0) {
      return randomValue;
  } else {
      return getRandomValue();
  }
}