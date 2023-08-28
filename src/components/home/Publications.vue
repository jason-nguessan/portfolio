

<script>
import MenuTopRightTitle from './reusable/MenuTopRightTitle.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import feather from 'feather-icons';





export default{
    components: {
        MenuTopRightTitle,
        VueperSlides,
        VueperSlide
    
    },





	updated() {
		feather.replace();
	},


  mounted () {
    this.transformSlide()
    feather.replace();

  },

  methods:{

    updateSlides(isLeft){

      let maxSlide = this.slides.length - 1
      if(isLeft){
        if(this.currSlideIndex <= 0){
         this.currSlideIndex = maxSlide
        }
        else{
          this.currSlideIndex -= 1
        }
      
      }
      else{

        if(this.currSlideIndex >= maxSlide){
         this.currSlideIndex = 0
        }
        else{
          this.currSlideIndex += 1
        }
      }
      
      const slides = document.querySelectorAll('.slide')
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100* (indx - this.currSlideIndex )}%)`;
      });

      
    },


  logEvents (eventName, params) {
    this.events += `<strong>${eventName}</strong>, ${JSON.stringify(params)}<br>`
    console.log(this.events)
    console.log(eventName)
    if(params.currentSlide.image == "src/assets/photos/quotes/quote22.png"){
      this.slideRatio = "0.21"
    }

  else  if(params.currentSlide.image == "src/assets/photos/quotes/quote31.png"){
      this.slideRatio = "0.21"
    }
    else{

      this.slideRatio = "0.33"

    }


    
    
    //src/assets/photos/quotes/quote11.pn
    //    console.log(params.currentSlide.image)
      //  if(params.currentSlide.image == )

  },


    transformSlide(){
      const slides = document.querySelectorAll('.slide')
      slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;

  
  });


}
  },
  
data: () => ({

  
  
  currSlideIndex : 0,
  slides: [

  {
      title: 'Chief Organizer - Def Hacks',
      href:"https://defhacks.co/hackathons/global_2.0.html",
      content: 'Hackathon Organizer, following 50k+ Prizes, 1k+ participants, as well as interesting speakers.',
      image: "src/assets/photos/work/defhacks.png"

    },

    {
      title:  'Guest Speaker - V.City',
      href: "https://www.youtube.com/watch?v=FIyQiF5n7h0",
      content:  'Demystifying popular wide technical tool with tech influencer.',
      image: "src/assets/photos/work/youtube-vcity.jpg"
    },
 
    //
    {
      title: '3rd Place Winner - Agri Case study',
      href:"https://www.uoguelph.ca/lang/news/2020/03/students-collaborate-address-industry-challenges-agriculture",
      content: 'Proposed using anaerobic digestion to create higher quality compost for mushroom facilities.',
      image: "src/assets/photos/work/thirdplace-university-uog.png"
    },

    {
      title: 'Youth Entrepreneur Mentor - Banks',
      href:"https://sbs-spe.feddevontario.canada.ca/en/youth-entrepreneurship-guide",
      content: 'Bank wide initiative crossing over 5 major banks to guide youths in their ventures.',
      image: "src/assets/photos/work/edc-bdc.jpeg"
    },

 
    {
      title: '4th Place Winner - Hacking Health',
      href: "https://hacking-health.org",
      content: 'Solution that would fight against violence in health care centres.',
      image: "src/assets/photos/work/hacking-health.jpeg"
    },
    {
      title: 'Cloud Intro - University',
      href:"https://www.uoguelph.ca",
      content: 'Theoretical, and hands-on session of Cloud Computing.',
      image: "src/assets/photos/work/teaching-uoguelph.png"
    },
  
  
  ],

    
  events: "",

slideRatio: "0.21",
slidesVueper: [

{

// You can also provide a URL for the image.
image: ('src/assets/photos/quotes/quote11.png')
},

{

// You can also provide a URL for the image.
image: ('src/assets/photos/quotes/quote31.png')
},

{
// You can also provide a URL for the image.
image: ('src/assets/photos/quotes/quote22.png')
},



],

})


}
</script>


<template>
    
    <div class="flex flex-col ">
      <MenuTopRightTitle title="Publications"  /> 
      
      <div class="flex sm:flex-row mt-0 flex-col justify-center items-center">

    
    <div class="slider sm:w-1/2 w-full">

    
  
      <div class="slide" v-for="slide,i in slides" :key="i">
        <img
          :src=slide.image
          alt=""
          class="object-contain"
        />

      </div>

    

     
    </div> 

    <div class="flex flex-col items-center justify-between sm:w-1/2 w-full">

      <div class="md:hidden flex sm:justify-center  sm:w-12/12 sm:p-5 sm:mt-5 mb-5">
     <!-- Control buttons -->
     <button @click="updateSlides(true)" class="btn btn-prev mr-20" >
      
      <i
						data-feather="arrow-left"
						class="duration-100"
					></i>
      
    </button>
     
     <button  
     @click="updateSlides(false)"
     class="btn btn-next"> 	<i
						data-feather="arrow-right"
						class="duration-100 "
					></i> </button>


   
    </div>
   
      
      <p class="font-general-semibold text-ternary-light dark:text-ternary-light sm:text-4xl md:text-2xl text-xl  sm:mx-8 mx-0 mt-8">
         {{ slides[currSlideIndex].title }}
      
</p>


<span info.href  class="font-general-regular bg-center justify-center text-ternary-light text-center sm:text-3xl md:text-xl text-lg  leading-loose dark:text-ternary-light mx-8 my-auto cursor-pointer hover:text-indigo-300"  >
                            <a :href=slides[currSlideIndex].href target="_blank" > {{ slides[currSlideIndex].content }}</a>
                        </span>


  

<p class="font-general-regular bg-center justify-center text-ternary-light text-center text-2xl md:text-lg  leading-loose dark:text-ternary-light mx-8 my-auto">
         {{ currSlideIndex + 1}} / {{ slides.length  }}
       

      
</p>
      
      
</div>
  

    
    
 

   


    
    </div>
    <div class="hidden md:flex md:justify-center md:w-12/12 md:p-5 ">
     <!-- Control buttons -->
     <button @click="updateSlides(true)" class="btn btn-prev mr-20" >
      
      <i
						data-feather="arrow-left"
						class="duration-100"
					></i>
      
    </button>
     
     <button  
     @click="updateSlides(false)"
     class="btn btn-next"> 	<i
						data-feather="arrow-right"
						class="duration-100 "
					></i> </button>


   
    </div>
   

    <div class="flex flex-col items-end py-5">
    <hr class=" solid items-end solid  w-3/12 " > 
</div>

<!-- Hide only on small screens -->
  <div class="hidden sm:inline" > 



    <vueper-slides  :arrows="false" :fractions="true" progress :bulletsOutside="true" :touchable="false"  :slide-ratio=slideRatio 

@ready="logEvents('ready', $event)"
 @previous="logEvents('previous', $event)"
 @next="logEvents('next', $event)"
 @before-slide="logEvents('before-slide', $event)"
 @slide="logEvents('slide', $event)"

>
<vueper-slide v-for="(slide, i) in slidesVueper"
   :key="i"
   :image="slide.image"
  


   
   >
 </vueper-slide>
 </vueper-slides>
    </div>


<!-- show only on small screens -->

  <div class="sm:hidden" > 



<vueper-slides  :arrows="false" :fractions="false" progress :bulletsOutside="true" fixed-height="200px" :touchable="false"  

@ready="logEvents('ready', $event)"
@previous="logEvents('previous', $event)"
@next="logEvents('next', $event)"
@before-slide="logEvents('before-slide', $event)"
@slide="logEvents('slide', $event)"

>
 <vueper-slide v-for="(slide, i) in slidesVueper"
:key="i"


> 
<template #content> 
      <div class="vueperslide__content-wrapper"  style="flex-direction: row">
    <div > 


        <img 
          :key="i"
          :src=slide.image
          alt=""
          class="object-contain"
        />
      </div>

      </div>



</template>
</vueper-slide>

</vueper-slides>
</div>

  </div>

     <!-- V City (Explain ), Hacking Health,  Slide Bar (DSC), Hacking Agrifarm, Def Hacks (Def Hacks)  -->      <!-- Italic Text of what's been done -->



              
</template>



<style scoped>

.slider {
  max-width: 800px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.slide {
  width: 100%;
  max-width: 800px;
  height: 400px;
  position: absolute;
  transition: all 0.5s;
}


.slide img {
  width: 100%;
  height: 100%;
  background-size: contain;
}


.btn {
  
  position: relative;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 50%;
  z-index: 10px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
}

.btn:active {
  transform: scale(1.1);
}

.btn-prev {
  top: 45%;
}

.btn-next {
  top: 45%;
}

</style>


<style> 


.vueperslides__fractions {
    position: absolute;
    top: 0.8em;
    left: 90%;
    z-index: 2;
    padding: 0.2em 1em;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 2em;
    background: rgb(0, 0, 0);
    color: #eeee;
}
.vueperslides__progress {
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255)
  
}

.vueperslides__bullet .default {
  background-color: rgb(255, 255, 255);
  border: none;
  box-shadow: none;
  transition: 0.3s;

}


.vueperslides__bullet--active .default {
   --tw-bg-opacity: 1;
    background-color: rgb(199 210 254 / var(--tw-bg-opacity))}


</style>



