<template>
    <section class="bg-key-Woodsmoke">
        <div class="container max-w-[1150px] h-[1308px] flex items-center justify-center">
            <div class="text-center ">
                <p class="text-key-FountainBlue">ABOUT THE NETWORK</p>
                <div class="prova text-[50px] flex justify-center gap-2 text-key-White">
                    <span class="">
                        Action &
                    </span>
                    <span class="bg-key-EbonyClay rounded flex justify-center px-3 py-0">
                        Projects
                    </span>
                </div>                 
                <ul class="flex justify-center text-[10px] text-key-White gap-[30px] mt-7 ">
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">ALL</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">ISTITUTIONSL</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">SOCIAL</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">EVENTS</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">INNOVATION</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">ENVIROMENT</a></li>
                    <li><a class="p-3 hover:bg-key-EbonyClay" href="">TECHNOLOGY</a></li>
                </ul>
                <div class="cards grid grid-cols-3 gap-4 mt-8">
                    <div v-for="(card, i) in cards" :key="i"
                    :class="`card w-[360px] h-[360px] text-key-White rounded-lg bg-contain bg-[url('${ card.src }')] relative`"       
                    >
                        <img class="brightness-50" :src="card.src" alt="">
                        <p class="absolute bottom-10 font-bold text-2xl ">{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            cards:[
                {
                    "src": "/src/assets/img/project-1.jpg",
                    "text": "Academic professional program in social media"
                },
                {
                    "src": "/src/assets/img/project-2.jpg",
                    "text": "President's speech at the annual meeting"
                },
                {
                    "src": "/src/assets/img/project-3.jpg",
                    "text": "International buisness trip in Shangai"
                },
                {
                    "src": "/src/assets/img/project-4.jpg",
                    "text": "Tecnology workshop with education theme"
                },
                {
                    "src": "/src/assets/img/project-5.jpg",
                    "text": "Donation of clothes and food to the partner NGO"
                },
                {
                    "src": "/src/assets/img/project-6.jpg",
                    "text": "Confraternization of the procurement team"
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.prova{
    font-weight: 900;
    font-family: 'Open Sans', sans-serif;
}
</style>