function menuDisplay(theHamburger) {
    theHamburger.classList.toggle("pattyRotate");
    var element = document.getElementById("thesidebar");
    element.classList.toggle("sideNavAnim");
    //document.getElementById("sidebarnav").style.width = "0px";
  }

function scrolltoLeft(parm) {
    var elmnt = document.getElementById(parm);
    elmnt.scrollLeft -= 420;
    
  }function scrolltoRight(parm) {
    var elmnt = document.getElementById(parm);
    elmnt.scrollLeft += 420;
    
  }
  function mouseUp() {
    document.getElementById("playlistscroll").innerHTML = "You released the mouse button.";
  }

  $(function(){
    $('#playlistDub').ready(function() {
        var key = 'AIzaSyDTaX5O2xE9lrw1KaCe1BAUGtqaBFpkgDM';
        var playlistId = 'PLPogFqzUrNuHP4o7x2UdPv42lO76teYOK';
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
    
                    console.log(data);
    
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


    var key = 'AIzaSyDTaX5O2xE9lrw1KaCe1BAUGtqaBFpkgDM';
    var playlistId = 'PLw-VjHDlEOgsIgak3vJ7mrcy-OscZ6OAs';
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

                console.log(data);

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


document.addEventListener("DOMContentLoaded", function(){
    sendApiRequest()
  })
  //An asynchronous function to fetch data from the API.
  async function sendApiRequest(){
      let apiKEY = "IctxZaQRuKITCYGgNzcVWNVrtBJyp80KCpuV0aJv"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2500&camera=fhaz&api_key=${apiKEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
    console.log(data.photos)
  }
  
  //function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
  function useApiData(data){

        document.querySelector("#thebackground").innerHTML = `<img class="headBGHobbies" src="${data.photos[1].img_src}" >`

  }
  
  document.addEventListener("DOMContentLoaded", function(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=1bd62e349916f98f6d44509d4e32c4e1")
    .then(response => response.json())
    .then(data => console.log(data))
  })

  //function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
  function useApiData(data){

        document.querySelector("#thebackground").innerHTML = `<img class="headBGHobbies" src="${data.photos[1].img_src}" >`

  }
