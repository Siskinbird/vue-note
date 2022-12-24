<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">


    <div class="radios">
      <p class="radio-title">Check priority:</p>
<!--      <Priorities :priorities="priorities" />-->

      <span v-for="(priority, i) in note.priorities"
            :key="priority.id">
<!--        <p> Выбран {{priority.title}} приоритет</p>-->

         <label>
          <input
              type="radio"
              name="priority"
              :checked="priority['alias'] === note.priority"
              :value="priority.alias"
              @click="setPriority(i)">
           <p>{{priority.title}}</p>
        </label>
      </span>
    </div>

    <label for="">Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn blue" @click="validNote">Post</button>
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
    resetNote() {
      this.note.title = '';
      this.note.description = '';
      this.note.priority = 'base'
    },
    validNote() {
      if (this.note.title === '' || this.note.description === '') {
        this.message = 'You note is empty';
        console.log('Bzzzzzzzzzzzzzz')
        return true
      } else {
            this.$store.dispatch('addNote', {
              title: this.note.title,
              description: this.note.description,
              isEdit: false,
              priority: this.note.priority,
              date: new Date(Date.now()).toLocaleString()
            })
        this.resetNote()
        return this.message = false
      }
    },
    setPriority(i) {
      this.$store.dispatch('setPriority', i)
      console.log(this.note.priorities[i].alias);
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