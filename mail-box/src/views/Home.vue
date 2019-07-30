<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <SideBar/>
        </div>
        <div class="column">
          <MailList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import MailList from "@/components/MailList.vue";
  import SideBar from "@/components/SideBar.vue";

  export default {
    name: "home",
    components: {
      Header,
      MailList,
      SideBar
    }
  }
</script>

<style>

</style>