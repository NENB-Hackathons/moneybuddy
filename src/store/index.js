import { createStore } from "vuex"

export default createStore({
    state: {
        modalStage: 1,
        showModal: false,
        questionsSum: 0,
        userIncome: 0,
    },
    mutations: {
        updateQuestionsSum(state, answer) {
            state.questionsSum += answer
        },
        updateModalState(state) {
            if (state.modalStage < 6) {
                state.modalStage += 1
                return
            }
            state.showModal = false
        },
        updateToken(state, token) {
            state.token = token
        },
        showModal(state, show) {
            state.showModal = show
        },
        setLoggedIn(state, param) {
            state.isLoggedIn = param
        },
        updateIncome(state, income) {
            state.userIncome = income
        }
    },
    actions: {},
    modules: {},
})