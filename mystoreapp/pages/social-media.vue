<template>
  <div class="social-media-container">
    <h1>Follow Us on Social Media</h1>
    <ul class="social-links">
      <li>
        <a
          :href="facebookUrl"
          target="_blank"
          aria-label="Facebook"
          class="social-link facebook"
        >
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </a>
      </li>
      <li>
        <a
          :href="twitterUrl"
          target="_blank"
          aria-label="Twitter"
          class="social-link twitter"
        >
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </li>
      <li>
        <a
          :href="instagramUrl"
          target="_blank"
          aria-label="Instagram"
          class="social-link instagram"
        >
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
      <li>
        <a
          :href="linkedinUrl"
          target="_blank"
          aria-label="LinkedIn"
          class="social-link linkedin"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a
          :href="youtubeUrl"
          target="_blank"
          aria-label="YouTube"
          class="social-link youtube"
        >
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </li>
    </ul>
    <a :href="emailLink" class="email-link"
      >Email Us: info@gourmetonwheelz.com</a
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const facebookUrl = ref("https://www.facebook.com/TheRitzLondon");
const twitterUrl = ref("https://twitter.com/TheRitzLondon");
const instagramUrl = ref("https://www.instagram.com/theritzlondon");
const linkedinUrl = ref("https://www.linkedin.com/company/the-ritz-london");
const youtubeUrl = ref("https://www.youtube.com/user/theritzlondon");
const emailLink = ref("mailto:info@gourmetonwheelz.com");
</script>
<style scoped src="/assets/css/socialmedia.css"></style>
