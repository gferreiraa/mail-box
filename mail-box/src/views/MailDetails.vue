<template>
    <div class="container">
        <div class="colums">
            <div class="column is-four-fifths">
                <div class="card card-details has-text-left">
                    <img :src="detailMail.avatar" alt="avatar-image">
                    <h5 class="is-size-7">From: <strong>{{detailMail.full_name}}</strong></h5>
                    <p class="is-size-7">Subject: {{detailMail.mail_subject}}</p>
                    <span class="is-size-7">Data: {{detailMail.date}}</span>
                    <br/>
                    <p class="body-mail">{{detailMail.body}}</p>
                </div>
            </div>
        </div>
        <div class="back-button">
            <button class="button" @click="backToHome">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MailDetails",
    data() {
        return {
            detailMail: {}
        }
    },
    methods: {
        backToHome(){
            this.$router.push("/")
        }
    },
    beforeMount() {
        this.detailMail = this.$store.getters.getCurrentMail;
        if(this.detailMail.read) this.$store.dispatch("updateRead", this.detailMail);
    }
}
</script>

<style scoped>
    .card-details{
        margin-top: 50px;
        padding: 30px;
    }
    .body-mail{
        margin-top: 20px;
    }
    .back-button{
        display: flex;
        justify-content: end;
        padding-left: 10px;
    }
</style>


