<template>
  <div>
    <div class="notes">
      <div class="note"
           :class="{full: !grid , high: note.highPriority, veryHigh: note.veryHighPriority, low: note.lowPriority}"
           v-for="(note, i) in notes"
           :key="i">
        <div class="note-title"><p>{{ note.title }}</p>
          <p style="cursor: pointer;" @click="removeNote(i)">X</p>

        </div>
        <div class="note-description">
          <p>{{ note.description }}</p>
        </div>
        <div class="note-date"><span>{{ note.date }}</span>
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
      // console.log(`Note id - ${i} removed`)
    }
  }
}
</script>

<style lang="scss">
.notes {
  display: grid;
  grid-template-columns: auto auto;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  //flex-wrap: wrap;
  padding: 40px 0;
  gap: 30px;
}
.note {
  //width: 46%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,0.04);
    transform: translate(0, -6px);
  }
  &.veryHigh {
    background-color: #b53f3f;
  }
  &.high {
    background-color: orange;
  }
  &.low {
    background-color: #8bc34a;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  p {
    margin: 20px 0;
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
  &.high {
    background-color: orange;
  }

  h1 {
    font-size: 32px;
  }
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

</style>