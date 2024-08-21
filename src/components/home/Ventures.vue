<script> 
import MenuTopRightTitle from '../../components/home/reusable/MenuTopRightTitle.vue';
import ProjectSingle from '../../components/home/reusable/ProjectSingle.vue';
import Img_Prepn from '@/assets/photos/work/prepn-showcase.jpg'
import Img_Buddy from '@/assets/photos/work/mybuddymascot.png'
import Img_Lyricify from '@/assets/photos/work/lyricify.png'


export default{
    name: "Ventures",
    components: {    
        MenuTopRightTitle,
        ProjectSingle
    },
    data: () => {
        return {
            projects: {

                proj0 : {
                id: 0,
		title: 'Leap',
		category: 'A SaaS Product that pairs clients with coaches.',
		img: Img_Lyricify,
            status: "In Progress"
                 },
             proj1 : {
                id: 1,
		title: 'MyBuddy',
		category: 'An app that would allow strangers to meet online.',
        //Peaked at over 50 users, and 1 thousand comments on instagram, the business taught me how to leverage digital marketing to drive clientelle. It is up for sale.
		img:  Img_Buddy,
        href: "https://jason-nguessan.github.io/MyBuddyWeb/",
        status: "For Sale"


                 },

        //          proj9 : {
        //         id: 2,
		// title: 'MyBuddy',
		// category: 'An app that would allow strangersstrangersstrangersstrangersstrangersstrangers to meet online.',
        // //Peaked at over 50 users, and 1 thousand comments on instagram, the business taught me how to leverage digital marketing to drive clientelle. It is up for sale.
		// img: ('src/assets/photos/work/mybuddymascot.png'),
        // href: "https://jason-nguessan.github.io/MyBuddyWeb/",
        // status: "For Sale"


        //          },

            proj2 : {
                id: 2,
		title: 'Prepn',
		category: 'A simple meal kit app for school campuses made during the infancy of the grocery delivery boom.',
		img: Img_Prepn,
        
        href: null,
        status: "Discontinued"

                 }
            
                 

             
            
        }
    }
    }
       
 


}


</script>

<!-- 
<template>
    <div class="flex  flex-col lg:center-screen lg:relative lg:w-full  ">
        
        <MenuTopRightTitle class="mb-auto lg:top-0 lg:right-0 lg:absolute" title="Ventures" /> 


        <div class="lg:inner-spacing bg-white"> 


        <div
			class="grid grid-cols-1 lg:grid-cols-3  lg:w-11.5/12  md:w-8/12 "
		>
			<ProjectSingle
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
                </div>


    </div>
              
</template> -->


<template>
    <div class="flex  flex-col lg:center-screen lg:relative ">
        
        <MenuTopRightTitle class="mb-auto lg:top-0 lg:right-0 lg:absolute" title="Ventures" /> 


        <div class="lg:inner-spacing md:items-center md:flex md:flex-col  "> 


        <div
			class="grid grid-cols-1 sm:grid-cols-1 md:w-8/12 md:gap-10 lg:gap-0 items-center lg:grid-cols-3  lg:w-full "
		>
			<ProjectSingle
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
                </div>


    </div>
              
</template>

<style scoped>


</style>
