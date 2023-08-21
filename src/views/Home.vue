
<script>
import AboutMe from '../components/home/AboutMe.vue';
import Experience from '../components/home/Experience.vue';
import Ventures from '../components/home/Ventures.vue';
import Publications from '../components/home/Publications.vue';
import Profile from '../components/home/Profile.vue';


export default {
    name: 'Home',
    components: {
        AboutMe,
        Experience,
        Ventures,
        Publications,
        Profile,
        
    },
  
}
</script>
<template>
<div class="sm:ml-20 sm:mr-4 mt-16 ">
<!-- <AboutMe class="sm:ml-20 sm:mr-4 " /> -->
<Profile id="Profile" class="min-h-screen mt-5 "  />
<!-- <Ventures  id="Ventures" class="min-h-screen"  /> -->
<!-- <Publications id="Publications" class="min-h-screen mt-5 sm:-ml-20  sm:-mr-4"  /> -->
<!-- <Experience  id="Experiences" class="min-h-screen mt-5"  /> -->



</div>
 

        <!-- Experience -->

		<!-- Businesses -->
        
		<!-- Profile -->

		
</template>

<style>
@responsive  {
.center-screen {
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  min-width: 100vh;
  background: blanchedalmond;
}
}



</style>

<style scoped>




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
