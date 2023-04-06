<template>
    <div class="hero_section">
       
        

    <div class="hero_heading_container">
    <div class="absolute_hero_heading_container">
    <div class="hero_heading">
    <h1 class="heading_text">A New Marketplace Platform for Pottery Enthusiasts</h1>
    </div>
    <div class="hero_cta_buttons">
    <div>Button</div>
    <div>Button</div>
    </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.hero_section{
    position: relative;
    background-image: url("../../assets/img/Landing.png");
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.hero_heading_container{
    position: absolute;
    margin: 0 10%;
    top: 250px;
    flex-direction: column;
    justify-content: space-between;
}
.hero_cta_buttons{
    display: flex;
    gap: 20px;}

.hero_heading{
    margin: 2em 4em; 
}
    
</style>
<script setup>


</script>