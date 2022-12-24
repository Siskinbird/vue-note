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
      default: []
    }
  },
  methods: {
    // setPriority(i) {
    //   // this.$store.dispatch('setPriority', this.note.priorities[i].alias)
    //   this.priority = this.priorities[i].alias
    //    console.log(this.priorities[i].alias);
    // },
    setPriority(i) {
      this.$emit('setPriority', i)
      console.log(this.priorities[i].alias);
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