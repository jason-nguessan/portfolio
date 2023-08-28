<script>
import MenuTopRightTitle from '../home/reusable/MenuTopRightTitle.vue'

export default {
	components: {
        MenuTopRightTitle,
        
        
    
    },
	props: {
		isOpen: {
			type: Boolean,
			default: false
		},
		showDash: {
			type: Boolean,
			default: false
		},
		showModal: {
			type: Boolean,
			default: false
		},
		
	}

};
</script>

<template>
	<!-- Header links -->
	<div
		v-show="isOpen == true"
		class=" right-10   m-0 sm:ml-4 sm:flex p-10 flex-col sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
	>

	
		<router-link
			to="#"
			aria-label="Profile"
			v-scroll-to="'#Profile'"
			>
			<MenuTopRightTitle class=""  :position="showDash == true ? 'end' : 'start' " :title="(showDash == true ? '-' : '') +  ' Profile'"   :showHr="false"  /> 
			</router-link
		>

		<router-link
			to="#"
			aria-label="Ventures"
			v-scroll-to="'#Ventures'"

			>
			<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' "  :title="(showDash == true ? '-' : '') +  ' Ventures'"  :showHr="false"  /> 
			</router-link
		>

		<router-link

to="#"
aria-label="Experiences"
v-scroll-to="'#Experiences'"
>
<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' " :title="(showDash == true ? '-' : '') +  ' Experiences'"  :showHr="false"  /> 
</router-link
>
		<router-link
			to="#"
			aria-label="Publications"
			v-scroll-to="'#Publications'"			>
			<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' " :title="(showDash == true ? '-' : '') +  ' Publications'"   :showHr="false"   /> 
			</router-link
		>

		
		<router-link
			to="#"
			aria-label="Get in Touch"
			v-scroll-to="'#GetInTouch'"			>
			<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' "  :title="(showDash == true ? '-' : '') +  ' Get In Touch'"    :showHr="false"   /> 
			</router-link
		>

	
	
	

	


	

		
	
	</div>
</template>

<style lang="scss" scoped></style>
