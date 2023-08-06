
</p>

<table align="right">
 <tr><td><a href="https://github.com/ciro-mota/Personal-Startpage/blob/main/README.md">:us: English</a></td></tr>
 <tr><td><a href="https://github.com/ciro-mota/Personal-Startpage/blob/main/README.pt-br.md">:brazil: Português</a></td></tr>
</table>

<h2>Clean e Simples Startpage</h2>

![Licença](https://img.shields.io/badge/Licença-GPLv3-blue.svg?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Último Commit](https://img.shields.io/github/last-commit/ciro-mota/Personal-Startpage?style=for-the-badge)

## ⚠️ Disclaimer

**Eu não desenvolvi os elementos deste projeto**, apenas juntei as peças do quebra-cabeças para fazer ele funcionar, com base naquilo que eu gostaria de ter. As mudanças realizadas foram feitas de forma empírica. Vocês provavelmente terão maneiras melhores de fazer o que eu fiz.
## ⭐ Baseado em:

- [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- [forismatic](http://forismatic.com/en/api/) API [código de exemplo](https://codepen.io/catapixel/pen/LpVEgy).
- [Reddit API](https://www.reddit.com/dev/api/) com [wallpaper aleatórios](https://stackoverflow.com/questions/8191105/how-to-extract-url-data-from-reddit-api-using-json?rq=1).

## ✨ Recursos:

- **Saudações** = Fácil de mudar para o seu nome.
- **Citações** = Citações para estimular seu pensamento ou inspirar seu dia.
- **Icones de clima** = Criados por [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento).
- **Clima** = Provido por OpenWeatherMap.
- **Wallpapers aleatórios** = Provido por Reddit API.
## 🎨 Customização

Os arquivos necessários para edição abaixo estão contidos na pasta `js`.
### 🌑 Cores e tamanho da letra:

Você pode personalizar o tamanho das letras e cor através das linhas **4** a **8** do arquivo `style.css`.
### ⛈️ Clima:

Para configurar o Clima você precisará de uma API Key em: `https://openweathermap.org/`. Depois de ter sua chave, você precisará definir sua latitude e longitude, você pode usar: `https://www.latlong.net/` para obtê-los. Assim que tiver os dados você precisará configurá-los no arquivo `weather.js` nas linhas **22**, **30** e **31** respectivamente.

> Se você não quiser que sua chave de API seja pública (e o Github desencoraja essa publicação devido a questões de segurança), poderá tornar o repositório privado. Você ainda poderá usar o serviço Github Pages ou Netlify.
### 🌎 Condições climáticas:

Você pode definir o idioma das condições climáticas editando a variável na linha **2** no arquivo `weather.js`.

Veja quais idiomas suportados: https://openweathermap.org/current#multi

### ☁️ Icones de clima:

![](assets/previewico.png)

Você define o tema do ícone alterando a linha **5** no arquivo `weather.js`:

- Por exemplo, se você quiser o tema do ícone White, altere o `White` para `Nord`

### 👋 Saudações:

Nas linhas **5** até **9** do arquivo `greeting.js` você deverá colocar seu nome e traduzir as mensagens para seu idioma.

```js
var myname = 'Ciro';
var lateTxt = 'GO TO SLEEP!!!';
var morningTxt = 'Good morning!';
var afterTxt = 'Good afternoon!';
var evenTxt = 'Good evening!';
```
## 🚀 Uso

### 🏡 Como Home Page:
1. Fork este repo.
2. Ative o Github Pages em `Settings` » `Pages` » `Source [main branch]` » `Save`.
3. Ou publique-o no [Netlify](https://www.netlify.com/).

### ➕ Como nova aba:
1. Você pode usar extensões diferentes
  - No Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search).
  - No Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia).

### 🐳 Em um Docker Container

Você pode executar esta página inicial simples em um Docker Container com sua própria imagem fornecida pelo arquivo `Dockerfile` incluso ou por meio do arquivo `docker-compose` também incluso neste repo.
#### Docker Container Run
1. Clone este repo.
2. `docker buildx build -t startpage .`
3. `docker run -itd -p 8080:80 startpage`
4. A página estará disponível na porta 8080: `localhost:8080`

#### docker-compose
1. Clone este repo.
2. `# docker-compose -d up`
3. A página estará disponível na porta 8080: `localhost:8080`

## Aparência final: 

![](assets/preview.png)



