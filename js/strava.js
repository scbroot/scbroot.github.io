
$(document).ready(function(){
    var urlName3 = window.location.href;
    var urlName = urlName3.split("/");
    var urlName = urlName[6];
    function secTime(seconds) {

        var hour = parseInt(seconds/3600);
        var min = parseInt((seconds%3600)/60);
        var sec = seconds%60;

        if (min < 10) min = "0"+min;
        if (sec < 10) sec = "0"+sec;

        return hour+":"+min+":" + sec

    }
    function distanceKilo(metres) {
        var metres = Number(metres);
        var km = metres / 1000;
        return km.toFixed(1);
    }
    $.ajax({
        type:"GET",
        url:"/data/"+urlName+".json",
        success:function(json){
            var pageId= json.id,
                distance = json.distance,
                name = json.name,
                time = json.moving_time,
                elevation = json.total_elevation_gain,
                achievement = json.achievement_count,
                photo = json.photos.primary.urls["600"];
            pageId = "https://www.strava.com/activities/"+pageId;
            $(".stravaLogo").attr("href",pageId);
            $(".stravaName").append(name);
            $(".stravaDistance").append(distanceKilo(distance));
            $(".stravaPhoto").attr("src",photo);
            $(".stravaTime").append(secTime(time));
            $(".stravaElevation").append(elevation);
            $(".stravaAchievement").append(achievement);
            console.log(name+"fin");
        }
    });
});
