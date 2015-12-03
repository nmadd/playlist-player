var mySound;
var myPlaylist = [];

soundManager.setup({
  url: './sounds/',
  onready: function() {
    mySound = soundManager.createSound({
      id: 'aSound',
      url: './sounds/Time.m4a'
    });
    //mySound.play();
  }, 
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});

// function loadSound(songName){
//   mySound = soundManager.createSound({
//       id: songName + 1,
//       url: './sounds/' + songName + '.m4a',
//       whileplaying: function() {
//       $(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
//   }
//     });
// }
var idCount = 0;
function createSound(val){
  idCount++;
  mySound = soundManager.createSound({
      id: "song" + idCount,
      url: val,
      whileplaying: function() {
      $(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
  }
    });
  
}



$(document).ready(function(){
  $('p').each(function(index){
    var $this = $(this);
    console.log($this.attr("val"));
    var newSound = createSound($this.attr('val'))
    console.log(newSound)
    myPlaylist.push(newSound);
    
  });

  $(".play-pause").click(function(){
    mySound.togglePause();
    // console.log("position " + mySound.position/1000);
    // console.log("duration " + mySound.duration/1000);
    // console.log("progress bar " + mySound.position/mySound.duration * 100)
  });
  // $(".load-btn").click(function(){
  //   mySound.stop();
  //   console.log($(this).val())
  //   loadSound($(this).val());
  //   mySound.togglePause();
  // });
  $(".song").click(function(){
    mySound.stop();
    console.log($(this).val())
    createSound($(this).attr('val'));
    mySound.togglePause();
  });
  $(".progress").click(function(e){
    //mySound.stop();
    //console.log(e.pageX);
    var clickLocation = e.pageX/$(".progress").width()*100;
    var progBarLocation = mySound.position/mySound.duration * 100;
    console.log(clickLocation);
    console.log(mySound.position);
    soundManager.setPosition(mySound.id, clickLocation *mySound.duration /100);
    });
});

