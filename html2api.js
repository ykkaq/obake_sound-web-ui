const btn = document.getElementsByClassName('btn');
const btn_id = document.getElementById('btn');


const url_api = "http://192.168.10.7:8000";
const url_local = "http://127.0.0.1:8080";

//functions

// クリックテスト用
function click_test() {
  console.log("Clicked_local");

  const url_elem = "";

  api_request(url_local, url_elem);
}

// サウンド再生
function clicked_timing_playing(array_starting) {
  console.log("CLICKED");

  array_starting.forEach(element => {
    const url_elem = element.place;
    const sound = element.sound;
    console.log(element)
    const url = gene_url_playing(url_api, url_elem, sound)
    api_request(url)
  });
}

// サウンドのランダム再生
function clicked_timing_randamize() {
  var min = 0;
  var max = 2;
  var r = Math.floor(<AuthenticatorAssertionResponse.random() * (max + 1 - min) + min);

  var playlist_0 = [
    {
      place: 'room1',
      sound: 'rain.wav'
    },
    {
      place: 'room2',
      sound: 'rain.wav'
    },
    {
      place: 'baby',
      sound: 'baby_laughing_1.wav'
    }
  ];

  var playlist_1 = [
    {
      place: 'room1',
      sound: 'rain.wav'
    },
    {
      place: 'room2',
      sound: 'rain.wav'
    },
    {
      place: 'baby',
      sound: 'baby_laughing_low.wav'
    }
  ];

  var playlist_2 = [
    {
      place: 'room1',
      sound: 'rain.wav'
    },
    {
      place: 'room2',
      sound: 'rain.wav'
    },
    {
      place: 'baby',
      sound: 'baby_laughing_low.wav'
    }
  ];

  var playlists = [playlist_0, playlist_1, playlist_2];
  clicked_timing_playing(playlists[r]);
}

// サウンド停止
function clicked_timing_stopped() {
  console.log("CLICKED");

  const url = gene_url_stopped()
  api_request(url)
}

// 再生url生成
function gene_url_playing(url_base, url_elem, play_sound) {
  return url_base + "/sounds/" + url_elem + "/" + play_sound;
}

// 再生停止url生成
function gene_url_stopped() {
  return url_base + "/stop"
}

// apiリクエスト
function api_request(url) {
  var request = new XMLHttpRequest();
  //request.addEventListener('load', onLoadFunc, false);
  request.open('POST', url, true);
  request.send();
  console.log(url)
}
