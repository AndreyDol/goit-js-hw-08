import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
//console.log(iframe);
const player = new Player(iframe);

player.on('timeupdate', function (event) {
  console.log(event.seconds);
});
