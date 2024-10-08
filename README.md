<h2>A Clean and Simple Startpage</h2>

<p align="center">
    <img alt="License" src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge">
    <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img alt="JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</p>

## ⚠️ Disclaimer

**I didn't develop the elements of this project**, I just put the pieces of the puzzle together to make it work based on what I would like to have.

## ⭐ Based on:

- [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento)
- [forismatic](http://forismatic.com/en/api/) API from [code example](https://codepen.io/catapixel/pen/LpVEgy).
- [Reddit API](https://www.reddit.com/dev/api/) for [random wallpaper](https://stackoverflow.com/questions/8191105/how-to-extract-url-data-from-reddit-api-using-json?rq=1).

> [!WARNING]\
> You must check the licenses of the respective components if you wish to use any of them commercially.

## ✨ Features:

- **Greetings** = Are easy to change to your name.
- **Quotes** = Expressions to stimulate your thought or inspire your day.
- **Weather Icons** = Provided by [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- **Weather** = Provided by [OpenWeatherMap](https://openweathermap.org/).
- **Random Wallpapers** = Provided by [Reddit API](https://www.reddit.com/dev/api/).
- **Responsive** = Will adapt to most devices.

## 🎨 Customization

The files needed for editing below are contained in the `js` and `css` folder.

### 🌑 Colors and font size:

The main colors can be customized through the file `style.css`.

> [!TIP]\
>You can customize the font size and color via lines **4** to **8** of the file.

### ⛈️ Weather Info:

To configure weather you will need an API Key at: `https://openweathermap.org/`. Once you have your key you will need to set your latitude and longitude, you can use: `https://www.latlong.net/` to get them.

> [!TIP]\
>Once you have the data you will need to configure it in the `weather.js` file on lines **3**, **22**, **30** and **31** respectively.

> [!IMPORTANT]
> If you don't like to have your API Key public (me and Github strongly discourage this publication due to security issues), you can make the repo into a private one. You can still use the Github Pages service or Netlify.

### 🌎 Weather Language:

See languages supported in: https://openweathermap.org/current#multi

> [!TIP]\
>You can set the language of weather conditions changing the variable in the line **2** on `weather.js` file.

### ☁️ Weather Icons:

![](assets/previewico.png)

- For example if you want the White icon theme, change the `White` to `Nord`.

> [!TIP]\
>You can set the icon theme changing the variable in the line **5** on `weather.js` file:

### 👋 Greetings:

In line **5** until **9** of the `greeting.js`:

```js
var myname = 'Ciro';
var lateTxt = 'GO TO SLEEP!!!';
var morningTxt = 'Good morning!';
var afterTxt = 'Good afternoon!';
var evenTxt = 'Good evening!';
```

> [!TIP]\
>You should put your name and change the greetings translations messages for your language.

## 🚀 Usage

### 🏡 As Home Page:
1. Fork this repo.
2. Enable the Github Pages service `Settings` » `Pages` » `Source branch [main branch]` » `Save`.
3. Or publish it to [Netlify](https://www.netlify.com/).

### ➕ As New Tab:
1. You can use different Extensions:
  - If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/).
  - If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia).

### 🐳 In a Docker Container

You can run this Simple Startpage in a Docker Container buildind your own imagem provided by my `Dockerfile` included or via also included `docker-compose` file.

#### Docker Container Run
1. Clone this repo.
2. `docker buildx build -t startpage .`
3. `docker run -d --restart=unless-stopped -p 8080:8080 startpage`
4. The page will be available at the port 8080: `localhost:8080`

#### docker-compose
1. Clone this repo.
2. `docker-compose -d up`
3. The page will be available at the port 8080: `localhost:8080`

## 💻 Final appearance

![](assets/preview.webp)

## 🎁 Sponsoring

If you like this work, give me it a star on GitHub, and consider supporting it:

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?business=VUS6R8TX53NTS&no_recurring=0&currency_code=USD)
