<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">
    <div class="priority-button">
      <p>Check priority:</p>
      <button class="highPriority" @click="setHigh">High</button>
      <button class="lowPriority" @click="setLow">Base</button>
      <button class="veryPriority" @click="setVeryHigh">Important</button>
    </div>

    <label for="">Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn blue" @click="addNote">Post</button>
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
<style lang="scss" scoped>
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
.priority-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.highPriority {
  background-color: orange;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
}
.lowPriority {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
}
.veryPriority {
  background-color: #b53f3f;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
}
.btn {
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #000000;
  position: relative;
  display: inline-block;
}
.btn:active {
  transform: translate(0px, 5px);
}
.blue {
  background-color: #1E90FF;
}
.blue:hover {
  background-color: #6FC6FF;
}
</style>