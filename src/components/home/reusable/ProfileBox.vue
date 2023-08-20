<script>
export default {
    props:{
        topClass: {
            default: "px-5 py-10 flex flex-col rounded-xl  justify-around shadow-lg my-5 mx-5",
            type: String
        },
        list: Object
    }

}
</script>


<template>


<div :class=topClass> 







<!-- <div class="" v-for="v in list" :key="v.title">  -->



<p class="text-2xl font-general-semibold text-ternary-dark dark:text-ternary-light font-semibold">{{ list.title }}</p>


<ul class="list-item ">

<li class="text-lg font-general-medium text-ternary-dark dark:text-ternary-light font-semibold mx-3"  v-for="li in list.li" :key="li">- {{ li.text }}</li>
</ul>

</div>






<!-- </div> -->


  

</template>



<style>

</style>