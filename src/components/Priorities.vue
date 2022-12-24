<template>
  <div class="priority-item">
    <span v-for="(priority, i) in priorities"
          :key="priority.id">
<!--        <p> Выбран {{priority.title}} приоритет</p>-->

         <label>
          <input
              type="radio"
              name="priority"
              :checked="priority['alias'] === priority"
              :value="priority.alias"
              @click="setPriority(i)">{{priority.title}}
        </label>
      </span>
  </div>
</template>

<script>
export default {
  props: {
    priorities: {
      type: Array,
      required: true,
    }
  },
  methods: {
    setPriority(i) {
      this.$store.dispatch('setPriority', i)
    }
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