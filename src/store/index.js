import { createStore } from "vuex"

export default createStore({
    state: {
        modalStage: 1,
        showModal: false,
        questionsSum: 0,
        userIncome: 0,
        isLoggedIn: localStorage.getItem('isLoggedIn') ? true : false,
        username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
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
        setUsername(state, username) {
            state.username = username
        },
        setUserIncome(state, income) {
            state.userIncome = income
        },
        updateIncome(state, income) {
            state.userIncome = income
        }
    },
    actions: {},
    modules: {},
})