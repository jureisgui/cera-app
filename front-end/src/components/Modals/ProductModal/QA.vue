<template>
  <div class="question_card body_text">
    <div class="question_div">
      <!-- User initials -->
      <div class="img_container"></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        doloremque?
      </p>
    </div>
    <div class="answer_div">
      <!-- Seller pic or initials -->
      <div class="img_container"></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        doloremque?
      </p>
    </div>
  </div>
</template>

<style scoped>
.question_card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1em;
  border-bottom: 1px solid #000;
}
.question_div,
.answer_div {
  display: flex;
  gap: 20px;
  align-items: center;
}

.img_container {
  min-width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: aquamarine;
}
</style>

<script setup>
defineProps({
  question_card_prop: {
    type: String,
    required: true,
  },
});
</script>

// <script>
// export default {
//   data(){
//     return{
//     user_body_data: {
//         first_name: "",
//         last_name: "",
//         },    
//     logged_userID:'',
//     question_body_data:{
//       question_input:'',
//       product_id:'',
//     }
    
//         }   
//   },
//   methods: {
//     async fetch_single_user(userID){
//         const response = await fetch("http://localhost:4000/users/getuser/"+userID);
//         const received_data = await response.json();
//         this.user_body_data=received_data;
//     },
//     async create_question(){
//       const response = await fetch("http://localhost:4000/users/addquestion", {
//         method:"POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(this.question_body_data)
//       });
//         const received_data = await response.json();
//         }    
//     },
//   created(){
//     this.logged_userID=localStorage.getItem("logged_userID")
//     this.fetch_single_user(this.logged_userID)
//   },
//   computed:{
        
//     initials(){
//       return this.first_name[0]+this.first_name[0]
//     }
//   }
// }
  

// </script>