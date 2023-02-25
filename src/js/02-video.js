import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

KEYSTORAGE = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
//console.log(iframe);
const player = new Player(iframe);
//Переводит время видео на время из localstorage
player.setCurrentTime(localStorage.getItem(KEYSTORAGE) || 0);

//Записивает в localstorage время с видео раз в секунду
player.on(
  'timeupdate',
  throttle(function (event) {
   // console.log(event.seconds);
    localStorage.setItem(KEYSTORAGE, event.seconds);
  }, 1000)
);

//console.log(localStorage.getItem(KEYSTORAGE));
