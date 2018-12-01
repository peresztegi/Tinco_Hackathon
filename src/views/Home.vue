<template>
  <div class="home">
    <div id="fb-root"></div>
    <!-- Your customer chat code -->
    <div class="fb-customerchat"
         attribution="setup_tool"
         page_id="516083218869346"
         logged_in_greeting="Hi! How can we help you?"
         logged_out_greeting="Hi! How can we help you?">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {},
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js')
      document.body.appendChild(recaptchaScript)
    },
  }
</script>
