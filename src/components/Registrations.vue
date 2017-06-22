<template>
    <div>
        <h1>Registered users [{{registrationsCount}}]</h1>
        
        <ul>
            <li v-for="user in registeredUsers">
                {{user.name}} - <a href="#" @click.prevent="unregister(user)">Unregister</a>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    methods: {
        unregister(userToUnregister) {
            const user = this.$store.state.registrations.find(user => {
                return user.id === userToUnregister.id;
            });
            user.registered = false;
            this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(user), 1);
            this.$store.state.users.push(user);
        }
    },
    computed: {
        ...mapGetters({
            registeredUsers: 'registrations',
            registrationsCount: 'totalRegistrations'
        })
    }
}
</script>

<style scoped>
</style>