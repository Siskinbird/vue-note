<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">
    <button v-bind="note.highPriority" @click="note.highPriority = true">Hi priority</button>
    <button v-bind="note.veryHighPriority" @click="note.veryHighPriority = true"> VERY Hi priority</button>
    <button v-bind="note.lowPriority" @click="note.lowPriority = true"> no priority</button>

<!--      <button :class="high" @click="setHigh" >Important</button>-->
<!--      <button :class="{low: note.low}" @click="setLow">Not important</button>-->


    <label for="">Description</label>
    <textarea v-model="note.description" ></textarea>
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
    setVeryHigh() {
      this.$emit('very', this.note)
    },
    setHigh() {
      this.$emit('setHigh', this.note)
    },
    setLow() {
      this.$emit('low', this.note)
    },
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

  .veryHi,  {
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }


</style>