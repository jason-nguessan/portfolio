<script> 
import TopPartLeft from '../../components/home/reusable/TopPartLeft.vue';
import AppHeaderLinks from '../shared/AppHeaderLinks.vue';
export default{
    components: {
        TopPartLeft,
        AppHeaderLinks,
    },
       
    data(){
     return  {

        canDo: ['Getting your business in front of clients', 'Architecting & Developing a Most Viable Product', 'Scaling your application'],
        count : 0,
     } 
       
    },

    mounted(){
    
    window.setInterval(()=>{
      this.changeText()
    }, 5000);

  },
  methods:{


    changeText(){
      const first = this.canDo.shift()
      this.canDo = this.canDo.concat(first)
      this.count += 1
    }
  },

}


</script>

<template>
       
       <div class="flex"> 


        <div class="flex flex-col  sm:w-8/12 w-full mx-5" >
            <!-- Text Part  -->
            <div class="flex w-10/12 justify-between">

              <Transition name="slide-fade" appear>
                <div>

       
                <TopPartLeft class="" left="Hi, my name is " middle="Jason" right="." /> 
         <br>
                <TopPartLeft  left="I am a " middle="Software Engineer" right="," /> 
                <br>

                <TopPartLeft left="and most Importantly " middle="Tech Entrepreneur" right="." /> 
                <br>
                <br>
                

                <!-- <AppHeaderLinks  :isOpen="false" />  -->
              </div>
              </Transition>


      

            </div>
            
            <div class="w-11/12 relative ">

            <TopPartLeft  class="" :key=count  left="I can help with " :middle="canDo[0]"  overrideClassLeft="font-general ml-2" overrideClassMiddle='text-l/10 font-general-semibold ml-2' right="." overrideClassRight=" font-general mt-1" /> 
            </div>
            <div>

            <div >

            </div>


          </div>




            </div>
            
        <!-- <div class="justify-end " id="avatar"></div> -->
              <AppHeaderLinks  :isOpen="false" />  

       </div>
      
              
</template>

<style scoped>
#avatar {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    background-image: url('./src/assets/photos/me/portrait-bluewhite.jpg');
    
    /* make a square container */
    width: 300px;
    height: 400px;

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