<template>
  <div class="message">
    <p>Test{{message}}</p>
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
  display: block;
  text-align: center;
  color: #b53f3f;
}

</style>