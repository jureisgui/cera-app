<template>
  <section>
    <h1>Why sell on cera?</h1>

    <div class="section_container">
      <div class="section1">
        <h1>Connect with the Pottery community</h1>
        <p>
          Connect with other Pottery enthusiasts in the community. Ask and
          answer questions or flick the seller a message.
        </p>
      </div>

      <div class="section2">
        <h1>Create unlimited listings in your shop!</h1>
        <p>
          Your Cera shop can have unlimited listings completely FREE! Only a %5
          fee applies to every sale.
        </p>
      </div>

      <div class="section3">
        <h1>Promote your work in a niche environment</h1>
        <p>
          Cera allows you to put your work in front of a niche audience, meaning
          its easier to find buyers!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: aqua;
  height: 600px;
}

.section_container {
  height: 400px;
  background-color: khaki;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section1 {
  background-color: rgb(255, 102, 0);
  border-left: 2px solid rgb(0, 0, 0);
  flex: 1;
}

.section2 {
  background-color: blue;

  flex: 1;
}
.section3 {
  background-color: rgb(0, 255, 153);
  flex: 1;
}
</style>

<script setup>
</script>