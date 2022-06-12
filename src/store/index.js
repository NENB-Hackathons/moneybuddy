import { createStore } from "vuex"

export default createStore({
    state: {
        token: "",
        modalStage: 1,
        showModal: false,
        isLoggedIn: false,
        questionArray: [],
    },
    mutations: {
        updateModalState(state) {
            state.modalStage += 1
        },
        updateToken(state, token) {
            state.token = token
        },
        showModal(state, show) {
            state.showModal = show
        },
        settLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
        },
        appendQuestion(state, question) {
            state.questionArray = state.questionArray.push(question)
        }
    },
    actions: {},
    modules: {},
})