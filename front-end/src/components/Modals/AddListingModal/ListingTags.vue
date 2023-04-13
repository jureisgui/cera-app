<template>
  <div class="Listing_Info_Container body_text">
    <div class="ListingInfoHeading">
      <h1 class="subheading_text">
        Product Tags
        <hr />
      </h1>
    </div>

    <div class="product_tag_container">
      <div class="tags_title">
        <div>
          <div>
            <label for="">
              <span style="color: red">*</span>Write a description for your
              listing.</label
            >
          </div>
          <div><label for="">(You may add up to 10 tags)</label></div>
        </div>
      </div>

      <div class="product_tag_input">
        <div class="input_container">
          <input type="text" v-model="newTag" />
          <span @click="addTag" class="material-symbols-outlined">add</span>
        </div>
      </div>

      <div class="tags_container">
        <div class="row">
          <div v-for="(tag, index) in Tags" :key="index" class="tag">
            {{ tag }}
            <span @click="removeTag(tag)" class="material-symbols-outlined small_close_btn">close</span>
          </div>
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

.tags_title {
  margin: 3em 0 2em;
  display: flex;
  justify-content: center;
  text-align: center;
}

.product_tag_input {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
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
</style>
<script>
export default {
  data() {
    return {
      max_tags: 10,
      newTag: ''
    };
  },

  methods: {
    addTag() {
      if (this.newTag.trim() !== "") {
        if (this.Tags.length < this.max_tags) {
          // check if maximum number of tags is reached
          this.Tags.push(this.newTag.trim());
          this.newTag = "";
        } else {
          alert("You have reached the maximum number of allowed tags.");
        }
      }
    },

    removeTag(tagToRemove) {
      const index = this.Tags.indexOf(tagToRemove);
      if (index !== -1) {
        // check if the tag is found in the array
        this.Tags.splice(index, 1); // remove the tag from the array
      }
    }
  },
};
</script>


<script setup>
defineProps({
  Tags: {
    type: Array,
    required: true
  },
});
</script>
