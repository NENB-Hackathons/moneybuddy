import { createStore } from "vuex"

export default createStore({
    state: {
        token: "",
        modalStage: 1,
        showModal: false,
        isLoggedIn: false,
        questionArray: [],
        userIncome: 0,
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
        updateIncome(state, income) {
            state.userIncome = income
        }
    },
    actions: {},
    modules: {},
})