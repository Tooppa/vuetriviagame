<div id='top'></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h2 align="center">Trivia Game</h2>
  <p align="center">
    Trivia game made using Vue 3
    <br />
    <a href="https://super-trivia-app.herokuapp.com/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Group project made during Experis Academy Full-Stack Developer course. Courses are hosted by [Noroff](https://www.noroff.no/en/). Project members are listed on the <a href="#collaborators">collaborators</a> section.

Purpose of this assignement was to learn different aspects of Vue 3. This project fetches data from 2 APIs: `Users API` and `Trivia API`. 

`Users API` is pre-made backend service made by Noroff, which is used to handle store user data. 

`Trivia API` is publicly available API, which is used to fetch questions and answers.


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [JavaScript](https://javascript.com/)
- [Vue.js](https://vuejs.org/)
- [Open Trivia API](https://opentdb.com/api_config.php)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Have npm installed. npm comes installed with NodeJs, Please go [here](https://v3.vuejs.org/guide/installation.html#download-and-self-host)  to download it. 
- Make sure you have Vue 3 installed. Follow [this](https://v3.vuejs.org/guide/installation.html#download-and-self-host) guide on how complete the setup.


### Installation

1. Generate random base64 string. This is your API key, save it for later. 

2. Clone the repo
   ```sh
   git clone https://github.com/Tooppa/vuetriviagame.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env.local` file on your project root directory.

5. Paste the following text to the create file:
   ```
    VUE_APP_USERS_API_KEY={your-api-key}
    VUE_APP_USERS_BASE_URL=https://noroff-accelerate-api.herokuapp.com/trivia
    VUE_APP_TRIVIA_BASE_URL=https://opentdb.com/api.php
    VUE_APP_TRIVIA_CATEGORY_BASE_URL=https://opentdb.com/api_category.php
   ```
6. Deploy backend api. Follow this [repository](https://github.com/dewald-els/noroff-assignment-api) for guidance
7. Your generated base64 string is your `API_KEY`. Add it as your Config Vars on [Heroku Dashboard](https://dashboard.heroku.com) 
8. Add your generated API key string to `VUE_APP_USERS_API_KEY` section of your `.env.local` file
9. Run the app locally with:
```
npm run serve
```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage


Firstly the app asks you to input a username. This username can be used later to 'log-in' to your previous  account. You may also select difficulty, how many questions you wish to answer and the question category.

![screenshot-login]

After you've entered your desired username and settings for you quiz, It's time to play! 

There are either multiple choice or true/false questions. Questions are laid out as seen in the picture below. Click on the questions to pick which you think is the right asnswer.

![screenshot-question]

When you've finised answering all of the questions, you are presented with the correct answers to the questions asked. Your answers are colored in aquamarine and correct answers in red. If you do not see red answers, that means you have answered the question correctly. 

On the top of the screen you have 2 buttons where you can either update your current score, or go back to start. NOTE: Going back to start does not save your new score. Save score button is shown only if you have scored better than your previous highscore.

![screenshot-results]


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Collaborators

<div id='collaborators'></div>

Tomas Valkendorff
[![LinkedIn][linkedin-shield]][linkedin-url-tomas] [![GitHub][github-badge]][github-url-tomas]

Mikko Ryynänen
[![LinkedIn][linkedin-shield]][linkedin-url-mikko] [![GitHub][github-badge]][github-url-mikko]

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[github-badge]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[linkedin-url-tomas]: https://www.linkedin.com/in/tomasvalkendorff/
[linkedin-url-mikko]: https://www.linkedin.com/in/mikko-ryynanen
[github-url-tomas]: https://github.com/Tooppa
[github-url-mikko]: https://github.com/mikkoryynanen
[screenshot-login]: screenshots/screenshot-login.png
[screenshot-question]: screenshots/screenshot-question.png
[screenshot-results]: screenshots/screenshot-results.png