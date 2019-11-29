const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('Dec 31, 2019 23:59:59').getTime();

//update every second
const intvl = setInterval(() => {
  // get todays date and times (ms)
  const now = new Date().getTime();

  // Distance from now to the launch date
  const distance = launchDate - now;
  
  //time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 *60));
  const mins = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / (1000));

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Дни</span></div>
    <div>${hours}<span>Часы</span></div>
    <div>${mins}<span>Минуты</span></div>
    <div>${seconds}<span>Секунды</span></div>
  `;

  //if launch date passed
  if(distance < 0) {
    //stop coundown
    clearInterval(intvl);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'С НОВЫМ ГОДОМ!!!';
  }
}, 1000);
