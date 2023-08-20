<script>
import MenuTopRightTitle from '../home/reusable/MenuTopRightTitle.vue'

export default {
	components: {
        MenuTopRightTitle,
        
        
    
    },

	props: ['showModal', 'isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 sm:flex p-5 flex-col sm:p-0 justify-center items-start shadow-lg sm:shadow-none"
	>

	
		<router-link
			to="#"
			aria-label="Profile"
			v-scroll-to="'#Profile'"

			>
			<MenuTopRightTitle title="- Profile"   :showHr="false"  /> 
			</router-link
		>

		<router-link
			to="#"
			aria-label="Ventures"
			v-scroll-to="'#Ventures'"

			>
			<MenuTopRightTitle title="- Ventures"   :showHr="false"  /> 
			</router-link
		>

		<router-link

to="#"
aria-label="Experiences"
v-scroll-to="'#Experiences'"
>
<MenuTopRightTitle title=" - Experiences" :showHr="false"  /> 
</router-link
>
		<router-link
			to="#"
			aria-label="Publications"
			v-scroll-to="'#Publications'"			>
			<MenuTopRightTitle title="- Publications"  :showHr="false"   /> 
			</router-link
		>

		
		<router-link
			to="#"
			aria-label="Get in Touch"
			v-scroll-to="'#GetInTouch'"			>
			<MenuTopRightTitle title="- Get In Touch"  :showHr="false"   /> 
			</router-link
		>

	
	
	

	


	

		
		<div
			class="border-t-2 pt-2 sm:pt-0 sm:border-t-0  border-primary-light"
		>
			<button
				class="font-general-medium  sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-xl px-4 py-2 mt-2 duration-500"
				@click="showModal()"
				aria-label="Hire Me Button"
			>
			Get in touch
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
