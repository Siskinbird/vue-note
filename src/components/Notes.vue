<template>
  <div>
    <div class="notes">

      <div class="note"
           :class="{full: !grid , high: note.radios === 'Высокий', veryHigh: note.radios === 'Важное', low: note.radios === 'Базовый'}"

           v-for="(note, i) in notes"
           :key="i">
        <div class="note-title">
          <p v-if="note.isEdit === false" style="cursor: pointer;" @click="editNote(i)">{{ note.title }}</p>
          <input class="edit-note" :class="{isEdit:  note.isEdit}" v-model="note.title" type="text" value="">

          <p style="cursor: pointer; margin-left: 10px" @click="removeNote(i)">X</p>

        </div>
        <div @click="closeInput(i)">
          <div class="note-description">
            <p>{{ note.description }}</p>
          </div>
          <div class="note-date"><span>{{ note.date }}</span>
        </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      require: true
    },
    grid: {
      type: Boolean,
      require: true
    },
  },
  methods: {
    removeNote (i) {
      this.$emit('remove', i)
    },
    editNote(i) {
      this.$emit('editNote', i)
    },

    closeInput(i) {
      this.$emit("closeInput", i)

    }
  }
}
</script>

<style lang="scss" scoped>

input {
  margin-bottom: 0;
  padding: 10px;
}

.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;

}

.note {
  input {
    padding-right: 10px;
  }
}

.note {

  width: 46%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,0.04);
    transform: translate(0, -6px);
  }
  &.veryHigh {
    background-color:  #FFE4E1;
  }
  &.high {
    background-color: #FAE7B5;
  }
  &.low {
    background-color: #ffffff;
  }
  &.full {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  p {
    margin: 10px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
.note-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 600;
    color: #333333;
  }
  svg {
    margin-left: 12px;
    color: #999999;
    cursor: pointer;
    &.active {
      color: #877CC0;
    }
  }
}
.edit-note {
  display: none;
  &.isEdit {
    display: block;
  }
}


</style>