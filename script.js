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
  var playlist = ['PL8mG-RkN2uTyuEutQa79RZ0Q5u5gteUci','PLVVXrfoNMmK7f-EhC013CX7zTbYr3BeRV'];
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

      var ytOutput = '<div class="cardYT" > <a  href="https://youtube.com/watch?v=' + video + '&list=' + listID+ '"><img  class="thumbImg" src=" ' + thumbnail + '"></a>'+ 
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
  let clouds = data.weather[0].main
  var weatherConditions = ["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]
  var weatherIcons = ["http://openweathermap.org/img/wn/11d@2x.png","http://openweathermap.org/img/wn/09d@2x.png","http://openweathermap.org/img/wn/10d@2x.png","http://openweathermap.org/img/wn/13d@2x.png","http://openweathermap.org/img/wn/50d@2x.png","http://openweathermap.org/img/wn/01d@2x.png","http://openweathermap.org/img/wn/04d@2x.png"]
  
  console.log(clouds)
  var i = 0
  weatherConditions.forEach(element => {
    
    if (clouds == element){
        var icon = weatherIcons[i];
        document.querySelector("#card").innerHTML = `<div  class="enthusiastContainer"><img  src=${icon} alt=""> ${element}</div>`
        console.log(icon)
        console.log(element)
    }
    i++
  });
  document.querySelector("#card").innerHTML += `<div class=YTdesc>${data.name}</div><div class=YTtitle>Temperature for today:</div><div class="tempText">${Math.round(data.main.temp)}°C</div>
                                                <div class=YTtitle>Wind speed:</div><div class="tempText">${Math.round(data.wind.speed)} m/s</div>`
}

async function weatherRequest(){
  let apiKEY = "1bd62e349916f98f6d44509d4e32c4e1"
  let place = "Vanderbijlpark"
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKEY}`);
  
  let data = await response.json()
  console.log(data)
  displayWeather(data)
}
