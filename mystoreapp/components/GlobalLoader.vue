<template>
    <div class="loading-wrapper">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading...</p>
      <!-- Enhanced content here -->
      <h1 class="loading-heading">
        Welcome to <span class="company-name">GOURMETONWHEELZ!</span>
      </h1>
      <p class="loading-message">
        Your journey to gourmet adventures is just about to begin!
      </p>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 245px);
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  .loading-spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #e54b4b;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loading-text {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #e54b4b;
    font-family: "Poppins", sans-serif;
  }
  
  .loading-heading {
    margin-top: 30px;
    font-size: 2.5rem;
    font-weight: bold;
    color: #e54b4b;
    font-family: "Poppins", sans-serif;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .company-name {
    color: #e54b4b;
    font-size: 2.8rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .loading-message {
    margin-top: 15px;
    font-size: 1.2rem;
    color: #666;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
  
  @media (max-width: 1200px) {
    .loading-heading {
      font-size: 2rem;
    }
  
    .company-name {
      font-size: 2.4rem;
    }
  }
  
  @media (max-width: 992px) {
    .loading-heading {
      font-size: 1.8rem;
    }
  
    .company-name {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .loading-heading {
      font-size: 1.6rem;
    }
  
    .company-name {
      font-size: 1.8rem;
    }
  
    .loading-text,
    .loading-message {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    .loading-heading {
      font-size: 1.4rem;
    }
  
    .company-name {
      font-size: 1.6rem;
    }
  
    .loading-text,
    .loading-message {
      font-size: 0.9rem;
    }
  
    .loading-spinner {
      width: 50px;
      height: 50px;
    }
  }
  </style>
  