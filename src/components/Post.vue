<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <small>{{ email }}</small>
            <br>
            {{ message }}
          </p>
        </div>
        <nav class="level">
          <div class="level-left">
            <a href="#" class="level-item">
              <span class="icon is-small">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: ['email', 'message']
  }
</script>

<style scoped>

</style>
