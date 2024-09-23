<template>
  <div class="about-page">
    <h1>About Us</h1>
    
    <section class="intro">
      <img src="/public/images/Gemini_Generated_Image_qnlrt5qnlrt5qnlr.jpeg" alt="Introduction Image" class="intro-image"/>
      <h2>Welcome to Gourmet on Wheelz!</h2>
      <p>At Gourmet on Wheelz, we believe that food is not just a necessity but an adventure. Our mission is to bring you the finest gourmet experiences right to your doorstep, with a side of fun and a splash of flavor.</p>
    </section>

    <section class="our-story">
      <img src="/public/images/Cold-Drinks-San-Francisco-restaurant.jpg" alt="Our Story Image" class="story-image"/>
      <h2>Our Story</h2>
      <p>Once upon a time in the heart of Flavor Town, a group of culinary enthusiasts decided to take their passion for food on the road. Armed with secret recipes, a love for bold flavors, and a vintage food truck named "The Flavor Mobile," they set out to create a food revolution.</p>
      <p>Years later, our little food truck turned into a thriving app, and “Gourmet on Wheelz” was born! Our team is dedicated to curating the most delectable dishes, ensuring that every bite is a taste of happiness.</p>
    </section>

    <section class="meet-the-team">
      <h2>Meet The Team</h2>
      <div class="team-member">
        <img src="/public/images/hire-kitchen-chef-team-for-restaurant.png" alt="Chef John Image" class="team-member-image"/>
        <h3>FoodOnWheelz Team</h3>
<p>At FoodOnWheelz, we pride ourselves on having a team of culinary experts and food enthusiasts who are passionate about delivering exceptional dining experiences. From our creative chefs who bring bold flavors to life, to our friendly staff who ensure every meal is served with a smile, each member of our team plays a crucial role in making your experience unforgettable.</p>
<p>Meet the stars behind the scenes: Chef John, our culinary maestro, crafts every dish with flair and precision. Sara, our expert sommelier, perfectly pairs our meals with the finest drinks. And Mike, our dedicated driver, ensures that every order arrives fresh and hot. Together, they make up the heart and soul of FoodOnWheelz, bringing you gourmet adventures like no other.</p>
 </div>
      <div class="team-member">
        <img src="/public/images/redcharlie-t-7KEq9M0b0-unsplash.jpg" alt="Sara Smith Image" class="team-member-image"/>
        <h3>Sara "The Sommelier" Smith</h3>
        <p>Sara pairs our dishes with the perfect drinks, ensuring every meal is a complete sensory experience. Her expertise and bubbly personality make every interaction a pleasure.</p>
      </div>
      <div class="team-member">
        <img src="/public/images/eiliv-aceron-wNQoaYCFcsI-unsplash.jpg" alt="Mike Johnson Image" class="team-member-image"/>
        <h3>Mike "The Road Warrior" Johnson</h3>
        <p>Our dedicated driver, Mike, ensures your gourmet goodies arrive hot and fresh. When he's not navigating the roads, he's planning the next great food adventure.</p>
      </div>
    </section>

    <section class="our-values">
      <h2>Our Values</h2>
      <img src="/public/images/happy_diners_shutterstock_1201677928.jpg" alt="Our Values Image" class="values-image"/>
      <ul>
        <li><strong>Quality:</strong> We source the freshest ingredients and cook with care to ensure every bite is extraordinary.</li>
        <li><strong>Innovation:</strong> We're always experimenting with new flavors and techniques to keep your dining experience exciting.</li>
        <li><strong>Customer Joy:</strong> Our goal is to bring a smile to your face with every meal. Your satisfaction is our top priority!</li>
      </ul>
    </section>

    <section class="join-us">
      <h2>Join The Gourmet Adventure!</h2>
      <img src="/public/images/all-day-dine-restaurant.jpg" alt="Join Us Image" class="join-us-image"/>
      <p>We’re always on the lookout for passionate food lovers to join our team or partner with us. Whether you’re a budding chef, a food critic, or just someone who loves great food, we’d love to hear from you!</p>
      <button class="contact-button" @click="openEmail">Got a Suggestion? Let Us Know!</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    openEmail() {
      window.location.href = 'mailto:info@gourmetonwheelz.co.uk';
    }
  }
}
</script>

<style scoped src="/assets/css/about.css"/>
