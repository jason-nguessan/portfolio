
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
<template >

<!-- <div class="lg:ml-20 lg:mr-4 mt-16 " id="home"> -->


    <div class="lg:ml-20 lg:mr-4 mt-16"  id="home">

<AboutMe class="lg:ml-20 lg:mr-4 ml-5 lg:text-xl" />
<Profile id="Profile" class="lg:min-h-screen  mt-5 lg:-ml-20 lg:-mr-0 "  />
<Ventures  id="Ventures" class="lg:min-h-screen mt-5 lg:-ml-20  lg:-mr-0 "  />
<Publications id="Publications" class="lg:min-h-screen mt-5 lg:-ml-20  lg:-mr-0"  />
<Experience  id="Experiences" class=" mt-5  lg:-ml-20 lg:-mr-0"  />





</div>
 

        <!-- Experience -->

		<!-- Businesses -->
        
		<!-- Profile -->

		
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities{
.center-screen {
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  min-width: 100vh;
}
}

@layer components{
.inner-spacing {
  @apply lg:my-0  my-5 lg:mx-5 mx-10 ;

}
}


/* <div class="lg:my-0 my-5 lg:mx-5 mx-10">  */





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
