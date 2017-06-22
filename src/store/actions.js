export default {
    register(context, userId) {
    // register({commit}, userId) {
        setTimeout(() => {
            context.commit('register', userId); // This is the mutation register
            // commit('register', userId); // This is the mutation register
        }, 1000);
    }
}