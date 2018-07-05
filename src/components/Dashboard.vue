<template>
    <div>
      <div class="field has-text-centered">
        <h2 class="subtitle is-4">Bienvenido a tu Muro</h2>
      </div>
      <div class="field">
        <div class="control">
          <textarea v-model="message" name="post" class="textarea is-info" id="" cols="30" rows="3" v-validate="{ required: true, min: 10 }"></textarea>
          <div class="block">
            <span class="tag is-danger" v-if="errors.has('post')">{{errors.first('post')}}</span>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control is-inline">
          <button @click.prevent="addNewPost()" class="button is-info is-small">Postear</button>
        </div>
        <div class="control is-inline is-pulled-right">
          <button @click.prevent="onLogout()" class="button is-danger is-small">Logout</button>
        </div>
      </div>
      <Post v-for="(post,index) in posts" :key="index" :email="user.email" :message="post.message"></Post>
    </div>
</template>

<script>
import Post from './Post.vue'
  export default {
    name: 'Dashboard',
    components: { Post },
    data () {
      return {
        message: ''
      }
    },
    methods: {
       onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      posts () {
        return this.$store.getters.posts
      },
    },
    methods: {
      addNewPost () {
        this.$store.dispatch('addNewPost',{
          uid: this.user.uid,
          message: {
            message: this.message
          }
        })
        this.message = ''
      }
    },
    created () {
      this.$store.dispatch('getAllPosts', this.user.uid)
    }
  }
</script>

<style scoped>

</style>
