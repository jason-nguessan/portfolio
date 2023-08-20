<script>
export default {
name: "MenuTopRightTitle",
 props: {
    title: String,
    showHr: {
      default: true,
      type: Boolean
    }
 }
}
</script>
<template>
  


<div class="flex flex-col items-end  ">
<hr v-show=showHr class="solid  w-1/6" style=" margin-right: 0.7.em; "> 
<p 			class="font-general-medium text-lg/10 text-right font-medium text-secondary-light hover:text-indigo-300  sm:mx-4   " >
    {{ title }}
</p>
<br>
</div>


</template>
<style  >
hr.solid {
  border-top: 0.01em solid #434343;
}

</style>