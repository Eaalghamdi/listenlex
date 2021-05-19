import {createStore} from "vuex";

const store = createStore ({
    state: {
        studentID: "User",
    },
    getters: {},
    mutations: {
        updateStudentID(state, payload){
            state.studentID = payload
        }
    },
    actions: {},
});

export default store;