<template>
  <div class="main-wrapper">
    <div class="container-fluid p-0">
      <section class="resume-section p-5" id="about">
        <div class="my-auto">
          <h2 class="mb-3">{{ text.name }}
            <span class="text-primary">{{ text.surname }} </span>
          </h2>
          <div class="subheading mb-5">{{ text.address }}
            <a href="mailto:name@email.com">{{ text.email }}</a>
          </div>
        </div>
      </section>
      <div v-if="changed == 0">
        <section class="resume-section p-5" id="experience">
          <div class="my-auto">
            <h3 class="mb-5">Experience</h3>
            <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in text.experience" :key="job.description">
              <div class="resume-content mr-auto">
                <h4 class="mb-0">{{ job.position }}</h4>
                <div class="subheading mb-3">{{ job.company }}</div>
                <p>{{ job.description }}</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
              </div>
            </div>
          </div>
        </section>
        <section class="resume-section p-5" id="education">
          <div class="my-auto">
            <h3 class="mb-5">Education</h3>
            <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="study in text.education" :key="study.description">
              <div class="resume-content mr-auto">
                <h4 class="mb-0">{{ study.course }}</h4>
                <div class="subheading mb-3">{{ study.university }}</div>
                <div>{{ study.description }}</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{ study.startDate }} - {{ study.endDate }}</span>
              </div>
            </div>
          </div>
        </section>
        <section class="resume-section p-5" id="skills">
          <div class="my-auto">
            <h3 class="mb-5">Skills</h3>

            <div class="subheading mb-3">As a Developer</div>
            <ul class="fa-ul mb-3" v-for="skill in text.skills" :key="skill.sk">
              <li>
                <i class="fa-li fa fa-terminal"></i>
                {{skill.sk}}</li>
            </ul>
            <div class="subheading mb-3">As a Human</div>
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
              <li class="list-inline-item">
                <i class="devicon-heroku-line-wordmark"></i>
              </li>
            </ul>
          </div>
        </section>
        <section class="resume-section p-5" id="interests">
          <div class="my-auto">
            <h3 class="mb-3">Interests</h3>          
            <p>{{text.interests}}</p>
          </div>
        </section>
        <section class="resume-section p-5" id="awards">
          <div class="my-auto">
            <h3 clachangedss="mb-5" id="certi">Certifications</h3>
            <ul class="fa-ul mb-0">
              <li>
              <i class="fa-li fa fa-check"></i>
                {{text.awards.certificate}}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dataText from '@/assets/text.js'
import prankText from '@/assets/pranktext.js'

export default {
  name: 'landing',
  data: function () {
    return {
      text: dataText,
      textPrank: prankText,
      textCopy: dataText,
      typeArray: prankText.isA,
      changed: 0,
      counter: 0
    }
  },
  methods: {
    isMobile() {
        if( screen.width <= 760 ) {
            return true;
        }
        else {
            return false;
        }
    },
    changeText() {
      this.changed = (this.changed == 0)? 1 : 0
      this.counter++
      if(this.changed == 1) {
        this.text = this.textPrank
      }
      if(this.changed == 0) {
        this.text = this.textCopy
      }
      if(this.counter > 5){
        alert('Ook hai visto che funziona? Bene! A quanto pare non hai di meglio da fare? Ho un video per te https://www.youtube.com/watch?v=Z0RnMMk4mL8')
        this.counter = 0
      }
    }
  },
  metaInfo() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: this.text.aboutMe2
        }
      ]
    }
  },
  created: function () {
    if (!this.isMobile()) {
        this.$router.push('/Home');
    }
  },
  mounted: function () {
  }
}
</script>
<style>

html{
  overflow-x: hidden
}

body {
  font-family: 'Open Sans', serif;
  overflow-x: hidden;
  padding: 0,0,0,0!important;
  position: relative;
  color: #868e96;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif;
  font-weight: 200;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 4.5rem;
}

h2 {
  font-size: 2.5rem;
}

.subheading {
  text-transform: uppercase;
  font-size: 5 !important;
  font-weight: 200;
  font-family: 'Saira Extra Condensed', serif
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

section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
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