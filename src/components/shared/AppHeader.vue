<script>
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';
import HireMeModal from '../HireMeModal.vue';

export default {
    components: {
        AppHeaderLinks,
        HireMeModal,
        Button
    },
    methods : {
      showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
    },
    data(){
      return {
        isOpen: false,
        modal: false,

        categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
      }  
    },

}
</script>
<template>
  
<nav id="nav" class="sm:container sm:mx-auto">
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
     
     
		
        <div class="flex justify-between items-center px-4 sm:px-0">
	
        </div>
		<img src="@/assets/rocket.png"
		class="w-20 ">
      
	
      <AppHeaderLinks class='md:gap-8'  :isOpen="isOpen" :showModal="showModal" ></AppHeaderLinks>

      <div
				class="hidden sm:flex justify-between flex-col md:flex-row"
			>
				<!-- Hire me button -->
				<div class="hidden md:block">
					<Button
						title="Get in Touch"
						class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="showModal()"
						aria-label="Get in Touch"
					/>
				</div>

	
			</div>
      <HireMeModal
			:showModal="showModal"
			:modal="modal"
			:categories="categories"
			aria-modal="Hire Me Modal"
		/>
        


    </div>


</nav>

</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>