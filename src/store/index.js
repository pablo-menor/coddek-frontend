import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
const store = createStore({
    state: {
        savedOffers: [],
        username: "",
        token: "",
        userId: "",
        role: "",
        isLoggedIn: false,
        avatar: "",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setLogin(state, { username, _id, role, avatar }) {
            state.username = username;
            state.userId = _id;
            state.role = role;
            state.isLoggedIn = true;
            state.avatar = avatar;
        },
        setLogout(state) {
            state.username = "";
            state.token = "";
            state.userId = "";
            state.role = "";
            state.isLoggedIn = false;
            state.avatar = "";
        },
        addSavedOffer(state, offer) {
            state.savedOffers.push(offer);
        },
        deleteSavedOffer(state, offer) {
            state.savedOffers = state.savedOffers.filter(item => item.id !== offer.id);
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        setLogin({ commit }, { username, _id, role, avatar }) {
            commit("setLogin", { username, _id, role, avatar });
        },
        setLogout({ commit }) {
            commit("setLogout");
        },
        addSavedOffer({ commit }, offer) {
            commit("addSavedOffer", offer);
        }
    },
    plugins: [new VuexPersistence(
        {
            storage: window.localStorage,
        }
    ).plugin]
});

export default store;