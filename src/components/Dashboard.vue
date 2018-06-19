<template>
  <div class="container">
    <div class="columns">
    <div class="column is-8">
      <div class="field has-text-centered">
        <h1 class="is-inline title is-4">Bienvenido a tu Muro</h1>
      </div>
      <div class="field">
        <div class="control is-inline">
          <button @click.prevent="onLogout()" class="button is-info is-small">Postear</button>
        </div>
        <div class="control is-inline">
          <button @click.prevent="onLogout()" class="button is-danger is-small">Logout</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea name="post" class="textarea is-info" id="" cols="30" rows="3" v-validate="{ required: true, min: 10 }"></textarea>
          <div class="block">
            <span class="tag is-danger" v-if="errors.has('post')">{{errors.first('post')}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',

    methods: {
       onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
