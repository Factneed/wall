

let date;
let options = { day: 'numeric', month: 'long', weekday: 'long'};
setInterval(() => {
    a = new Date();
    date = a.toLocaleTimeString(undefined, options);
  ;
    document.getElementById('times').innerHTML = date ;
}, 1000);


