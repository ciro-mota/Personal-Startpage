</p>

<table align="right">
 <tr><td><a href="https://github.com/ciro-mota/Personal-Startpage/blob/main/README.md">:us: English</a></td></tr>
 <tr><td><a href="https://github.com/ciro-mota/Personal-Startpage/blob/main/README.pt-br.md">:brazil: Português</a></td></tr>
</table>

<h2>A Clean and Simple Startpage</h2>

![Licese](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Last Commit](https://img.shields.io/github/last-commit/ciro-mota/Personal-Startpage?style=for-the-badge)

## Disclaimer

**I didn't develop the elements of this project**, I just put the pieces of the puzzle together to make it work, based on what I would like to have. The changes made were made empirically. You will probably have better ways of doing what I did.
## Based on:

- [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento) before refactor.
- [forismatic](http://forismatic.com/en/api/) API from [code example](https://codepen.io/catapixel/pen/LpVEgy).
- [Reddit API](https://www.reddit.com/dev/api/) for [random wallpaper](https://stackoverflow.com/questions/8191105/how-to-extract-url-data-from-reddit-api-using-json?rq=1).

## Features:

- **Greetings** = Are easy to change to your name.
- **Quotes** = Expressions to stimulate your thought or inspire your day.
- **Weather Icons** = Provided by [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- **Weather** = Provided by OpenWeatherMap.
- **Random Wallpapers** = Provided by Reddit API.
## Customization

The files needed for editing below are contained in the `js` and `css` folder.

### Colors and font size:

You can customize the font size and color via lines **4** to **8** of the `style.css` file.
### Weather Info:

To configure Weather you will need an API Key at: `https://openweathermap.org/`. Once you have your key, you will need to set your latitude and longitude, you can use: `https://www.latlong.net/` to get them. Once you have the data, you will need to configure it in the `weather.js` file on lines **16**, **24** and **25** respectively.

> If you don't like to have your API Key public (and Github discourages this publication due to security issues), you can make the repo into a private one. You can still use the Github Pages service or Netlify.

### Weather Icons:

![](assets/previewico.png)

You set the icon theme changing the line **54** on `weather.js` file:

- For example if you want the White icon theme, change the `White` to `Nord`

### Greetings:

In line **5** until **9** of the `greeting.js` You can put your name and change the greetings translations messages for your language.

```js
var name = 'Ciro';
var lateTxt = 'GO TO SLEEP!!!';
var morningTxt = 'Good morning!';
var afterTxt = 'Good afternoon!';
var evenTxt = 'Good evening!';
```
## Usage

#### As Home Page:
1. Fork this repo.
2. Enable the Github Pages service `Settings` » `Pages` » `Source branch [main branch]` » `Save`.
3. Or publish it to [Netlify](https://www.netlify.com/).    

#### As New Tab:
1. You can use different Extensions:
  - If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search).
  - If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia).

## Final appearance 

![](assets/preview.png)

## Sponsoring

If you like this work, give me it a star on GitHub, and consider supporting it:

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?business=VUS6R8TX53NTS&no_recurring=0&currency_code=USD)