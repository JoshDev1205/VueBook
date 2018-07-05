<template>
    <form @submit.prevent="onSignin()" class="box">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input placeholder="Email" v-model="email" name='email' class="input" type="email" v-validate="'required|email'">
            <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
            </span>
          <div class="block">
            <span class="tag is-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input placeholder="******" v-model="password" class ="input" type="password" v-validate="{ required: true, min: 6 }" name="password">
            <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
          <div class="block">
            <span class="tag is-danger" v-if="errors.has('password')">{{errors.first('password')}}</span>
          </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button :disabled="errors.any()" type="submit" class="button is-primary" :class="{'is-loading': this.loading}">Sign In</button>
          </div>
        </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'LogIn',
    data () {
      return {
        email: '',
        password: ''
      }
    },
  computed: {
    user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
  },
  watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/dashboard')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
    }
  }
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 5px;
}
</style>
