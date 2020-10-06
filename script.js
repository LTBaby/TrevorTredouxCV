function menuDisplay(theHamburger) {
  theHamburger.classList.toggle("pattyRotate");
  var element = document.getElementById("thesidebar");
  element.classList.toggle("sideNavAnim");
  //document.getElementById("sidebarnav").style.width = "0px";
}

function scrolltoLeft(parm) {
  var elmnt = document.getElementById(parm);
  elmnt.scrollLeft -= 274;
  
}function scrolltoRight(parm) {
  var elmnt = document.getElementById(parm);
  elmnt.scrollLeft += 274;
  
}
function mouseUp() {
  document.getElementById("playlistscroll").innerHTML = "You released the mouse button.";
}

$(document).ready(function () {
  var key = 'AIzaSyDTaX5O2xE9lrw1KaCe1BAUGtqaBFpkgDM';
  var playlist = ['PLvcSNZqNYJCnnIUOZlVBIiV8oqnQfjc6c','PLVVXrfoNMmK5KVBcgi4ylYev_cshYuZA0'];
  var containers = ['#playlistYTDub','#playlistYT'];
  loadplaylist();

  function loadplaylist() {
    $.each(playlist, function(j,idPlaylist){
      $.get(
          "https://www.googleapis.com/youtube/v3/playlistItems", {
              part: 'snippet',
              key: key,
              maxResults: 20,
              playlistId: idPlaylist
          },function getPlaylist(data) {

              
                console.log(data);
              $.each(data.items, function(i, item) {
                  var output = outputYT(item,idPlaylist);
                  $(containers[j]).append(output);
                  
              });
          });
      });
  }       

  function outputYT(item,listID){
      var thumbnail = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title.substring(0, 30);
      var description = item.snippet.description.substring(0, 100);
      var video = item.snippet.resourceId.videoId;

      var ytOutput = '<div class="cardYT" ><img  class="thumbImg" src=" ' + thumbnail + '">'+ 
                          '<div class="textdescContainer">'+
                              '<div class="YTtitle"> <a href="https://youtube.com/watch?v=' + video + '&list=' + listID+ '">' + title + '</a> </div>'+
                              '<div class="YTdesc" id="Overflow">' + description  + '...</div>' +
                          '</div>'+ 
                      '</div>';
                      
      return ytOutput;
  }

});

//NASA
document.addEventListener("DOMContentLoaded", function(){
  sendApiRequest()
  weatherRequest()
})

async function sendApiRequest(){
  let apiKEY = "IctxZaQRuKITCYGgNzcVWNVrtBJyp80KCpuV0aJv"
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2500&camera=fhaz&api_key=${apiKEY}`);
  let data = await response.json()
  useApiData(data)

}

function useApiData(data){
  document.querySelector("#thebackground").innerHTML = `<img class="headBGHobbies" src="${data.photos[1].img_src}" >`
}

//OpenWeatherMap
function displayWeather(data){
  document.querySelector("#card").innerHTML = `<div class=YTdesc>${data.name}</div><div class=YTtitle>Temperature for today:</div><div class="tempText">${Math.round(data.main.temp)}°C</div>
                                                <div class=YTtitle>Wind speed:</div><div class="tempText">${Math.round(data.wind.speed)} m/s</div>
                                                <div class="tempText">${data.weather[0].main}</div>`
}

async function weatherRequest(){
  let apiKEY = "1bd62e349916f98f6d44509d4e32c4e1"
  let place = "Vanderbijlpark"
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKEY}`);
  
  let data = await response.json()
  console.log(data)
  displayWeather(data)
}
