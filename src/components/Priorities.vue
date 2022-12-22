<template>
  <div class="priority-item">
    <label>
      <input
          type="radio"
          name="priority"
          :value="priority.alias"
          :checked="priority['alias'] === priority"
          @click="setPriority"
      >
      {{priority.title}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    priority: {
      type: Object,
      required: true
    }
  },
  methods: {
    setPriority(i) {
      this.$emit('setPriority', i)
      console.log(this.note.priority);
    },
  }
}
</script>

<style lang="scss" scoped>



.priority-item {
  display: inline-block;
  input {
    margin-bottom: 10px;
  }
  label {
    font-weight: bold;
    margin-left: 20px;
  }

}
</style>