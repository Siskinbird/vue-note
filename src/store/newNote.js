
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
        },
        notes: [
            {
                title: 'Не прокинуто',
                description: 'Наладить компонент с приоритетами, ' +
                    'так и не смог нормально их прокинуть из ' +
                    'отдельного компонента',
                isEdit: false,
                priority: 'base',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Сделать сложную домашку',
                description: 'Надо настроить стор, что бы все функции ' +
                    'лежали в отдельном хранилище',
                isEdit: false,
                priority: 'medium',

                date: new Date(Date.now()).toLocaleString()

            },
            {
                title: 'Подключиться к API',
                description: 'Для хранения заметок на сервере, плюс надо изучить метод POST ' +
                    'для сохранении заметок на сервере, тут этого быть не должно, аимнь',
                isEdit: false,
                priority: 'hard',
                date: new Date(Date.now()).toLocaleString()
            },
        ],
    },

    mutations: {
        // setPriority(state, alias) {
        //     state.note.priority = state.priorities[alias]
        // }
    },
    actions: {
        // setPriority({commit}, payload) {
        //     commit('setPriority', payload)
        // }
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getPriorities (state) {
            return state.note.priorities
        },
        getNote(state) {
            return state.note
        }
    }
}
