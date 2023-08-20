<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/shared/AppFooter.vue'
import feather from 'feather-icons';

//write props for appthem

export default {
  components: {
    AppHeader,
  },
  data: () => {
    return {
      appTheme : 'bg-primary-night-dark'
    }
  
  }
  , 
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
  }
</script>

<template>

<div :class="appTheme" >
<router-view :theme="appTheme" />
  <AppHeader/>

  
</div>


</template>

<style scoped>




@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
