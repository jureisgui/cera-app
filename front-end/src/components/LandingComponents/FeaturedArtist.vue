<template>
  <div class="featured_artist_div">
    <div class="text_container fa_child">
        <div>
            <h1 class="heading_text">Featured Artist of the Week</h1>
            <h2 class="subheading_text">Tantri Mustika</h2>
        </div>
        <div>
            <p class="description body_text">Tantri Mustika makes ceramic homewares and functional sculptural pieces and is most commonly recognised for her colourful terrazzo inspired finishes and clay marbling. </p>
        </div>
        <div>
        <MainButton main_button_prop="View work" button_icon_prop="arrow_right_alt" class="outline_button" />
        </div>
    </div>
    <div class="img_container fa_child">
    <img src="@/assets/img/Person.png" alt="Artist pic">
    </div>
  </div>
</template>

<style scoped>
.featured_artist_div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 6em 10%;
}

.img_container {
    width: 100%;
    height: 350px;
    flex: 1.5;
}

img {
    border-radius: 10px 10px 10px 218px;
    object-position: 80% 40%;
}

.text_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.outline_button {
    background-color: #fff;
    color: #444739;
    border: 1px solid #444739;
}

.outline_button:hover {
    background-color: #444739;
    color: #fff;
}

@media (max-width: 32em) {
    .featured_artist_div {
        flex-direction: column-reverse;
    }

    .text_container {
        gap: 30px;
    }
}


</style>

<script setup>
import MainButton from '../Buttons/MainButton.vue'
</script>
