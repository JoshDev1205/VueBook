<template>
  <div id="app">
    <div class="hero is-fullheight wrapper">
      <div class="hero-head">
        <header class="navbar">
          <div class="container title-container">
            <div class="navbar-brand">
              <div class="nav-item">
                <span class="title-container__title">VueBook</span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="hero-body main-container">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2 has-background-white-ter">
              <router-view></router-view>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogIn from './components/LogIn'
export default {
  name: 'app',
  components: { LogIn },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';
  @import url('https://fonts.googleapis.com/css?family=Bangers');
  @import url('https://fonts.googleapis.com/css?family=Lato');

  $body-background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
  $title-bg: #d8a835;
body {
    font-family: 'Lato';
  }
.wrapper {
  background: $body-background;
}
.title-container {
  justify-content: center;
}

.main-container {
  align-items: start !important;
}

.title-container__title {
  font-size: 50px;
  letter-spacing: 2px;
  line-height: 1.3;
  font-family: 'Bangers', serif;
  color: $title-bg;
}

</style>
