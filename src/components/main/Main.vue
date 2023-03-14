<template>
    <MainInfo />
    <MainCompany />
    <MainCards />
</template>
<script>
import MainInfo from './MainInfo.vue';
import MainCompany from './MainCompany.vue';
import MainCards from './MainCards.vue';
import MainProcess from './MainProcess.vue';
import MainFeedback from './MainFeedback.vue';
export default {
    components:{
        MainInfo,
        MainCompany,
        MainCards,
        MainProcess,
        MainFeedback
    }
    
}
</script>
<style scoped lang="scss">
    
</style>