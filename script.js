function menuDisplay(theHamburger) {
  theHamburger.classList.toggle("pattyRotate");
  var element = document.getElementById("thesidebar");
  element.classList.toggle("sideNavAnim");
  //document.getElementById("sidebarnav").style.width = "0px";
}

function scrolltoLeft(parm) {
  var elmnt = document.getElementById(parm);
  elmnt.scrollLeft -= 320;
  
}function scrolltoRight(parm) {
  var elmnt = document.getElementById(parm);
  elmnt.scrollLeft += 320;
  
}
function mouseUp() {
  document.getElementById("playlistscroll").innerHTML = "You released the mouse button.";
}

$(function(){
  $('#playlistDub').ready(function() {
      var key = 'AIzaSyCsziM4Y7SGpRD9T1QTw7Ase0c-z8XvPuc';
      var playlistId = 'PLvcSNZqNYJCnnIUOZlVBIiV8oqnQfjc6c';
      var currentVid = ''
      loadplaylist();
  
      function loadplaylist() {
          $.get(
              "https://www.googleapis.com/youtube/v3/playlistItems", {
                  part: 'snippet',
                  key: key,
                  maxResults: 20,
                  playlistId: playlistId
              },function getPlaylist(data) {
  
                 
  
                  $.each(data.items, function(i, item) {
                      var output = outputYT(item,playlistId);
                      $('#playlistYTDub').append(output);
                      
                  });
              });
      }       
  
      function outputYT(item,listID){
          var thumbnail = item.snippet.thumbnails.medium.url;
          var title = item.snippet.title;
          var description = item.snippet.description.substring(0, 200);
          var video = item.snippet.resourceId.videoId;
          console.log(listID)
          var ytOutput = '<div class="cardYT" ><a href="https://youtube.com/watch?v=' + video + '&list=' + listID+ '"><img  class="thumbImg" src=" ' + thumbnail + '"></a>'+ 
                              '<div class="textdescContainer">'+
                                  '<div class="YTtitle"> <a href="https://youtube.com/watch?v=' + video + '&list=' + listID+ '">' + title + '</a> </div>'+
                                  '<div class="YTdesc" id="Overflow">' + description  + '</div>' +
                              '</div>'+ 
                          '</div>';
                          
          return ytOutput;
      }
  });
});

$(document).ready(function () {
  var key = 'AIzaSyCsziM4Y7SGpRD9T1QTw7Ase0c-z8XvPuc';
  var playlistId = 'PLVVXrfoNMmK5KVBcgi4ylYev_cshYuZA0';
  var currentVid = ''
  loadplaylist();

  function loadplaylist() {
      $.get(
          "https://www.googleapis.com/youtube/v3/playlistItems", {
              part: 'snippet',
              key: key,
              maxResults: 20,
              playlistId: playlistId
          },function getPlaylist(data) {

              

              $.each(data.items, function(i, item) {
                  var output = outputYT(item,playlistId);
                  $('#playlistYT').append(output);
                  
              });
          });
  }       

  function outputYT(item,listID){
      var thumbnail = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var description = item.snippet.description.substring(0, 200);
      var video = item.snippet.resourceId.videoId;

      var ytOutput = '<div class="cardYT" ><a href="https://youtube.com/watch?v=' + video + '&list=' + listID+ '"><img  class="thumbImg" src=" ' + thumbnail + '"></a>'+ 
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
  document.querySelector("#container").innerHTML = `<div class="card">${data.main.temp} </div>`
}

async function weatherRequest(){
  let apiKEY = "1bd62e349916f98f6d44509d4e32c4e1"
  let place = "Vanderbijlpark"
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKEY}`);
  console.log(response)
  let data = await response.json()
  displayWeather(data)
}
