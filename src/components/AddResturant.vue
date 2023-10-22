<script>

import Header from './Header.vue';
import axios from 'axios';
export default{
    name :'AddResturant',
    components:{
        Header
    },data(){
return{
   Resturant:{
    name:'',
    location:'',
    contact:''
   }
}
    },
mounted(){
         let user = localStorage.getItem("user-info")
         if(!user){
            this.$router.push({name:'SignUp'})
         }
        
    },methods:{
      async  addResturant(){
let result= await axios.post("http://localhost:3000/resturants",{
    name: this.Resturant.name,
    location: this.Resturant.location,
    contact: this.Resturant.contact,
    id: 6
})
console.log("result"+result)
        }
    }
}
</script>

<template>
    <Header></Header>
<h1>Add resturants here!</h1>
<form class="formData">
    <input type="text" placeholder="Enter resturant name" required v-model="Resturant.name"/>
    <input type="text" placeholder="Enter contact number" required  v-model="Resturant.contact"/>
    <input placeholder="Enter address here" required  v-model="Resturant.location"/>
    <button v-on:click="addResturant">Update</button>
    </form>
</template>
<style>

input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    border: 1px solid rgb(97, 102, 104);;
    margin-right: auto;
    margin-left: auto;
}
button{
    width: 320px;
    height: 40px;
    border: 1ps solid rgb(97, 102, 104);
    color: #fff;
    background: rgb(97, 102, 104);
    cursor: pointer;
}
</style>