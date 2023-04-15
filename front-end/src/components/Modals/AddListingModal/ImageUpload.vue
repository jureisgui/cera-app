<template>
    <div class="Listing_Info_Container body_text">
        <div class="ListingInfoHeading">
            <h1 class="subheading_text">
                Upload Listing Images
                <hr />
            </h1>
        </div>
        <div class="product_image_container">
            <div class="ImageUploadtitle">
                <div>
                    <div>
                        <label for="">
                            <span style="color: red">*</span>Upload images of your product</label>
                    </div>
                    <div><label for="">(Enter the URL link to the image. Max 5 images)</label></div>
                </div>
            </div>
            <div class="product_image_input">
                <div class="input_container">
                    <input type="text" v-model="newImgUrl" />
                    <span @click="addImgbyUrl" class="material-symbols-outlined">add</span>
                </div>
            </div>
            <div class="images_container">
                <div v-for="(imgUrl, index) in Images" :key="index" class="imageCard"><img :src="imgUrl" alt="">
                    <span @click="removeImg(imgUrl)" class="material-symbols-outlined small_close_btn">close</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.images_container{
    margin: 2em 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.imageCard{
    height: 150px;
    width: 150px;
    position: relative;
}
  .Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.ImageUploadtitle {
  margin: 3em 0 2em;
  display: flex;
  justify-content: center;
  text-align: center;
}

.product_image_input {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
    background-color: #444739;
  margin: 20px 30%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.tag {
  position: relative;
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

input:focus {
  outline: none;
}

textarea::placeholder {
  color: #cacaca;
}

.small_close_btn.material-symbols-outlined {
  font-size: 0.8em;
  background-color: white;
  border: 1px solid #444739;
  color: #444739;
  position: absolute;
  right: -14px;
  top: -14px;
}

.small_close_btn.material-symbols-outlined:hover {
  transform: scale(1.1);
  background-color: #444739;
  color: white;
}
.material-symbols-outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border: #444739 solid 1px;
  color: #444739;
  border-radius: 50%;
  margin: 5px;
}

.material-symbols-outlined:hover {
  transform: scale(1.1);
}  

@media (max-width: 600px) {
      .Listing_Info_Container{
        margin-top: 0;
        border: solid 1px #444739;
        padding: 1em;
    }

    input{
 min-width: 200px;
  height: 60px;
  border-radius: 10px;
  padding: 10px;
}
.product_tag_input{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input_container{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 280px;
  }

    }
</style>

<script>
export default {
  data() {
    return {
      max_images: 5,
      newImgUrl: ''
    };
  },

  methods: {
    addImgbyUrl() {
      if (this.newImgUrl.trim() !== "") {
        if (this.Images.length < this.max_images) {
          // check if maximum number of tags is reached
          this.Images.push(this.newImgUrl.trim());
          this.newImgUrl = "";
        } else {
          alert("You have reached the maximum number of allowed images.");
        }
      }
    },

    removeImg(imgToRemove) {
      const index = this.Images.indexOf(imgToRemove);
      if (index !== -1) {
        // check if the img is found in the array
        this.Images.splice(index, 1); // remove the img from the array
      }
    }
  },
};
</script>

<script setup>
defineProps({
  Images: {
    type: Array,
    required: true
  },
});
</script>