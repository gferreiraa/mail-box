<template>
    <div class="listmail">
        <ul class="has-text-left">
                <li v-for="message in messages" :key="message.id">
                    <div class="card card-details">
                        <span class="has-text-success bullet"><i class="fas fa-circle"></i></span>
                        <span class="has-text-black-bis"><strong>{{message.full_name}}</strong> - </span>  
                        <span class="has-text-grey-dark">{{message.mail_subject}} - </span>   
                        <span class="has-text-grey">{{message.body | subStr}} - </span>   
                        <span class="has-text-grey">{{message.date}} / </span>   
                        <span class="has-text-grey-dark">{{message.hour}}</span>   
                    </div>
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
        },
          filters: {
            subStr(value) {
                return value.substr(0, 20) + '...';
            }
        },
        created() {
            this.getMails();
        },
    }
</script>

<style scoped>
    li {
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        transition: all .5s ease;
    }
    li:hover {
        cursor: pointer;
        font-size: 1.1rem;
        background: #fafafa;
    }
    .listmail {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .card-details {
        padding: 15px 10px 15px 50px;
    }
    .bullet {
        padding-right: 20px;
    }
</style>


