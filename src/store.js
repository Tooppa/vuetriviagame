import { createStore } from "vuex";
import { fetchQuestions } from "@/endpoints/trivia/triviaApi";

const store = createStore({
  state: {
    questionType: {
      amount: 10,
      category: "",
      difficulty: "",
    },
    questions: [],
    answers: [],
    currentQuestion: {},
    questionIndex: 0,
    user: {
      name: "",
      highscore: "",
      score: "",
    },
  },
  mutations: {
    setQuestions: (state, payload) => {
      state.questions = { ...payload };
    },
    setCurrentQuestion: (state, payload) => {
      state.currentQuestion = { ...payload };
    },
    setSettings: (state, payload) => {
      state.questionType = { ...payload };
    },
    setUser: (state, payload) => {
      state.user = { ...payload };
    },
    setScore: (state, payload) => {
      state.user.score += payload;
    },
  },
  actions: {
    async fetch({ state, commit }) {
      //get the questions from the endpoint
      const questions = await fetchQuestions(
        state.questionType.amount,
        state.questionType.category,
        state.questionType.difficulty
      );
      commit("setQuestions", questions);
      commit("setCurrentQuestion", questions[0]);
    },
    async nextQuestion({ state, commit }) {
      state.questionIndex++;
      const nextIndex = state.questionIndex;
      commit("setCurrentQuestion", state.questions[nextIndex]);
    },
  },
  getters: {
    getQuestions: (state) => {
      return state.questions;
    },
    getCurrentQuestion: (state) => {
      return state.currentQuestion;
    },
    checkIfLastQuestion: (state) => {
      return state.questionIndex === state.questionType.amount - 1;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});

export default store;
