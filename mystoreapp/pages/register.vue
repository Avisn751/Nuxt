<template>
    <div class="wrapper">
      <form class="custom-form m-4" @submit.prevent="handleSubmit">
        <h2 class="form-heading">Order Your Delicious Meals!</h2>
  
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <font-awesome-icon :icon="['fas', 'user']" class="icon" />
              <input
                type="text"
                id="firstName"
                class="form-control"
                v-model="form.firstName"
              />
              <label class="form-label" for="firstName">First Name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <font-awesome-icon :icon="['fas', 'user']" class="icon" />
              <input
                type="text"
                id="lastName"
                class="form-control"
                v-model="form.lastName"
              />
              <label class="form-label" for="lastName">Last Name</label>
            </div>
          </div>
        </div>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
          <input
            type="text"
            id="address"
            class="form-control"
            v-model="form.address"
          />
          <label class="form-label" for="address">Delivery Address</label>
        </div>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="form.email"
          />
          <label class="form-label" for="email">Email Address</label>
        </div>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="icon" />
          <input
            type="date"
            id="dob"
            class="form-control"
            v-model="form.dob"
          />
          <label class="form-label" for="dob">Date of Birth</label>
        </div>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="form.password"
          />
          <label class="form-label" for="password">Password</label>
        </div>
  
        <button type="submit" class="btn custom-btn btn-block mb-4">
          Sign Up
        </button>
  
        <div class="text-center mb-4">
          <p>
            Already have an account?
            <router-link to="/login">
              <span class="login-link">Login</span>
            </router-link>
          </p>
        </div>
  
        <div class="text-center">
          <p>Or sign up with:</p>
          <div class="social-buttons">
            <button type="button" class="btn btn-floating">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </button>
            <button type="button" class="btn btn-floating">
              <font-awesome-icon :icon="['fab', 'google']" />
            </button>
            <button type="button" class="btn btn-floating">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
    setup() {
      // Form data
      const form = ref({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        dob: '',
        password: ''
      })
  
      // Function to handle form submission
      const handleSubmit = () => {
        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(form.value))
        alert('Form data saved to localStorage')
      }
  
      // Function to populate form data from localStorage on mount
      onMounted(() => {
        const savedData = localStorage.getItem('formData')
        if (savedData) {
          form.value = JSON.parse(savedData)
        }
      })
  
      return {
        form,
        handleSubmit
      }
    }
  }
  </script>
  


<style scoped src="/assets/css/register.css"></style>
