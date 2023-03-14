<template>
   <HeaderInfo />
   <section class="brightness-5 bg-[url('/src/assets/img/bg-4.jpg')] relative">
    <HeaderNavBar class="absolute" />
    <div class="container h-[862px] max-w-[1150px] flex items-center content-center">
        <div class=" flex-col">
            <p class="text-key-FountainBlue my-6">HUMAN RESOURCE</p>
            <div class="relative">
                <h1 class="relative prova font-serif text-[90px] leading-[90px] text-key-White my-6 z-10">
                    Get More <br>
                    Productivity
                </h1>
                <div 
                class="
                absolute bottom-1 left-1.5 z-0
                h-[45px] w-[520px] bg-key-Atoll rounded-md"
                ></div>
            </div>
            <p class="text-key-SilverSand my-6">
                Planning, recruitment and selection process and <br>
                performance evaluation of employees.
            </p>
            <div class="option flex gap-6 text-xs text-key-GrayNurse my-6">
                <a class="bg-key-FountainBlue rounded-md px-6 py-2 text-sm" href="">GET IN TOUCH</a>
                <a class="border-[1px] border-key-FountainBlue rounded-md px-6 py-2 text-sm" href="">READ MORE</a>
            </div>
        </div>
    </div>
   </section>
</template>
<script>
import HeaderInfo from './HeaderInfo.vue';
import HeaderNavBar from './HeaderNavBar.vue';
export default {
    components:{
        HeaderInfo,
        HeaderNavBar
    }
}
</script>
<style scoped lang="scss">
.prova{
    font-weight: 900;
    font-family: 'Open Sans', sans-serif;
}
</style>