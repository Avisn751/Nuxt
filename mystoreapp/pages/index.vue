<template>
  <div class="wrapper">
    <div class="header__content">
      <div class="header__tag">
        More than Faster
        <Img
          src="https://github.com/WebAddicted9/Responsive-Restaurant-Website/blob/main/Day-6-Responsive-Restaurent-Website/assets/delivery-bike.png?raw=true"
          loading="lazy"
          alt="header tag"
        />
      </div>
      <div class="mt-3">
        <h1>
          Be The Fastest In Delivering Your <span class="food">Food</span>
        </h1>
      </div>
      <p class="section__description">
        Our job is to filling your tummy with delicious food and with fast and
        free delivery.
      </p>
      <div class="header__btns">
        <NuxtLink to="/service" class="get-started">
          <button
            type="button"
            class="btn btn-primary btn-rounded"
            data-mdb-ripple-init
          >
            Get Started
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="header__image">
      <Img
        src="https://github.com/WebAddicted9/Responsive-Restaurant-Website/blob/main/Day-6-Responsive-Restaurent-Website/assets/header.png?raw=true"
        loading="lazy"
        alt="header"
      />
    </div>
  </div>
</template>
<style scoped src="/assets/css/index.css"></style>
