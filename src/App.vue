<script>
import { RouterLink, RouterView } from 'vue-router'
import AppFooter from './components/shared/AppFooter.vue'
import AppHeader from './components/shared/AppHeader.vue'

import feather from 'feather-icons';

//write props for appthem

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data: () => {
    return {
      appTheme : 'bg-primary-night-dark '
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


<div :class="appTheme + ' '" >
  <AppHeader /> 
<router-view :theme="appTheme" />
<AppFooter />



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
