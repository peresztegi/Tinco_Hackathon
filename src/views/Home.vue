<template>
  <div class="home">
  </div>
</template>

<script>
  import axios from 'axios';


  export default {
    name: 'home',
    components: {},
    mounted() {
      /*
      axios.get('https://api.dialogflow.com/v1/quer?e=WELCOME&sessionId=4e3bb985-8e76-4f94-90dc-99a08608035b&lang=en&v=20170712', {
        headers: {
          Authorization: '4b6dc071bb194b92b08e1cf5b141bd0c',
        },
      })
      */
      window.beginApplePay(19);
    },
    methods: {
    },
  };
</script>
