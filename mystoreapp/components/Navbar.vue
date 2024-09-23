<template>
    <header>
      <div class="navbar-starter">
        <h1 class="logo">Gourmet<span>ON</span>Wheelz</h1>
        <nav class="main-nav" :class="{ open: isMenuOpen }">
          <ul>
            <li><nuxt-link to="/"><i class="fa fa-home nav-icon"></i>Home</nuxt-link></li>
            <li><nuxt-link to="/about"><i class="fa fa-info nav-icon"></i>About</nuxt-link></li>
            <li><nuxt-link to="/service"><i class="fa fa-usd nav-icon"></i>Service</nuxt-link></li>
            <li><nuxt-link to="/register"><i class="fa fa-pencil nav-icon"></i>Register</nuxt-link></li>
            <li><nuxt-link to="/contact"><i class="fa fa-envelope nav-icon"></i>Contact Us</nuxt-link></li>
          </ul>
        </nav>
        <div class="menu-toggle" @click="toggleMenu">
          <div :class="{ 'hamburger': true, 'open': isMenuOpen }"></div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

body {
  background: #f0f8ea;
  font-family: 'QuickSand', sans-serif;
  margin: 0;
  padding-top: 60px; /* Adjust this value based on the height of your navbar */
}

header {
  background: #e54b4b; /* Navbar background color */
  color: #ebebd3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
  padding: 1em 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow to make the navbar stand out */
}

.navbar-starter {
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
}

.logo span {
  font-weight: 400;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
}

.main-nav li {
  border-bottom: 1px solid #575766;
}

.main-nav li:last-child {
  border-bottom: none;
}

.main-nav a {
  color: #ebebd3; /* Match navbar's text color */
  display: block;
  padding: 1em;
  text-decoration: none;
  text-transform: uppercase;
}

.main-nav a:hover,
.main-nav a:focus {
  background: #e4b363;
  color: #464655;
}

.nav-icon {
  display: inline-block;
  font-size: 1.3em;
  margin-right: .5em;
  text-align: center;
  width: 1.1em;
  color: rgba(255, 255, 255, 0.45);
}

.menu-toggle {
  display: none; /* Hide by default */
  padding: 1em;
  cursor: pointer;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: "";
  display: block;
  background: #ebebd3; /* Color of hamburger bars */
  height: 3px;
  width: 1.75em;
  transition: all ease-in-out 500ms;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.hamburger.open {
  background: transparent; /* Hide the original bars */
}

.hamburger.open::before {
  transform: rotate(45deg); /* Cross sign */
  background: #ebebd3; /* Cross color */
}

.hamburger.open::after {
  transform: rotate(-45deg); /* Cross sign */
  background: #ebebd3; /* Cross color */
}

@media only screen and (max-width: 699px) {
  .menu-toggle {
    display: block; /* Show menu toggle on small screens */
  }
  
  .main-nav {
    display: none; /* Hide navigation on small screens */
    width: 100%;
    background: #e54b4b; /* Match navbar's background color */
    position: absolute;
    top: 60px; /* Adjust if necessary */
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  .main-nav.open {
    display: block; /* Show navigation when menu is open */
  }
  
  .main-nav ul {
    flex-direction: column;
  }
  
  .main-nav li {
    border: none;
  }
  
  .main-nav a {
    padding: 1em;
    text-align: center;
    color: #ebebd3; /* Match navbar's text color */
  }

  .main-nav a:hover,
  .main-nav a:focus {
    background: #e4b363;
    color: #464655;
  }
}

@media only screen and (min-width: 700px) {
  .menu-toggle {
    display: none; /* Hide menu toggle on larger screens */
  }
  
  .main-nav {
    display: flex; /* Display navigation on larger screens */
    background: transparent;
    float: right;
  }
  
  .main-nav ul {
    flex-direction: row;
  }
  
  .main-nav li {
    display: inline-block;
    border: none;
  }
  
  .main-nav a {
    padding: 0;
    margin-left: 2em;
    color: #ebebd3; /* Match navbar's text color */
  }
  
  .main-nav a:hover,
  .main-nav a:focus {
    background: transparent;
    color: #e4b363; /* Change color on hover/focus */
  }
  
  .nav-icon {
    display: none;
  }
}
</style>