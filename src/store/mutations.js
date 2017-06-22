export default {
    register(state, userId) {
        let user = state.users.find(user => {
            return user.id == userId;
        });
        user.registered = true;
        state.registrations.push(user);
        state.users.splice(state.users.indexOf(user), 1);
    },
    unregister(state, userId) {
        const user = state.registrations.find(user => {
            return user.id === userId;
        });
        console.log(state.registrations)
        user.registered = false;
        state.registrations.splice(state.registrations.indexOf(user), 1);
        state.users.push(user);
    }
}