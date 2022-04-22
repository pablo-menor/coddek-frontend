import { createStore } from "vuex";

const store =  createStore({
    state: {
        savedOffers: [],
    },
    mutations: {
        addSavedOffer(state, offer) {
            state.savedOffers.push(offer);
        },
        deleteSavedOffer(state, offer) {
            state.savedOffers = state.savedOffers.filter(item => item.id !== offer.id);
        }
    },
    // actions: {
    //     addSavedOffer({ commit }, offer) {
    //         commit("addSavedOffer", offer);
    //     }
    // }
});

export default store;