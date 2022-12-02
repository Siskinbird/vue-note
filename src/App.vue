<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div id="app">
                  <!--message-->
            <Message v-if="message" :message="message"/>
                  <!--new note-->
            <NewNote :note="note"  @addNote="addNote" />
<!--            <div :class="{high: hi}" @click="setHigh">important</div>-->
<!--            <div :class="{low: low}" @click="setLow">Huimportant</div>-->

                  <!--note title-->
            <div class="note-title" style="margin-top: 20px">
              <h1>{{ title }}</h1>

                 <!--search-->
              <Search :search="search"
                      @search="search = $event"
                      placeholder="Find your note"
                      value=""
              />



              <div class="icons">
                <svg :class="{active: grid}" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                  <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <svg :class="{active: !grid}" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line>
                  <line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>
                </svg>
              </div>
            </div>

                  <!--note list-->
            <Notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>


import Message from "@/components/Message";
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";
import notes from "@/components/Notes";

export default {
  components: {Notes, NewNote, Message, Search},
  data() {
    return {
      title: 'Notes App',
      message: null,
      grid: true,
      hi: false,
      low: false,
      search: '',
      note: {
        title: '',
        description: '',
        highPriority: false,
        lowPriority: false,
        veryHighPriority: false,
      },
      notes: [
        {
          title: 'First note',
          description: 'Desc for first note',
          highPriority: true,
          lowPriority: false,
          veryHighPriority: false,
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second note',
          description: 'Desc for Second note',
          highPriority: false,
          lowPriority: true,
          veryHighPriority: false,
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third note',
          description: 'Desc for Third note',
          highPriority: false,
          lowPriority: false,
          veryHighPriority: true,
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  computed: {
    notesFilter () {
      let array = this.notes,
          search = this.search
      if (!search) {
        return array
      } else {
        search.trim().toLowerCase()
        array = array.filter(function (item) {
          if (item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })
        return array;
      }
    }
  },
  methods: {
    toggleHi () {
      this.note.hi = !this.notes.hi
    },
    // setVeryHigh() {this.note.priority.veryHigh = true},
    setHigh() {
      this.note.highPriority = true;
      // if (this.low) {
      //   this.low = false
      //   this.hi = true
      // }else{
      // this.hi = !this.hi}

    },
    setLow() {
      if (this.hi) {
        this.hi = false
        this.low = true
      }else{
        this.low = !this.low
      }

    },
    reset(){
      this.note.title = '';
      this.note.description = ''
    },
    addNote () {
      let {title, description, highPriority, lowPriority, veryHighPriority} = this.note;

      if (title === '' || description === '') {
        this.message = 'You note is empty';
        return true
      } else {
        this.notes.push({
          title,
          description,
          highPriority,
          lowPriority,
          veryHighPriority,
          date: new Date(Date.now()).toLocaleString()

        })
        console.log(this.notes)
        this.reset();
        return this.message = false

      }
    },
    removeNote(i) {
      this.notes.splice(i, 1)
    },
  }
}


</script>

<style>

</style>
