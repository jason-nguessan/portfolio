<script>
import Button from '../reusable/Button.vue';
import HireMeModal from '../HireMeModal.vue';
import MenuTopRightTitle from '../../components/home/reusable/MenuTopRightTitle.vue';

export default {
    components: {
        HireMeModal,
        Button,
		MenuTopRightTitle
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
  
    <div class="z-10  mt-5">
     
		<MenuTopRightTitle  class="" title="Get in Touch"  /> 

		
       
      
	

      <div
				class="sm:flex justify-between flex-col md:flex-row mb-5"
			>
				<!-- Hire me button -->
				<div id="GetInTouch" class="w-full px-5  ">
					<Button
						title="Get in Touch"
						class=" text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md w-full px-5 py-2.5 duration-300"
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



</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>