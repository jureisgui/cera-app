<script setup>
import ListingsButtons from '@/components/Buttons/ListingEditDeleteButton.vue'

</script>

<template>
        <div v-for="listing in MyListingsArray" class="product-wrapper">
            <img :src="listing.product_images[0]" alt="Product Thumbnail">
            <ListingsButtons />
        </div>                   
</template>

<style scoped>

.product-wrapper{
    position:relative;
    width: 210px;
    height: 175px;
}
   
</style>

<script>
export default {
  data() {
    return {
        logged_userID:'',
        MyListingsArray: []
        }   
    },
    methods: {
        async fetch_single_user(userID){
            const response = await fetch("http://localhost:4000/users/getuser/"+userID);
            const received_data = await response.json();
            this.user_body_data=received_data;
        },
        async fetch_single_listing(listingID) {
            const response = await fetch("http://localhost:4000//getlisting/"+listingID);
            const received_data = await response.json();
            this.MyListingsArray = received_data;
            console.log(received_data);
        },  
    },
    created(){
        this.logged_userID=localStorage.getItem("logged_userID")
        this.fetch_single_user(this.logged_userID)
    }
    
}
</script>

