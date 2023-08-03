<script>
import feather from 'feather-icons';

export default {
    name: "TopPartLeft",
    props : {
        left:  String, 
        middle: String, 
        right: String,
        overrideClassMiddle: String,
        overrideClassLeft: String,
        overrideClassRight: String,
        animate: String
    },

    mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
    
}
</script>

<template>

<div class="flex">

<p class=" sm:text-xs/10 text-ternary-light font-general  lg:text-xl/10 mt-2"  :class="overrideClassLeft" style="" > {{ left }} </p>
<!-- transition: none -->
<transition name="slide-fade" mode="out-in" appear  :style=animate >

<p  class="text-ternary-light  font-general-semibold  text-4xl/10 mb-5 ml-5"  :class="overrideClassMiddle"  style="" > {{ middle }}</p>
</transition>

<p class="text-ternary-light font-general  text-xl/10 mt-2 ml-3"  :class="overrideClassRight"  style="" > {{ right }}</p>

</div>


    
</template>
<style scoped>

.slide-fade-enter-active {
  transition: all 0.3s ease-out ;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

</style>