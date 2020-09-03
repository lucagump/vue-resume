<template>
<div class="main-wrapper">
  <div v-if="!isMobile()">
    <homeDesktop>
    </homeDesktop>
  </div>
  <div v-else>
    <homeMobile>
    </homeMobile>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import homeDesktop from '@/views/HomeDesktop.vue'
import homeMobile from '@/views/About.vue'
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
  components: {
    homeDesktop,
    homeMobile
  },
  methods: {
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
   isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
    } else {
      return false
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
  },
  mounted: function () {
  }
}
</script>
<style>

body {
  font-family: 'Open Sans', serif;
  padding-top: 54px;
  color: #868e96;
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

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
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
    padding: 0.5rem;
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