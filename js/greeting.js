var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'Ciro, ' ;
var lateTxt = 'VÁ DORMIR!';
var morningTxt = 'Bom dia!';
var afterTxt = 'Boa tarde!';
var evenTxt = 'Boa noite!';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = name + lateTxt;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = name + morningTxt;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = name + afterTxt;
} else {
    document.getElementById('greetings').innerText = name + evenTxt;
}
