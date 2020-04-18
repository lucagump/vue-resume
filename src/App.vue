<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpg">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="about-bg"></div>
        <div class="my-auto">
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:name@email.com">{{ email }}</a>
          </div>
          <p class="mb-0">{{ aboutMe1 }}</p>
          <p class="mb-5">{{ aboutMe2 }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/luca.martinelli.12139">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/lucagump">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/luca-martinelli-7ab713168">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https:\\www.github.com/lucagump">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
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
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="study in education" :key="study.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{study.course}}</h3>
              <div class="subheading mb-3">{{study.university}}</div>
              <div>{{study.description}}</div>
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
          <ul class="fa-ul mb-3" v-for="skill in skills" :key="skill.sk">
            <li>
              <i class="fa-li fa fa-check"></i>
              {{skill.sk}}</li>
          </ul>
          <div class="subheading mb-3"> As a Human</div>
          <ul class="fa-ul mb-3" v-for="softskill in softskills" :key="softskill.ss">
            <li>
              <i class="fa-li fa fa-check"></i>
              {{softskill.ss}}</li>
          </ul>
          <div class="subheading mb-4">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicons devicons-html5"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-github"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-mongodb"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-npm"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-nodejs"></i>
            </li>
            <li>
            <i class="fa fa-google-drive"></i>
            </li>
          </ul>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>{{interests.first_description}}</p>
          <p class="mb-0">{{interests.second_description}}</p>
        </div>
      </section>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
            <i class="fa-li fa fa-check"></i>
              {{awards.certificate}}</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Luca Martinelli',
      name: 'Luca',
      surname: 'Martinelli',
      address: 'Strada Boiane 3 · Suzzara (MN) IT 46029 · (+39) 333-4895818 ·',
      email: 'l.martinelli@hotmail.com',
      aboutMe1: 'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.',
      aboutMe2: 'Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
      experience: [
        {
          position: 'Software Engineer',
          company: 'Zucchetti',
          description: 'I\'m working in Horeca group, TCPOS is Zucchetti’s omni-functional hub for seamless guest service in restaurants, canteens, quick-service and hotels.',
          startDate: 'February 2020',
          endDate: 'Present'
        },
        {
          position: 'Project Manager and Software Developer',
          company: 'E-Agle Trento Racing Team',
          description: 'Design and development of the user-interface for Chimera Evoluzione\'s Steering Wheel (Qt). During one of the competition in Varano (PR) 2018 - "Best HMI Solution" Prize from Automobili Lamborghini. Design and Development of the Telemetry Solution using MQTT protocol for a Cloud Based Web Application using Raspberry PI, MongoDB and Vue. Project-Management related to the development of HW and SW solution for "Telemetria" and"Fenice Steering Wheel"',
          startDate: 'September 2017',
          endDate: 'Present'
        },
        {
          position: 'Full Stack Developer',
          company: 'Prom Facility',
          description: 'Design and development of micro-services web application used to collect and display data from machinery and other internal purposes.',
          startDate: 'Novembre 2018',
          endDate: 'April 2019'
        }
      ],
      education: [
        {
          course: 'Master Degree in ICT Innovation Software and Service Architectures',
          university: 'Università degli Studi di Trento',
          description: '',
          startDate: 'September 2019',
          endDate: 'Present'
        },
        {
          course: 'Bachelor Degree in Computer Science',
          university: 'Università degli Studi di Trento',
          description: '',
          startDate: 'September 2015',
          endDate: 'July 2019'
        }
      ],
      interests: [
        {
          first_description: 'Apart from being a student and a developer, I enjoy most of my time being a strict contact with nature. In the winter, I am an Snowboarder. I enjoy mountain biking',
          second_description: 'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring problem-solver, and I spend a large amount of my time exploring the latest technolgy in the software development and design interaction.'
        }
      ],
      awards: {
        description: 'Best HMI Solution - Automobili Lamborghini S.p.A.',
        certificate: 'English: B2 certified by "Centro Linguistico di Ateneo - Università degli Studi di Trento"'
      },
      skills: [
        {sk: 'Qt, C++, QML: Cross-Platform Development'},
        {sk: 'Can-Bus: Linux Embedded Systems'},
        {sk: 'Linux: Embedded Systems and Server'},
        {sk: 'Node.JS & Vue.JS: Services and Web Application'},
        {sk: 'C# and .NET: First Steps'}
      ],
      softskills: [
        {ss: 'Design Thinking'},
        {ss: 'Critical Thinking'},
        {ss: 'Emotional Intelligence'},
        {ss: 'Co-Design'},
        {ss: 'Empathy'}
      ],
      field: 'Automotive, Formula Student, Linux, Snowboard, Athletics and Mountain Bike'
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
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

h2 {
  font-size: 3.5rem;
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
    border: 0.1rem solid rgba(255, 255, 255, 0.7);
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
