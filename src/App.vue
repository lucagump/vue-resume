<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg">
        </span>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Certification</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="about-bg"></div>
        <div class="my-auto">
          <h1 class="mb-0">{{ text.name }}
            <span class="text-primary">{{ text.surname }}</span>
            <span class="typed-text">{{ typeValue }}</span>
            <!--  <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>-->
          </h1>
          <vue-typed-js :strings="['First text', 'Second Text']">
            <h1 class="typing"></h1>
          </vue-typed-js>
          <div class="subheading mb-5">{{ text.address }}
            <a href="mailto:name@email.com">{{ text.email }}</a>
          </div>
          <p class="mb-2">{{ text.aboutMe1 }}</p>
          <p class="mb-5">{{ text.aboutMe2 }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/luca.martinelli.12139">
                <span class="fa-stack fa-lg">
                <i class="devicon-facebook-plain"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/lucagump">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-instagram"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://open.spotify.com/user/lucagump?si=nX0vPKcKRTm0I7YKpfxOMw">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-spotify"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/luca-martinelli-7ab713168">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-linkedin"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https:\\www.github.com/lucagump">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-github-square"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in text.experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="study in text.education" :key="study.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ study.course }}</h3>
              <div class="subheading mb-3">{{ study.university }}</div>
              <div>{{ study.description }}</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ study.startDate }} - {{ study.endDate }}</span>
            </div>
          </div>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3"> As a Developer</div>
          <ul class="fa-ul mb-3" v-for="skill in text.skills" :key="skill.sk">
            <li>
              <i class="fa-li fa fa-terminal"></i>
              {{skill.sk}}</li>
          </ul>
          <div class="subheading mb-3"> As a Human</div>
          <ul class="fa-ul mb-3" v-for="softskill in text.softskills" :key="softskill.ss">
            <li>
              <i class="fa-li fa fa-check"></i>
              {{softskill.ss}}</li>
          </ul>
          <div class="subheading mb-4">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-mongodb-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-linux-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-nodejs-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-visualstudio-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-csharp-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-vim-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-ubuntu-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-windows8-original"></i>
            </li>
            <li class="list-inline-item">
             <i class="devicon-vuejs-plain"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-photoshop-line"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-express-original"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-github-plain-wordmark"></i>
            </li>
          </ul>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-3">Interests</h2>
          <div class="int-images">
            <img src="./assets/insta-2.jpg" class="rounded mx-auto mb-2" width="41%" alt="Responsive image">
            <img src="./assets/insta-3.jpg" class="rounded mx-auto mb-2" width="30.8%" alt="Responsive image">
            <img src="./assets/insta-1.jpg" class="rounded mx-auto mb-2" width="24.7%" alt="Responsive image">
          </div>
          <p>{{text.interests}}</p>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5" id="certi">Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
            <i class="fa-li fa fa-check"></i>
              {{text.awards.certificate}}</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import dataText from './assets/text.js'
import { setTimeout } from 'timers'

export default {
  name: 'landing',
  data: function () {
    return {
      text: dataText,
      typeValue: '',
      typeStatus: false,
      typeArray: dataText.isA,
      typingSpeed: 50,
      erasingSpeed: 30,
      newTextDelay: 500,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0
        }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  },
  created: function () {
  },
  mounted: function () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>

<style>
body {
  font-family: 'Open Sans', serif;
  padding-top: 54px;
  color: #868e96;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

typed-text {
  color: #D2B94B;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #BD5D38;
  animation: cursorBlink 1s infinite;
}

/* .typing {
  animation: none;
}
 */

h2 {
  font-size: 3.5rem;
}

.int-images{
  display: inline;
  vertical-align: center;
}

.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', serif;
  font-size: 1.35rem;
}

.list-social-icons a {
  color: #495057;
}

.list-social-icons a:hover {
  color: #BD5D38;
}

.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}

.list-icons {
  font-size: 3rem;
}

.list-icons .list-inline-item i:hover {
  color: #BD5D38;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}

@keyframes cursorBlink {
  49% { background-color: #ffffff; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 13rem;
    max-height: 13rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.bg-primary {
  background-color: #BD5D38 !important;
}

.text-primary {
  color: #BD5D38 !important;
}

a {
  color: #BD5D38;
}

a:hover, a:focus, a:active {
  color: #824027;
}
</style>
