import Vue from "vue";
import Vuex from 'vuex';
import newNote from "@/store/newNote";
import notes from "@/store/notes";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newNote,
        notes
    }
})