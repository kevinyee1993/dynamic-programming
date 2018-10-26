const KEY_TIMES = {
  '15': 'quarter',
  '30': 'half'};


function timeInWords(time) {
  let hour, minute;
  [hour, minute] = time.split(":");

  let roundDown;
  if(minute < 30) {
    roundDown = true;
  } else {
    roundDown = false;
  }

  if(minute === '00') {
    return (hour + " o' clock");
  } else if (roundDown) {
    return getDownTime(hour, minute);
  } else {
    return getUpTime(hour, minute);
  }
}

function getDownTime(hour, minute) {

}

function getUpTime(hour, minute) {
  
}

console.log(timeInWords("5:00"));
