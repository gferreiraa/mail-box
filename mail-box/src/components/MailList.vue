<template>
    <div class="listmail">
        <ul class="has-text-left">
            <a @click="readMail(message)" v-for="message in messages" :key="message.id">
                <li >
                    <div class="card card-details">
                        <span :class="[message.read ? 'has-text-success bullet' : 'has-text-grey-light bullet']"><i class="fas fa-circle"></i></span>
                        <span :class="[message.read ? 'has-text-black-bis strongtext' : 'has-text-black-bis']">{{message.full_name}} - </span>  
                        <span class="has-text-grey-dark">{{message.mail_subject}} - </span>   
                        <span class="has-text-grey">{{message.body | subStr}} - </span>   
                        <span class="has-text-grey">{{message.date}} / </span>   
                        <span class="has-text-grey-dark">{{message.hour}}</span>   
                    </div>
                </li>
            </a>
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
            },
            readMail(_mail) {
                this.$store.commit({
                    type: "READ_MAIL",
                    mail: _mail
                })
                this.$router.push("/mail");
            },
            updateMail(){
                this.$store.dispatch("updateRead", this.$store.getters.getCurrentMail);
            }
        },
        filters: {
            subStr(msg) {
                return msg.substr(0, 20) + '...';
            }
        },
        created() {
            this.getMails();
        }
    }
</script>

<style scoped>
    li {
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        transition: all .5s ease;
    }
    li:hover {
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
    .strongtext {
        font-weight: bold;   
    }
</style>


