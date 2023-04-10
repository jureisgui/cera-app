<template>
  <div class="Listing_Info_Container body_text">
    <div class="ListingInfoHeading">
      <h1 class="subheading_text">Product Tags<hr/></h1>
    </div>

    <div class="product_tag_container">
    
        <div class="tags_title">
            <div>
                <div><label for=""> <span style="color: red;">*</span>Write a description for your listing.</label></div>
                <div><label for="">(You may add up to 10 tags)</label></div>
            </div>
        </div>

        <div class="product_tag_input">
          <div class="input_container">
           <input type="text" v-model="newTag"/>
           <span @click="addTag" class="material-symbols-outlined">add</span>
          </div> 
        </div>

    <div class="tags_container">
        <div class="row">
          <div v-for="(tag, index) in tags_array" :key="index" class="tag">{{ tag }}</div>
      </div>
    </div>

    </div>
  </div>
</template>

<style scoped>

.Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.tags_title{
   margin: 3em 0 2em;
    display: flex;
    justify-content: center;
    text-align: center;
}

.product_tag_input{
    display: flex;
    align-items: center;
    justify-content: center;
}

.tag_container{
  display: flex;
}

.row{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag{
  display: flex;
  align-items: center;
  justify-content: center;
  border: #444739 solid 1px;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  margin: 10px;
}

.input_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}

input {
  display: flex;
  min-width: 300px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

input:focus{
    outline: none;
}

textarea::placeholder {
  color: #cacaca;
}
.material-symbols-outlined{
  padding: 5px;
  cursor: pointer;
}

.material-symbols-outlined:hover{
  transform: scale(1.2);

}

</style>

<script>
export default {
  data() {
    return {
      tags_array:[],
      max_tags: 10,
    }  
  },
  

  methods: {
  addTag() {
    if (this.newTag.trim() !== '') {
        if (this.tags_array.length < this.max_tags) { // check if maximum number of tags is reached
          this.tags_array.push(this.newTag.trim());
          this.newTag = '';
        } else {
          alert('You have reached the maximum number of allowed tags.');}}
      }
      }
}

</script>


<script setup>
</script>
