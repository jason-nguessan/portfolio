
<script>
export default {
    name: "JobSection",

    props: {
        leftTopPart: String,
        rightTopPart: String,
        description: String,
        rightTopPartHref: String,
        applyPadding: {
            default: "mt-8",
            type: String
        },
        bulletPoints: {
            text: String,
            href: String,
        }
     
        
    },
    mounted() {
    }

    

}
</script>
<template>

<div> 



<div :class="'flex flex-col justify-around ' +  applyPadding " >


<div class="flex ">
  <p class=" sm:text-xs/10 text-ternary-light font-general-semibold lg:text-xl/10 h-2"> {{ leftTopPart }}</p>

<!-- transition: none -->
<br>


<a :href=rightTopPartHref  target="_blank"  class=" ml-auto ">
    <p v-if="rightTopPartHref == null" class="text-secondary-light font-general-semibold  text-xl/10"   style="" > {{ rightTopPart }} </p>
  <p v-else class="text-secondary-light font-general-semibold  text-xl/10  hover:text-indigo-300"   style="" > {{ rightTopPart }}</p>

</a>

</div>


<p 	class="font-general-regular text-ternary-light dark:text-ternary-light mx-8 ">
    {{ description }}
  </p>
  
  <br>


 </div>

 
 <ul class="list-disc justify-center mx-52 ">

    <li
						v-for="info in bulletPoints "
						:key="info"
						class="font-general-regular text-ternary-light dark:text-ternary-light mx-auto"
					>

                    <div>
                        <span v-if="info.href != null" class=" hover:text-indigo-300"  >
                            <a :href=info.href target="_blank" > {{ info.text }}</a>
                        </span>
						<span v-else>  {{ info }}</span>


                    </div>
					
					</li>





  
		
          
				</ul>

                </div>
            
  
</template>

<style scoped>

</style>