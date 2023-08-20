<script>

import MenuTopRightTitle from './reusable/MenuTopRightTitle.vue'
import ProfileBox from './reusable/ProfileBox.vue'

export default {
    components: {
        MenuTopRightTitle,
        ProfileBox
        
    
    },


    methods: {

  
  
  getYOE(){
    const date2 = new Date('05/01/2019')
    let currentDate = new Date()
    let year = currentDate.getFullYear() - date2.getFullYear()
    console.log(year)
    return {
              
              title: "YOE: " + year,
            
          }
    }
  
  },
mounted ()  {
  this.leftVouchBoxYOE = this.getYOE();
 
},

    data: () => (


      
        {

          leftVouchBoxEducation: {
              
              title: "Education",
              li: [{ 
                  text: "Bch. Computing",
              },

              { 
                  text: "Adv.D Soft Eng",
              },
            
            
            ]
            
            
          },

          leftVouchBoxCertification: {
              
              title: "Certifications",
              li: [{ 
                text: "Azure Fundamdentals",
              },

              { 
                text: "Azure Developer",
              },

              {
                text: "Go Specialization",
              }
            
            
            ]
            
            
          },
          

          leftVouchBoxTechnologies: {
              
              title: "Technologies",
              li: [{ 
                text: "Cloud: Azure & More",
              },

              { 
                text: "Mobile: Flutter & more",
              },

              {
                text: "Web: VueJs & more",
              }
            ]
            
          },


          leftVouchBoxLanguages: {
              
              title: "Languages",
              li: [{ 
                text: "English: Fluent",
              },

              { 
                text: "French: Fluent",
              },
              { 
                text: "Spanish: Novice",
              },

            ]
            
          },
          
          leftVouchBoxYOE: {
              title: "YOE"
            
          },
          
         
        
          
     

        })}

     
        
        
      
      
        
    
</script>

<template>

<div class="flex  flex-col center-screen relative">

<MenuTopRightTitle class="mb-auto top-0 right-0 absolute " title="Profile"  /> 

<!-- class="mt-20 autoplay :duration="30000" " -->


<div class=""> 
 <div class="flex flex-row  rounded-xl justify-around bg-indigo-200 w-auto my-5 mx-5 "> 
<!-- code -->
<!-- code -->
<div class="flex flex-col justify-around"> 

<ProfileBox  :list="leftVouchBoxEducation" /> 
<ProfileBox  :list="leftVouchBoxCertification" /> 

</div>

<div class="flex flex-col justify-center items-center"> 
  
  <ProfileBox  :list="leftVouchBoxYOE" class="bg-white py-2" topClass="px-5 py-5 rounded-xl  justify-around shadow-lg my-5 mx-5" /> 



  <div class="sm:h-96 sm:w-80 h-52 w-60 bg-cover shadow-2xl z-40  rounded-xl my-5" style=" background-position-y: 35%;
    border-radius: 55%;" id="avatar1"></div>


</div>
<div class="flex flex-col justify-around"> 

<ProfileBox  :list="leftVouchBoxTechnologies" /> 
<ProfileBox  :list="leftVouchBoxLanguages" /> 

</div>





</div>






</div>
</div>

</template>


<style scoped>

.center-screen {
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  min-width: 100vh;
}
#avatar1 {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    background-image: url('./src/assets/photos/me/portraitredwhite.jpg');
      background-size: cover;
}
</style>

<style>

</style>