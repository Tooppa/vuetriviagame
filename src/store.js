import { createStore } from "vuex";
import { fetchQuestions } from "@/endpoints/trivia/triviaApi";
import { update } from '@/endpoints/users/usersApi';

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
        questionIndex: 0,
        user: {
          id: "",
          name: "",
          highscore: "",
          score: ""
        },
    },
    mutations: {
        setQuestions: (state, payload) => {
            state.questions = { ...payload }
        },
        setCurrentQuestion: (state, payload) => {
            state.currentQuestion = { ...payload }
        },
        setSettings: (state, payload) => {
            state.questionType = { ...payload }
        },
        setUser: (state, payload) => {
            state.user = { ...payload }
        },
        setAnswer: (state, payload) => {
            state.answers.push(payload);
        },
        resetAnswer: (state) => {
            state.answers = [];
        },
        setScore: (state, payload) => {
            state.user.score = payload;
        },
        increaseScore: (state, payload) => {
            state.user.score += payload;
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
            commit('resetAnswer');
            commit('setCurrentQuestion', questions[0]);
        },
        async nextQuestion({ state, commit }) {
            state.questionIndex++;
            const nextIndex = state.questionIndex;
            commit('setCurrentQuestion', state.questions[nextIndex]);
      },
        async updateUser({ state, commit }) {
      const updatedUser = await update(state.user.id, state.user.score);
      commit('setUser', { ...updatedUser, score: state.user.score});
    }
    },
    getters: {
        getQuestions: (state) => {
            return state.questions
        },
        getAnswers: (state) => {
            return state.answers
        },
        getCurrentQuestion: (state) => {
            return state.currentQuestion
        },
        checkIfLastQuestion: (state) => {
            return state.questionIndex === state.questionType.amount - 1
        },
        getUser: (state) => {
            return state.user;
        },
    }
})

export default store;