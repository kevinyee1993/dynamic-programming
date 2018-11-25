const req = new XMLHttpRequest();

req.open('GET', 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json', true);

req.onload = function() {
  if(this.status === 200) {
    console.log("gotem coach");
  }
};

req.onerror = function() {
  console.log("nope");
};

req.send();
