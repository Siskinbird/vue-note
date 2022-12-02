<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">
    <label for="">Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn btnPrimary" @click="addNote">Post</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      require: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    }
  }
}
</script>
<style lang="scss" scoped>
  .new-note {
    text-align: center;
  }
</style>