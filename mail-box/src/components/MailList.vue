<template>
    <div class="listmail">
        <ul>
            <li v-for="message in messages" :key="message.id">
                <p>{{message.avatar}}</p>
                <p>{{message.mail_subject}}</p>
                <p>{{message.date}}</p>
            </li>

        </ul>
    </div>
</template>

<script>
    import { api } from "../services/MailAPI"

    export default {
        name: "MailList",
        data() {
            return {
                messages: {}
            }
        },
        methods: {
            getMails() {
                api.get("/mails")
                    .then(response => response.data)
                    .then(data => {
                        this.messages = data
                    })
            }
/*             getMails() {
                fetch("http://localhost:3000/mails")
                .then(response => response.json())
                .then(data => {
                    this.messages = data;
                })
            } */
        },
        created() {
            this.getMails();
        },
    }
</script>

<style scoped>
    .listmail {
        margin-top: 50px!important;
    }
</style>