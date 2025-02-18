AOS.init();

const eventDate = new Date("Jun 27, 2025 19:00:00");
const evenTimeStamp = eventDate.getTime();

const hoursTimer = setInterval(function() {
 const dayInMs = 1000 * 60 * 60 * 24;
 const hourInMs = 1000 * 60 * 60;
 const minuteInMs = 1000 * 60;
 const now = new Date();
 const nowTimeStamp = now.getTime();
 const timeUntilEvent = evenTimeStamp - nowTimeStamp;
 const daysUntilEvent = Math.floor(timeUntilEvent / (dayInMs));
 const hoursUntilEvent = Math.floor((timeUntilEvent % (dayInMs)) / (hourInMs));
 const minutesUntilEvent = Math.floor((timeUntilEvent % (hourInMs)) / (minuteInMs));
 const secondsUntilEvent = Math.floor((timeUntilEvent % (minuteInMs)) / (1000));
 document.getElementById('timer').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`
 if (timeUntilEvent < 0) {
  clearInterval(hoursTimer);
  document.getElementById('timer').innerHTML = 'A festa já acabou. :('
 }
}, 1000);