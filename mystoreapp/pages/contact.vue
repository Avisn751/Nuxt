<template>
  <div class="wrapper">
    <div class="contact-wrapper">
      <h2>Contact Us</h2>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            :class="{'is-invalid': nameError && touched.name}"
            @blur="markAsTouched('name')"
          >
          <span v-if="nameError && touched.name" class="error-message">{{ nameError }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            :class="{'is-invalid': emailError && touched.email}"
            @blur="markAsTouched('email')"
          >
          <span v-if="emailError && touched.email" class="error-message">{{ emailError }}</span>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            :class="{'is-invalid': messageError && touched.message}"
            @blur="markAsTouched('message')"
          ></textarea>
          <span v-if="messageError && touched.message" class="error-message">{{ messageError }}</span>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>
<style scoped src="/assets/css/contactus.css"></style>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase
const toast = useToast()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const touched = ref({
  name: false,
  email: false,
  message: false
})

const nameError = computed(() => {
  if (touched.value.name) {
    if (!form.value.name.trim()) {
      return 'Name is required.'
    }
  }
  return ''
})

const emailError = computed(() => {
  if (touched.value.email) {
    const email = form.value.email.trim()
    if (!email) {
      return 'Email is required.'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return 'Invalid email address.'
    }
  }
  return ''
})

const messageError = computed(() => {
  if (touched.value.message) {
    if (!form.value.message.trim()) {
      return 'Message is required.'
    }
  }
  return ''
})

const isFormValid = computed(() => !nameError.value && !emailError.value && !messageError.value)

const markAsTouched = (field) => {
  touched.value[field] = true
}

const handleSubmit = async () => {
  if (!isFormValid.value) {
    return
  }

  try {
    await axios.post(`${apiBase}/contactUS`, form.value)
    toast.success('Suggestion received successfully!', {
      timeout: 5000, // 5 seconds
    })
    // Clear the form fields
    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
    // Reset touched fields
    touched.value.name = false
    touched.value.email = false
    touched.value.message = false
  } catch (error) {
    console.error('Error sending message:', error)
    toast.error('Failed to send message. Please try again later.', {
      timeout: 5000,
    })
  }
}
</script>

