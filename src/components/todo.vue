<template>
    <div>
        this is init todo page
        <div>{{message}}</div>
        <div>{{this.$store.state.todoPage.message}}</div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Todo',
        props: ['todo'],
        data() {
            return {
                message: 'this is first'
            };
        },
        mounted() {
            this.getTodoMessage();
            console.log(this.$store.state.todoPage.message)
        },
        methods: {
            ...mapActions([
                'getTodoMessage'
            ])
        }
    };
</script>

<style>
</style>
