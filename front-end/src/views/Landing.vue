<template>
  <Success :success_prop="Log_in" class="success" />
</template>

<style scoped>
.success {
  position: absolute;
  top: 40%;
  left: 40%;
  right: 40%;
  bottom: 50%;
}
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
