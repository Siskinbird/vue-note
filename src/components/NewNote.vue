<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">


    <div class="radios">
      <p class="radio-title">Check priority:</p>

      <span v-for="(priority, i) in note.priorities"
            :key="priority.id">

<!--        <p> Выбран {{priority.title}} приоритет</p>-->

         <label>
          <input
              type="radio"
              name="priority"
              :checked="priority['alias'] === note.priority"
              :value="priority.alias"
              @click="setPriority(i)">{{priority.title}}
        </label>
      </span>
    </div>

    <label for="">Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn blue" @click="addNote">Post</button>
  </div>
</template>

<script>
import Priorities from "@/components/Priorities";
export default {
  components: {Priorities},
  props: {
    note: {
      type: Object,
      require: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    },
    setPriority(i) {
      this.$emit('setPriority', i)
      console.log(this.note.priority);
    },
  }
}
</script>
<style lang="scss" scoped>

.radio-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 20px;
}

.new-note {
  text-align: center;
  input {
    margin-bottom: 0;
  }
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