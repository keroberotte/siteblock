chrome.storage.local.get(null, function(items){
    if(!items || !items['state']) return;
    var ut = JSON.parse(items['state']).ut;
    document.getElementById("container").innerHTML += "time_used: " + ut.time_used;
    document.getElementById("container").innerHTML += "<br/>";
    document.getElementById("container").innerHTML += "last_start: " + ut.last_start;
    document.getElementById("container").innerHTML += "<br/>";
    document.getElementById("container").innerHTML += "last_end: " + ut.last_end;
    document.getElementById("container").innerHTML += "<br/>";
    document.getElementById("container").innerHTML += "until reset: " +  + ((ut.last_reset + 24 * 3600) - ((new Date()).getTime() / 1000));
});
