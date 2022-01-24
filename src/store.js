import { createStore } from "vuex";
import { fetchQuestions } from "@/endpoints/trivia/triviaApi";

const store = createStore({
    state: {
        questionType: {
            amount: 10,
            category: '',
            difficulty: ''
        },
        questions: [],
        answers: [],
        currentQuestion: {},
        user: {
            name: '',
            highscore: ''
        }
    },
    mutations: {
        setQuestions: (state, payload) => {
            state.questions = { ...payload }
        },
        setSettings: (state, payload) => {
            state.questionType = { ...payload }
        }
    },
    actions: {
        async fetch({ state, commit }) {
            //get the questions from th endpoint
            const questions = await fetchQuestions(
                state.questionType.amount,
                state.questionType.category,
                state.questionType.difficulty
            );
            commit('setQuestions', questions);
        }
    },
    getters: {
        getQuestions: (state) => {
            return state.questions
        }
    }
})

export default store;