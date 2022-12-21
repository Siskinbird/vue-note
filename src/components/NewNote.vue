<template>
  <div class="new-note">
    <label for="">Title</label>
    <input v-model="note.title" type="text" value="">

    <div class="radios">
      <p class="radio-title">Check priority:</p>
      <label>
        <input type="radio" v-model="note.radios" value="Базовый">Базовый
      </label>
      <label>
        <input type="radio" v-model="note.radios" value="Высокий">Высокий
      </label>
      <label>
        <input type="radio" v-model="note.radios" value="Важное">Важное
      </label>

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
    }
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
.radios {
  label {
    display: inline-block;

  }
}

.new-note {
  text-align: center;
  input {
    margin-bottom: 0;
  }

}
//.priority {
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//}

//.high {
//  background-color: #b53f3f;
//}
//.low {
//  background-color: #8bc34a;
//}
//.veryHi {
//  border-radius: 5px;
//  cursor: pointer;
//  padding: 5px;
//}
//.priority-button {
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//  margin: 20px 0;
//}
.highPriority {
  background-color: #FAE7B5;
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
  background-color: #FFE4E1	;
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