
<script>
import AboutMe from '../components/home/AboutMe.vue';
export default {
    name: 'Home',
    components: {
        AboutMe,
    },
  
}
</script>
<template>
<div>
<AboutMe /> 

<br> <br>

<div class="min-h-screen mt-5">

          <!-- Title -->

    
  <div class="flex flex-col items-end">
    <hr class="solid  w-1/6"> 
<p 			class="font-general-medium text-xl/10 text-right font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 ">

Experience
</p>
  </div>

  <br>
  <div class="flex w-9/12 justify-center">

<p class=" sm:text-xs/10 text-ternary-light font-general  lg:text-xl/10 mt-1"  style="" > Cloud Engineerdddddd </p>
<!-- transition: none -->
<transition name="slide-fade" mode="out-in" appear>

<p  class="text-ternary-light  font-general-semibold  text-xl/10 mb-4 ml-4" style="" > @FinTech</p>
</transition>

<p class="text-ternary-light font-general  text-l/10 mt-2 ml-3"   style="" > Date</p>

</div>

<div class="flex justify-around">

<p class=" sm:text-xs/10 text-ternary-light font-general  lg:text-xl/10 mt-1"  style="" > Cloud Engineeddddddddddrddddddddddd </p>
<!-- transition: none -->
<transition name="slide-fade" mode="out-in" appear>

<p  class="text-ternary-light  font-general-semibold  text-xl/10 mb-4 ml-4" style="" > @FinTech</p>
</transition>


<p class="text-ternary-light font-general  text-l/10 mt-2 ml-auto"   style="" > Date</p>

</div>

 
  

</div>
</div>
 

        <!-- Experience -->

		<!-- Businesses -->
        
		<!-- Qualifications -->

		
</template>
<style scoped>

hr.solid {
  border-top: 0.01em solid #434343;

}


#avatar {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    background-image: url('./src/assets/photos/me/portrait-bluewhite.jpg');
    
    /* make a square container */
    width: 400px;
    height: 600px;

    /* fill the container, preserving aspect ratio, and cropping to fit */
    background-size: cover;

    /* center the image vertically and horizontally */
    background-position: top center;

    border-radius: 10%;

}
.slide-fade-enter-active {
  transition: all 0.10s ease-out ;
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
