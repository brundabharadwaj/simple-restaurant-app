<script>

import Header from './Header.vue';
import axios from 'axios';
export default{
    name :'UpdateResturant',
    components:{
        Header
    },
    data(){
return{
   Resturant:{
    name:'',
    location:'',
    contact:''
   }
}},
   async mounted(){
         let user = localStorage.getItem("user-info")
         if(!user){
            this.$router.push({name:'SignUp'})
         }
         const result = await axios.get("http://localhost:3000/resturants/"+this.$route.params.id);
         console.log("Result: "+result)
         this.Resturant=result.data
    }, methods:{
       async updateResturant(){
           let response= await axios.put("http://localhost:3000/resturants/"+this.$route.params.id,{
                name:this.Resturant.name,
                contact:this.Resturant.contact,
                location: this.Resturant.location


            })
            console.log("updated Data"+response.status);
        }
    }
}
</script>

<template>
    <Header></Header>
<h1>Update resturant details here</h1>
<form class="formData">
    <input type="text" placeholder="Enter resturant name" required v-model="Resturant.name"/>
    <input type="text" placeholder="Enter contact number" required  v-model="Resturant.contact"/>
    <input placeholder="Enter address here" required  v-model="Resturant.location"/>
    <button v-on:click="updateResturant">Update Resturant</button>
    </form>
</template>
<style>

</style>