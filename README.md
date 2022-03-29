
<div align="center">
    <h1>A Clean and Simple Startpage</h1>
</div>

[![Versão-Português_Brasil](https://img.shields.io/badge/Versão-Português_Brasil-%2393CE0A?style=for-the-badge)](/README.pt-br.md)
![Licese](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Last Commit](https://img.shields.io/github/last-commit/ciro-mota/Personal-Startpage?style=for-the-badge)

## Disclaimer

**I didn't develop the elements of this project**, I just put the pieces of the puzzle together to make it work, based on what I would like to have. The changes made were made empirically. You will probably have better ways of doing what I I did.
## Based on:

- [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- [forismatic](http://forismatic.com/en/api/) API from  [code example](https://codepen.io/catapixel/pen/LpVEgy).
- [Reddit API](https://www.reddit.com/dev/api/).

## Features:

- **Greetings** = Are easy to change to your name.
- **Quotes** = Expressions to stimulate your thought and inspire your day.
- **Weather Icons** = Provided by [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- **Weather** = Provided by OpenWeatherMap.
- **Random Wallpapers** = Provided by Reddit API.
## Customization

The files needed for editing below are contained in the `js` folder.
### Weather Info:

To configure Weather, you will need an API Key at: `https://openweathermap.org/`. Once you have your key, you will need to set your latitude and longitude, you can use: `https://www.latlong.net/` to get them. Once you have the data, you will need to configure it in the `weather.js` on lines **16**, **24** and **25**.

> If you don't like to have your API Key public, you can make the repo into a private one. You can still use the Github Pages service.

### Weather Icons:

![](assets/previewico.png)

You set the icon theme changing the line **54** on `weather.js` file:

-   For example if you want the White icon theme, change the `White` to `Nord`

### Greetings:

In line **5** until **9** of the `greeting.js` translate messages for your language. You can put your name and change the greetings.

```js
var name = 'Ciro';
var lateTxt = 'GO TO SLEEP!!!';
var morningTxt = 'Good morning! ';
var afterTxt = 'Good afternoon!';
var evenTxt = 'Good evening!';
```
## Usage

#### As Home Page:
1. Fork this repo.
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`.
3. Set it as Home Page:
    - Click the menu button. and select Options. Preferences.
    - Click the Home panel.
    - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`.
    - Or `git clone` and use locally `index.html` file.

#### As New Tab:
1. You can use different Add-ons/Extensions for it
  - If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search).
  - If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia).

## Final appearance 

![](assets/preview.png)



