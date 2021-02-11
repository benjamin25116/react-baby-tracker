import './App.css';

function showDate() {
  let date = new Date();
  let day;
  let month;
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
       month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
        month = "December";
  }


  return `${day}, ${date.getDate()} ${month}`;
}

function showGreeting() {
  let date = new Date()
  let hours = date.getHours()
  if (hours < 12) {return "Good morning"}
  if (hours > 11 && hours < 18) {return "Good afternoon"}
  return "Good evening"
}

function ageInWeeks(days) {
  return Math.floor(days % 7)
}

function ageInDays() {
  let dob = new Date()
  dob.setMonth(0)
  dob.setDate(26)
  dob.setHours(14)
  dob.setMinutes(11)
  let today = new Date()
  return (Math.floor((today - dob)/1000/60/60/24))%7
  
}

function App() {
  
  return (
    <div className="App">
        <div className="hero__banner">
          <section className="greeting__section">
          <span className="greeting__section--date">{showDate()}</span>
          <span className="greeting__section--greeting">{showGreeting()},</span>
          <span className="greeting__section--name">Ben, Huey Lin & Eleora</span>
         </section>
         <section className="baby__age">
           <article className="baby__age--weeks">
           <span>{ageInWeeks(ageInDays())}</span><span className="age--weeks--description">{ageInWeeks(ageInDays()) > 1 ? " Weeks" : " Week"}</span>
           </article>
           <article className="baby__age--days">
           <span>{ageInDays()}</span><span className="age--days--description">{ageInDays() > 1? " Days": " Day"}</span>
           </article>
         </section>
       </div>
    </div>
  );
}

export default App;
