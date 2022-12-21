<tempalte>
  <div class="container">
<!--    <div class="radios">-->
<!--      <p class="radio-title">Check priority:</p>-->
<!--      <span v-for="(priority, i) in priorities"-->
<!--            :key="priority.id">-->
<!--         <label :for="priority.id">-->
<!--          <input-->
<!--              type="radio"-->
<!--              name="priority"-->
<!--              v-model="priority.alias"-->
<!--              :value="priority.title"-->
<!--              :id="priority.id" >{{priority.title}}-->
<!--        </label>-->
<!--      </span>-->
<!--    </div>-->
  </div>
</tempalte>

<script>


export default {
   data () {
     return {
       priorities: [
         {id: 0, alias: 'base', title: 'Simple'},
         {id: 1, alias: 'medium', title: 'Hard'},
         {id: 2, alias: 'hard', title: 'Extra hard'}
       ]
     }
   }
 }
 //{full: !grid , high: note.priority === 'medium', veryHigh: note.priority === 'hard', low: note.priority === 'base'}
</script>

