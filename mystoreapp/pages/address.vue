<template>
  <div class="wrapper">
    <div class="address-page">
      <h1>Our Location</h1>

      <div class="address-details">
        <div class="address-section">
          <h2>Address</h2>
          <p>123 Foodie Lane, Flavor Town, FT1 2AB, United Kingdom</p>
          <p>Come visit us and taste the best gourmet food in town!</p>
        </div>

        <div class="contact-section">
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> <a href="tel:+441234567890">+44 123 456 7890</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@gourmetonwheelz.co.uk">info@gourmetonwheelz.co.uk</a></p>
          <p>Our friendly team is here to assist you with any inquiries!</p>
        </div>

        <div class="hours-section">
          <h2>Opening Hours</h2>
          <p><strong>Monday - Friday:</strong> 10:00 AM - 10:00 PM</p>
          <p><strong>Saturday - Sunday:</strong> 11:00 AM - 11:00 PM</p>
          <p>We’re open late for all your cravings!</p>
        </div>

        <div class="map-section">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          <p>Use the map to navigate your way to a delicious experience!</p>
        </div>

        <div class="directions-section">
          <h2>Directions</h2>
          <p>Get directions to our location using your preferred navigation app or follow these instructions:</p>
          <p>We’re located at the heart of Flavor Town—easy to find and even easier to enjoy!</p>
        </div>

        <div class="additional-info-section">
          <h2>Additional Information</h2>
          <p>Parking is available in the nearby lot. Our facility is wheelchair accessible. Please contact us if you have any special requirements.</p>
          <p>We strive to make your visit comfortable and enjoyable. See you soon!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressPage'
}
</script>

<style scoped src="/assets/css/address.css"/>
