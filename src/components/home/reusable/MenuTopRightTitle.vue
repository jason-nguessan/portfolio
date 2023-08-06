<script>
export default {
name: "MenuTopRightTitle",
 props: {
    title: String
 }
}
</script>
<template>
  


<div class="flex flex-col items-end ">
<hr class="solid  w-1/6 " style=" margin-right: -4rem; position: absolute;"> 
<p 			class="font-general-medium text-lg/10 text-right font-medium text-secondary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 " >
    {{ title }}
</p>
<br>
</div>


</template>
<style  scoped>
hr.solid {
  border-top: 0.01em solid #434343;
}

</style>