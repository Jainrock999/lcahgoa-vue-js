<template>
  <div id="app">
  <div id="container">
  	<div id="main">
    <app-header/>
     <div class="clear_fix"></div>
    <router-view/>
      </div>
     
     <app-footer/>
      </div>
  </div>
</template>

<script>
import AppFooter from './components/common/Footer.vue';
import AppHeader from './components/Header.vue';
export default {
  name: 'App',
   components: {
    AppFooter,
    AppHeader

  }
}
</script>


