export default {
    state: {
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
            }
        ]
    },
    mutations: {
        editNote(state, index) {
            state.notes[index].isEdit = true;
        },
        closeInput(state, index) {
            state.notes[index].isEdit = false;
        },
        removeNote(state, index) {
            state.notes.splice(index, 1)
        },
        addNote(state, newNote) {
            state.notes.push(newNote)
        },
    },

    actions: {
        editNote({commit}, payload) {
            commit('editNote', payload)
        },
        closeInput({commit}, payload) {
            commit('closeInput', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        },
        addNote({commit}, payload) {
            commit('addNote', payload)
        }
    },

    getters: {
        getNotes(state) {
            return state.notes
        },
        getSearchNotes: state => value => {
            let array = state.notes
            if (!value) {
                return array
            } else {
                value = value.trim().toLowerCase()
                array = array.filter(function (item) {
                    if (item.title.toLowerCase().indexOf(value) !== -1) {
                        return item
                    }
                })
                return array;
            }
        }
    }
}
