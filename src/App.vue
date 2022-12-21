<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div id="app">
            <h1 style="text-align: center; font-size: 32px; color: #877CC0; font-weight: 500" >{{ title }}</h1>

            <!--message-->
            <Message v-if="message" :message="message"/>

            <!--new note-->
            <NewNote :note="note"

            @addNote="addNote" />

            <!--note title-->

            <div class="search-icons-container">
              <h2 class="note-title">{{ title }}</h2>

              <!--search-->
              <Search :search="search"
              @search="search = $event"
              placeholder="Find your note"
              value=""
              />

              <!--icons-->
              <div class="icons">
                <svg :class="{active: grid}" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24"

                height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg :class="{active: !grid}" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3" y2="6"></line>
              <line x1="3" y1="12" x2="3" y2="12"></line>
              <line x1="3" y1="18" x2="3" y2="18"></line>
            </svg>

          </div>
        </div>
        <!--note list-->
        <Notes :notes="notesFilter"
        :grid="grid"
        @remove="removeNote"
        @editNote="editNote"
        @closeInput="closeInput"/>
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


export default {
  components: {Notes, NewNote, Message, Search},
  data() {
    return {
      title: 'Notes App',
      message: null,
      grid: true,
      search: '',
      note: {
        title: '',
        description: '',

        // FOR PRIORITY BUTTONS
        // highPriority: false,
        // lowPriority: false,
        // veryHighPriority: false,
        isEdit: false,
        radios: 'Базовый'

      },
      notes: [
        {
          title: 'First note',
          description: 'Desc for first note',
          isEdit: false,
          radios: 'Высокий',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second note',
          description: 'Desc for Second note',

          isEdit: false,
          radios: 'Важное',

          date: new Date(Date.now()).toLocaleString()

        },
        {
          title: 'Third note',
          description: 'Desc for Third note',

          isEdit: false,
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  computed: {
    notesFilter() {
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
    editNote(i) {
      this.notes[i].isEdit = true;
    },

    closeInput(i) {
      this.notes[i].isEdit = false;

    },
    reset() {
      this.note.title = '';
      this.note.description = '';
      this.note.radios = 'Базовый'

    },
    addNote() {

      let {title, description, highPriority, lowPriority, veryHighPriority, radios} = this.note;

      if (title === '' || description === '') {
        this.message = 'You note is empty';
        return true
      } else {
        this.notes.push({
          title,
          description,
          isEdit: false,
          radios,

          date: new Date(Date.now()).toLocaleString()
        })
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


<style lang="scss" scoped>
.search-icons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icons svg{
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #877CC0;
  }
  &.active {
    color: #877CC0;
  }
}
.note-title {
  text-align: center;
  font-size: 24px;
}
</style>

