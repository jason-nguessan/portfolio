<script> 
import MenuTopRightTitle from '../../components/home/reusable/MenuTopRightTitle.vue';
import ProjectSingle from '../../components/home/reusable/ProjectSingle.vue';

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
		title: 'Lyricify',
		category: 'An AI powered platform that allows casual users to translate their favourite songs into lyrics. ',
		img: ('src/assets/photos/work/lyricify.png'),
            status: "In Progress"
                 },
             proj1 : {
                id: 1,
		title: 'MyBuddy',
		category: 'An app that would allow strangers to meet online.',
        //Peaked at over 50 users, and 1 thousand comments on instagram, the business taught me how to leverage digital marketing to drive clientelle. It is up for sale.
		img: ('src/assets/photos/work/mybuddymascot.png'),
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
		img: ('src/assets/photos/work/prepn-showcase.jpg'),
        href: null,
        status: "Discontinued"

                 }
            
                 

             
            
        }
    }
    }
       
 


}


</script>

<template>
    <div class="flex  flex-col lg:center-screen relative">
        
        <MenuTopRightTitle class="top-0 right-0 w-full absolute" title="Ventures" /> 
        <div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-11.5/12 mr-20 "
		>
			<ProjectSingle
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
        

    </div>
              
</template>

<style scoped>


</style>