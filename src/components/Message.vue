<template>
  <div class="message">
    <p>Message - {{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.message {
  text-align: center;
  color: #b53f3f;
}

</style>