import { createStore } from "vuex"

export default createStore({
    state: {
        modalStage: 1,
        showModal: true,
        questionsSum: 0,
        questions: [
            'What is your net yearly salary in USD?',
            'Do you think about yourself as a saver/investor?',
            'Are you spending money on wants? (eg, electronics, clothes, leisure items, ect..)',
            'Are you the main household earner?',
            'Are you a student?',
            'Final Question, do you need to spend on others needs? (Food, shelter, ect..)',
        ],
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
            if (state.modalStage < 7) {
                state.modalStage += 1
                return
            }
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