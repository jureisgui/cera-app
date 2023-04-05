<template>
  <!-- <Success :success_prop="Log_in" class="success" @close_modal="" /> -->
</template>

<style scoped>
/* .success {
  position: absolute;
  top: 40%;
  left: 35%;
  right: 35%;
  bottom: 50%;
} */
</style>

<script setup>
import Success from '../components/Success.vue'
</script>

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
