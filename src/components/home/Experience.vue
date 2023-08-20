<script> 
import JobSection from '../../components/home/reusable/JobSection.vue';
import MenuTopRightTitle from '../../components/home/reusable/MenuTopRightTitle.vue';

export default{
    components: {
        JobSection,
        MenuTopRightTitle,
    
    },
       
    data(){
     return  {
        jobSection: {
            job1: {
                leftTopPart: "Cloud Engineer",
                rightTopPart: "@EDC - 2021-05 - present",
                description: "Export Development Canada (EDC) is a Crown corporation dedicated to helping Canadian companies of all sizes succeed on the world stage. They focalize on equiping businesses with with the tools they need – the trade knowledge, financial solutions, equity, insurance, and connections – to grow their business with confidence. With a core requirement for sustainable software, my responsibilities were the following:",
                applyPadding:  "mt-0",
                bulletPoints: [

                    "Deploying web applications that would be able to widsthand high traffic, have 99.9% availibility, as well as block nefarious hacking attempts.",
                    "Working with AI/ML teams in ensuring they have the right platform to build technologies that is not only secure, but enhances development.",
                    "Being the subject matter expert (SME) on cloud initiatives."
                ],
                rightTopPartHref: "https://www.edc.ca"



            },

            job2: {
                leftTopPart: "Web Developer",
                rightTopPart: "@Self Employed - 2019-05 - 2022-12",
                description: "From mutual contacts, worked in providing small businesses with websites in a customer focus approach. A few of my clients:",
                bulletPoints: [{
                
                 text:   "Conrad's barbershop wanted a nicer website, and a booking service - by the first month, conrad was reaching $900/month in revenue.",
                 href: "http://conradsbarbershop.ca"

                },

                {
                
                text:  "Margaret wanted a competitive edge against her client, by optimizing, she was able to see tangible results garnering over 1000 views within the first years",
                href: "https://margarethicks.com"

               },

               {
                
                text:  "Will, although a hardworker for 10+ years had no online presence, now able to explore other streams of marketing.",
                href: "http://willlandscaping.com"

               },
            
            ]
                    ,
            },

            job3: {
                leftTopPart: "Mobile DevOps Engineer",
                rightTopPart: "@Cya Live - 2020-04 - 2021-05",
                description: "Cya Live is a Dragons Den startup based in Toronto that focucalizes on providing virtual events live. Due to it being in the infancy stage (and still thriving), the small team bustles with creative ideas, and ways of adjusting to the market. My primary impact:",
                bulletPoints: [
                    "Directly working with the tech lead, and backend engineers in automating proccesses for App Delivery.",
                    "Contributing to nearly 35% of the codebase, fully knowing pivoting may be neccessary.",
                ],
                rightTopPartHref: "https://www.cya.live/info/"

            },




         
        },

        
     } 
       
    },


}


</script>

<template>
    <div class="">
        <MenuTopRightTitle  class="" title="Experiences"  /> 
        <JobSection v-for="info in jobSection " :key="info.leftTopPart" :rightTopPartHref="info.rightTopPartHref"  :leftTopPart="info.leftTopPart"  :bulletPoints="info.bulletPoints" :description="info.description" :rightTopPart="info.rightTopPart" :applyPadding="info.applyPadding"/> 

    </div>
              
</template>

<style scoped>


</style>