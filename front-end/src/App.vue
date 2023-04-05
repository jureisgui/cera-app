<script setup>

import Categories from './components/Categories.vue'
import Header from './components/Header.vue'
import LongButton from './components/Buttons/LongButton.vue'
import sort_by_button from './components/Buttons/Sortby.vue'
import TransparentHeader from './components/TransparentHeader.vue'
import Success from './components/Success.vue'

</script>

<template>
    
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


<!-- Tin's Test Section -->
<Header />
<Success :success_prop="Log_in" class="success" @close_modal="" />
<!--  -->

<!-- Matt's Test Section -->

<!--  -->

<!-- Julie's Test Section -->

<!--  -->

<!-- Kyla's Test Section -->

<!--  -->
 
<router-view></router-view>
</template>

<style scoped>
.success {
  position: absolute;
  top: 40%;
  left: 35%;
  right: 35%;
  bottom: 50%;
}
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
