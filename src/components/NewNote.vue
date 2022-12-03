<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">
    <button @click="setHigh">Hi priority</button>
    <button @click="setLow"> no priority</button>
    <button @click="setVeryHigh">Very Hi priority</button>
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
    },
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    },
    setHigh() {
      this.$emit('setHigh', this.note)
    },
    setLow() {
      this.$emit('setLow', this.note)
    },
    setVeryHigh() {
      this.$emit('setVeryHigh', this.note)
    }
  }
}
</script>
<style lang="scss" >
  .new-note {
    text-align: center;
  }
  .priority {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .test {
    width: 60px;
    height: 20px;
  }

  .high {
    background-color: #b53f3f;
  }
  .low {
    background-color: #8bc34a;
  }

  .veryHi {
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }


</style>