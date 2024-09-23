<template>
    <div class="wrapper">
      <form class="custom-form m-4">
        <h2 class="form-heading">Login to Your Account</h2>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <input type="email" id="email" class="form-control" />
          <label class="form-label" for="email">Email Address</label>
        </div>
  
        <div class="form-outline mb-4">
          <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
          <input type="password" id="password" class="form-control" />
          <label class="form-label" for="password">Password</label>
        </div>
  
        <button type="button" class="btn custom-btn btn-block mb-4">Login</button>
  
        <div class="text-center mb-4">
          <p>New here? <router-link to="/register"><span class="signup-link">Sign Up</span></router-link></p>
        </div>
  
        <div class="text-center">
          <p>Or log in with:</p>
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
  
  <style scoped src="/assets/css/login.css"></style>
  