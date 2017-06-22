export default {
    unregisteredUsers(state) {
        return state.users.filter(user => {
            return !user.registered;
        });
    },
    registrations(state) {
        return state.registrations.filter(user => {
            return user.registered;
        });
    },
    totalRegistrations(state) {
        return state.registrations.length;
    },
    totalUnregistered(state) {
        return state.users.length;
    }
}