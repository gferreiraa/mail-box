<template>
    <div class="sidebar">
        <hr>
        <ul class="has-text-left">
            <li>Inbox <span class="number-mail"><strong>1</strong></span></li>
            <li>Important</li>
            <li>Sent</li>
            <li>Draft</li>
            <li>Spam</li>
        </ul>
    </div>
</template>

    <script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    li {
        color: black;
        font-size: 16px;
        padding: 10px;
    }
    li:hover{
        cursor: pointer;
        background: #fafafa;
    }
    .sidebar {
        /*background: #fafafa;*/
        margin-top: 20px;
        padding: 5px;
    }
    .number-mail {
        padding-left: 100px;
        font-weight: bold;
}
</style>
