import { createStore } from "vuex";

const store = createStore({
    state: {
        questions: [],
        user: {
            name: '',
            highscore: ''
        }
    },
    mutations: {
        setQuestions: (state, payload) =>{
            state.questions = {...payload}
        }
    }
})

export default store;