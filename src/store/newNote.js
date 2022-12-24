export default {
    state: {
        note: {
            title: '',
            description: '',
            isEdit: false,
            priority: 'base',
            priorities: [
                {id: 0, alias: 'base', title: 'Simple'},
                {id: 1, alias: 'medium', title: 'Hard'},
                {id: 2, alias: 'hard', title: 'Extra hard'},
            ],
        }
    },
    mutations: {
        setPriority(state, index) {
            state.note.priority = state.note.priorities[index].alias
        },

    },
    actions: {
        setPriority({commit}, payload) {
            commit('setPriority', payload)
        },
    },
    getters: {
        getPriorities(state) {
            return state.note.priorities
        },
        getNote(state) {
            return state.note
        }
    }
}
