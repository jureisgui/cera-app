<template>
  <div class="categories-wrapper">
    <h1 class="heading_text">Categories</h1>
    <div class="categories_container">
      <div class="category-card">
        <img src="../assets/img/categories/all-products.jpg" alt="All products photo category" />
        <p class="body_text">All Products</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/kitchenware.jpeg" alt="Kichenware photo category" />
        <p class="body_text">Kitchenware</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/homeware.jpeg" alt="Homeware photo category" />
        <p class="body_text">Homeware</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/bathware.jpg" alt="Bathroom photo category" />
        <p class="body_text">Bathroom</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/garden.jpg" alt="Garden photo category" />
        <p class="body_text">Garden</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/sculpture.jpg" alt="Sculpture photo category" />
        <p class="body_text">Sculpture</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading_text {
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.categories_container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.category-card img {
  width: 170px;
  height: 170px;
  border-radius: 10px;
}

.category-card {
  text-align: center;
  padding-right: 0.7em;
  margin-bottom: 4.5em;
}

.categories-wrapper {
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: solid 1px;
}

@media (max-width: 32em) {
  .categories_container {
    justify-content: center;
  }
}
</style>

// <script>
// export default {
//   data(){ 
//     return{ 
//       categories:[
//         {
//           category: "All Products",
//           img:"https://i.ibb.co/85F8T79/all-products.jpg"
//         },
//         {
//           category: "Kitchenware",
//           img:"https://i.ibb.co/TtTr0wd/kitchenware.jpg"
//         },
//         {
//           category: "Homeware",
//           img:"https://i.ibb.co/MBr8Jx1/homeware.jpg"
//         },
//         {
//           category: "Bathroom",
//           img:"https://i.ibb.co/YTGyYwq/bathware.jpg"
//         },
//         {
//           category: "Garden",
//           img:"https://i.ibb.co/b1R6czy/garden.jpg"
//         },
//         {
//           category: "Sculpture",
//           img:"https://i.ibb.co/881CX06/sculpture.jpg"
//         }        
//       ],
//       // filter_a_to_k:true,
//       // filter_l_to_z:true 
//     //} // data variables end
//   }},
//   computed:{
//     sorted_filtered_people(){
//       return this.data_array.sort(  
//         //sorting beings
//         (personA,personB) => {
//           let sort_multiplier = 1;
//           if(this.sort_reverse)
//             sort_multiplier=-1;
//           if(personA.fname > personB.fname) 
//             return 1 * sort_multiplier;
//           if(personA.fname < personB.fname)  
//             return -1 * sort_multiplier;
//           return 0;  
//         }
//         //sorting ends
//       ).filter( 
//         //filter begins  
//       (person)=> (person.fname[0] <= 'K' && this.filter_a_to_k) || (person.fname[0] > 'K' && this.filter_l_to_z)  )
//       //filter ends
//     }},
//   } 

// </script>
