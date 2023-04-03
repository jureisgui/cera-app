<template>
    <footer>
        <div>
            <img src="../assets/img/clay_logo.svg" alt="Cera logo">
        </div>
        <div class="footer-columns body_text">
            <router-link to='/shop'>Shop</router-link>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="footer-columns body_text">
            <a href="#">Ts &#38; Cs</a>
            <a href="#">Policies</a>
            <a href="#">Support</a>
        </div>
        <div class="footer-columns">
            <span>Download app button</span>
            <span>Download app button</span>     
        </div>
        <div class="social-icons">
            <img src="../assets/icons/facebook.svg" alt="Facebook icon">
            <img src="../assets/icons/instagram.svg" alt="Instagram icon">
            <img src="../assets/icons/tiktok.svg" alt="Tiktok icon"> 
        </div>
    </footer>
</template>


<style scoped>
    footer{
        display: flex;
        background-color: #444739;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .footer-columns{
        display: flex;
        flex-direction: column;
    }

    .social-icons{
        display: flex;
        height: 30px;
        width: 30px;
    }

    a{
        text-decoration: none;
        color: #FFF;
    }
    
</style>

<script setup>

</script>


