<script setup>
import Header from './components/Header.vue'
import LongButton from './components/Buttons/LongButton.vue'
import sort_by_button from './components/Buttons/Sortby.vue'
import TransparentHeader from './components/TransparentHeader.vue'
import herosection from './components/LandingComponents/HeroSection.vue'
</script>

<template>
    
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


<!-- Tin's Test Section -->
<!-- <TransparentHeader /> -->
<!--  -->

<!-- Matt's Test Section -->

<!--  -->

<!-- Julie's Test Section -->
<!-- <LongButton :long_button_text="Sign_up"/> -->

<!--  -->

<!-- Kyla's Test Section -->
<herosection/>
<!-- <sort_by_button/> -->
<!--  -->
 
<router-view></router-view>
</template>

<style scoped>

</style>

<script>
    export default{
        data(){
            return{
                Sign_up:'Sign Up',
                Log_in:'Log In'
            }
        }
    }
</script>
