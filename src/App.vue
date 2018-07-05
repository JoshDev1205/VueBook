<template>
  <div id="app">
    <section class="hero is-fullheight wrapper">
      <div class="hero-header">
        <div class="container">
          <div class="columns is-multiline is-centered">
            <div class="column is-12">
              <h1 class="main-title has-text-centered">Vuebook</h1>
            </div>
            <div class="column is-half">
                <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </section>
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

.main-title {
  font-size: 50px;
  letter-spacing: 2px;
  line-height: 1.3;
  font-family: 'Bangers', serif;
  color: $title-bg;
}

</style>
