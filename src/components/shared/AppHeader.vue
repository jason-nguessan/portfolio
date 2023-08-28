<script>
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';

export default {
	components: {
		AppHeaderLinks,
		Button,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			count : 0,

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
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {

		updateTheme(theme) {
			this.theme = theme;
		},
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
		open(){
			this.isOpen = !this.isOpen
			const home = document.querySelector('#home')
			this.count += 1

			if(this.isOpen == true){
				console.log(home.classList)
				home.classList.add("blur-sm")
			}
			else{

				home.classList.remove("blur-sm")

			}
		}
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>

	<nav id="nav" class=" sm:hidden  sm:container sm:mx-auto  ">

		<div
		v-show="isOpen"
				@click="open"
				class="bg-filter v-5 bg-black bg-opacity-50 fixed inset-0 w-full h-full z-50"
			></div>
		
		<!-- Header start -->

		<div
			class=" z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					
				</div>
				
				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button
						@click=open 
						type="button"
						class="focus:outline-none "
						aria-label="Hamburger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-primary-light"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<Transition name="slide-fade" appear :key="count">

			<AppHeaderLinks  class=" absolute z-50 top-11 right-10 justify-center items-center w-full max-w-xs bg-primary-night-dark rounded-lg shadow-lg p-6" :showModal="false" :isOpen="isOpen" />
		</Transition>

			<!-- Header right section buttons -->
		</div>


	
	</nav>
</template>

<style scoped>



.slide-fade-enter-active {
	animation: fade-in 0.4s;
}

.slide-fade-leave-active {
	animation: fade-in 0.2s reverse;

	/* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */

}

@keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
