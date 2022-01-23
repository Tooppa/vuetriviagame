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
    },
    actions: {
        async fetchQuestions(){
            //get the questions from th endpoint
        }
    },
    getters: {
        getQuestions: (state) => {
            return state.questions
        }
    }
})

export default store;