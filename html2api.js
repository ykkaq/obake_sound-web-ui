const btn = document.getElementsByClassName('btn');
const btn_id = document.getElementById('btn');


const url_api = "http://192.168.10.7:8000";
const url_local = "http://127.0.0.1:8080";

//functions
function click_test() {
  console.log("Clicked_local");

  const url_elem = "";

  api_request(url_local, url_elem);
}

function clicked_timing(array_starting) {
  console.log("CLICKED");

  array_starting.forEach(element => {
    const url_elem = element.place;
    const sound = element.sound;
    console.log(element)
    api_request(url_api, url_elem, sound)
  });
}

function api_request(url_base, url_elem, start_sound) {
  var request = new XMLHttpRequest();
  const url = url_base + "/" + url_elem + "/" + start_sound;
  //request.addEventListener('load', onLoadFunc, false);
  request.open('GET', url, true);
  request.send();
  console.log(url)
}

/*
function display_getinfo() {
  var request = new XMLHttpRequest();
  const url_sounds = url_api + "/" + "sounds";
  const url_devices = url_api + "/" + "devices";
  xhr.addEventListener('load', onLoadFunc, false);
  request.open('GET', url_sounds, true);
  request.send(null);
  request.open('GET', url_devices, true);
  request.send();
  var info = 
}
*/