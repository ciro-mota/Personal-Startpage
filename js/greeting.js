var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'Ciro, ' ;
var lateTxt = 'GO TO SLEEP!!!';
var morningTxt = 'Good morning!';
var afterTxt = 'Good afternoon!';
var evenTxt = 'Good evening!';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = name + lateTxt;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = name + morningTxt;
} else if (Hr >= 12 && Hr < 18) {
    document.getElementById('greetings').innerText = name + afterTxt;
} else {
    document.getElementById('greetings').innerText = name + evenTxt;
}
