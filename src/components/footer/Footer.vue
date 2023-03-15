<template>
    <section class="h-[850px] flex items-center bg-key-Woodsmoke">
        <div class="container max-w-[1150px]">
            <div class="flex text-key-White">
                <div class="w-3/5">
                    <div class="flex-col">
                        <p class="text-key-FountainBlue my-6">ABOUT THE NETWORK</p>
                        <div class="relative">
                            <div class="relative prova text-[60px] leading-[90px] flex gap-2 my-6 z-10">
                                <span class="">
                                    Get in
                                </span>
                                <span class="bg-key-EbonyClay rounded flex justify-center px-3">
                                    Touch
                                </span>
                            </div>
                        </div>
                        <p class="text-key-SilverSand my-6">
                            Planning, recruitment and selection process 
                        </p>
                        <div class="input">
                            <div class="flex gap-4">
                                <input type="name" class="p-[10px] bg-key-Shark w-1/2" id="exampleFormControlInput1" placeholder="name">
                                <input type="email" class="p-[10px] bg-key-Shark w-1/2" id="exampleFormControlInput1" placeholder="email">
                            </div>
                            <div class="flex gap-4 my-5">
                                <input type="phone" class="p-[10px] bg-key-Shark w-1/2" id="exampleFormControlInput1" placeholder="phone">
                                <select class="p-[10px] bg-key-Shark w-1/2" id="inputGroupSelect01">
                                  <option selected>more info</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <textarea class="p-[10px] w-[100%] h-[150px] bg-key-Shark" placeholder="message" aria-label="With textarea"></textarea>
                            </div>
                            <div class="mt-5">
                                <a class=" bg-key-FountainBlue rounded-md px-6 py-2 text-sm" href="">SEND</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/5 p-14">
                    <ul class="list">
                        <li>
                            <a class="font-bold text-2xl" href="">Example inc.</a>
                        </li>
                        <li>
                            <a class="" href="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </li>
                        <li>
                            <a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </li>
                        <li>
                            <a class=" text-key-Eim flex items-center gap-3" href="">
                                <font-awesome-icon class="p-2 bg-key-EbonyClay rounded-full" icon="fa-solid fa-phone" />
                                +1(305)1234-5678
                            </a>
                        </li>
                        <li>
                            <a class=" text-key-Eim flex items-center gap-3" href="">
                                <font-awesome-icon class="p-2 bg-key-EbonyClay rounded-full" icon="fa-solid fa-envelope" />
                                hello@example.com
                            </a>
                        </li>
                        <li>
                            <a class=" text-key-Eim flex items-center gap-3" href="">
                                <font-awesome-icon class="p-2 bg-key-EbonyClay rounded-full" icon="fa-solid fa-location-dot" />
                                Main Avenue, 987
                            </a>
                        </li>
                        <li class="">
                            <a class="border-[1px] border-key-FountainBlue text-key-Eim rounded-md px-6 py-2 text-sm" href="">READ MORE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.prova{
    font-weight: 900;
    font-family: 'Open Sans', sans-serif;
}
.list li{
    margin-bottom: 20px;
}
</style>