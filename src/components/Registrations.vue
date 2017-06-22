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
            this.$store.commit('unregister', userToUnregister.id);
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