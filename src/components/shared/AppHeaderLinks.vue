<script>
export default {
	props: ['showModal', 'isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
	>
		<router-link
			to="/home"
			class="font-general-medium block text-left text-lg font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Home"
			>Home</router-link
		>
	

		<router-link
			to="/experience"
			class="font-general-medium block text-left text-lg font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="experience"
			>Experience</router-link
		>

		<router-link
			to="/Ventures"
			class="font-general-medium block text-left text-lg font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="experience"
			>Ventures</router-link
		>

		<router-link
			to="/community"
			class="font-general-medium block text-left text-lg font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="community"
			>Community</router-link
		>
		<router-link
			to="/qualifications"
			class="font-general-medium block text-left text-lg font-medium text-ternary-light hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="qualifications"
			>Qualifications</router-link
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
