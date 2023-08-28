<script>
export default {
name: "MenuTopRightTitle",
 props: {
    title: String,
    showHr: {
      default: true,
      type: Boolean
    },
    position: {
      default: "end",
      type: String
    }
 }
}
</script>
<template>
  


<div :class='"flex flex-col w-full  items-" + position'>
<hr v-show=showHr class="solid  w-1/6 sm:-mr-6 "> 
<p 			class="font-general-medium text-lg/10 text-right font-medium text-secondary-light hover:text-indigo-300  sm:mx-4  mx-2 " >
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