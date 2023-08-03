
<script>
import TopPartLeft from '../components/home/reusable/TopPartLeft.vue';
export default {
    name: 'Home',
    components: {
        TopPartLeft,
    },
    
    data(){
     return  {

        canDo: ['Getting your business in front of clients', 'Architecting & Developing a Most Viable Product', 'Scaling your application software'],
        colors: ['indigo-500', 'teal-300', 'teal-300'],
        count : 0,
        startLeftAnimation: true
     } 
       
    },

    mounted(){
    
    window.setInterval(()=>{
  //    this.changeColor();
      this.changeText()
    }, 5000);

  },
    methods:{
    
    //     changeText(){

    //         const first = this.canDo.shift()
    //         this.canDo = this.canDo.concat(first)
    //         console.log(first)
    //     },
       
    changeColor() {
            const first = this.colors.shift()
            this.colors = this.colors.concat(first)
    },

    changeText(){
      const first = this.canDo.shift()
      this.canDo = this.canDo.concat(first)
      this.count += 1
      console.log(this.count)
    }
  },
  
    
    // data: () => {
    //     return 
    // }
};
</script>
<template>
        
        <div class="flex justify-center" >
            <!-- Text Part  -->
            <div class="w-9/12">

              <Transition name="slide-fade" appear>
                <div>

       
                <TopPartLeft left="Hi, my name is " middle="Jason" right="." /> 
         <br>
                <TopPartLeft  left="I am a " middle="Software Engineer" right="," /> 
                <br>

                <TopPartLeft left="and most Importantly " middle="Tech Entrepreneur" right="." /> 
                <br>
                <br>
              </div>
              </Transition>

                    <TopPartLeft  :key=count  left="I can help with " :middle="canDo[0]"  overrideClassLeft="text-xl/12 font-general mt-1" overrideClassMiddle='text-xl/10 font-general-semibold mb-5 ml-2' right="." overrideClassRight="text-xl/10 font-general mt-1" /> 




                <!-- <p class="text-ternary-light text-xl/10 font-general mt-1" style="" >I can help with</p>

       
                <p class="text-ternary-light text-2xl/10 font-general-semibold mb-5 ml-2" style="" >Getting your business in front of clients</p>
                <p class="text-ternary-light text-xl/10 font-general mt-1" style="" >.</p> -->

      


            

            </div>
            <div>
              <div id="avatar"></div>

            <h1 class="text-ternary-light" style= "" >Profile</h1>

            </div>
        </div>
        
        <!-- AboutMe  -->

        <!-- Experience -->

		<!-- Businesses -->
        
		<!-- Qualifications -->

		
</template>
<style scoped>
#avatar {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    background-image: url('https://i.stack.imgur.com/Dj7eP.jpg');
    
    /* make a square container */
    width: 150px;
    height: 150px;

    /* fill the container, preserving aspect ratio, and cropping to fit */
    background-size: cover;

    /* center the image vertically and horizontally */
    background-position: top center;

    /* round the edges to a circle with border radius 1/2 container size */
    border-radius: 50%;
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

.yellow {
  color: yellow;
}

.green {
  color:green;
}

.red {
  color: red;
}

/* div {
    background-image: url(../assets/silver-star-confetti-on-black-background-vector-27862280.jpg);
} */
</style>
