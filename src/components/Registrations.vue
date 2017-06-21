<template>
    <div>
        <h1>Registrations [{{totalRegistrations}}]</h1>
        
        <ul>
            <li v-for="user in registrations">
                {{user.name}} - <a href="#" click.prevent="unregister(user)">Unregister</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        unregister(userToUnregister) {
            const user = this.$store.state.registrations.find(userToUnregister => {
                return userToUnregister.id === user.userId;
            });

            user.registered = false;
        }
    },
    computed: {
        registrations() {
            return this.$store.state.registrations;
        }
    }
}
</script>

<style scoped>
</style>