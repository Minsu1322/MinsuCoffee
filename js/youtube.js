// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'JpV6s8wJrBk',
    playerVars: {
      autoplay: true,
      loop: true,
      playList: 'JpV6s8wJrBk'
    },
    events: {
      onReady: function(event){
        event.target.mute()
      }
    }
  });
}

