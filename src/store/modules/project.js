const state = () => ({
    numberProject: 0,
});

const getters = {
    numberProject: state => state.numberProject,
};

const actions = {
    setNumberProject({ commit }, data) {
        commit('SET_NUMBER_PROJECT', data)
    },
};

const mutations = {
    SET_NUMBER_PROJECT(state, data) {
        state.numberProject = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
