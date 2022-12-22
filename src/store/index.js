import Vue from "vue";
import Vuex from 'vuex';
import newNote from "@/store/newNote";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newNote,
    }
})