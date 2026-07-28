function randomQuote() {
    $.ajax({
        url: "https://corsproxy.io/?" + encodeURIComponent("https://zenquotes.io/api/random?t=" + Date.now()),
        dataType: "json",
        success: function( response ) {
            $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
                response[0].q + "<br/>&dash; " + response[0].a + " &dash;</p>");
        }
    });
}
$(function() {
    randomQuote();
});