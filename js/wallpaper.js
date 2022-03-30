$.getJSON("https://www.reddit.com/r/EarthPorn/.json", function(data) { 
    $.each(data.data.children, function(i,item){
        const bgPath = item.data.url;
        document.querySelector('html').style.backgroundImage = "url(" + bgPath + ")";
    });
});