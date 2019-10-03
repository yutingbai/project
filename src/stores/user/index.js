const state = {
    name : window.localStorage.getItem('name') || 'null',
    userHead : '',
    userId:''
};

const actions = {

};

const mutations = {
    USER_NAME(state , payload){
        state.name = payload.name;
        state.userHead = payload.userHead;
        state.userId = payload.userId;

    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}