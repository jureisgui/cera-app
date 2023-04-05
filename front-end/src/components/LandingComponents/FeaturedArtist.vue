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
        <p class="body_text">button</p>
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
    margin: 2em 10%;
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

@media (max-width: 32em) {
    .featured_artist_div {
        flex-direction: column-reverse;
    }

    .text_container {
        gap: 30px;
    }
}


</style>

<script setup></script>
