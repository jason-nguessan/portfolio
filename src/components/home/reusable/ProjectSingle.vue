<script>
export default {
	props: ['project'],
};
</script>

<template>


	

	
<div class="  rounded-xl shadow-lg hover:shadow-2xl  mb-10 sm:mb-0  dark:bg-ternary-dark sm:h-full overflow-hidden   " >

	<a :href="project.href"  target="blank" class="h-full" :class="project.href != null ?  '' : 'disabled' ">
		<p
				class="font-general-semibold text-2xl text-center text-ternary-light font-semibold mb-2"
			>
				{{ project.status }}
			</p>
			



	<div
		class="rounded-xl shadow-lg hover:shadow-2xl  mb-10 sm:mb-0 h-full  bg-ternary-light dark:bg-ternary-dark"
		:class="project.href != null ? ' hover:bg-indigo-300' : ''"
		aria-label="Single Project"
	>

	

	
		<div>
			
			<img 
				:src="project.img"
				:alt="project.title"
			
				class="w-12/12 bg-center rounded-t-xl border-none lg:h-full md:bg-contain  "
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.category }}</span
			>
			<br>
		
			
		</div>
	</div>
</a>
</div>

</template>

<style scoped>

.avatar {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    
    /* make a square container */
    width: 400px;
    height: 600px;

    /* fill the container, preserving aspect ratio, and cropping to fit */
    background-size: cover;

    /* center the image vertically and horizontally */
    background-position: top center;

    border-radius: 10%;

}
a.disabled {
  pointer-events: none;
  cursor: default;
}

img {

  margin: auto;
  display: block;
  width:100%

}
</style>
