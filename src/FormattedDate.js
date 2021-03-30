

function FormattedDate(props) {
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


    let weekday = days[props.date.getDay()];
    let dateMonth = props.date.getDate();
    let month = monthName[props.date.getMonth()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
 
    if (minutes.toString().length === 1) {
      minutes = "0" + minutes;
    }
        if (hour.toString().length === 1) {
          hour = "0" + hour;
        }

  return `${weekday}, ${month} ${dateMonth}, ${hour}:${minutes}`;
}

export default FormattedDate;
