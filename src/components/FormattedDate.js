export default function FormattedDate({ date }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekday = days[date.getDay()];
  let dateMonth = date.getDate();
  let month = monthName[date.getMonth()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  if (hour.toString().length === 1) {
    hour = "0" + hour;
  }

  return `${weekday}, ${month} ${dateMonth}, ${hour}:${minutes}`;
}
