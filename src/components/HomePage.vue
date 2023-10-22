<script>

import Header from './Header.vue';
import axios from 'axios';
export default{
    name :'HomePage',
    
    components:{
        Header
    },
    data(){
return{
   resturant:{
    name:'',
    location:'',
    contact:''
   
}}
    },
  async  mounted(){
       
         let user = localStorage.getItem("user-info")
            if(!user)
           {this.$router.push({name:'SignUp'})}
           else{
            this.name=JSON.parse(user).name;
              let response =await axios.get("http://localhost:3000/resturants")
              console.log(response)
       this.resturant=response.data;
//this.Resturant=[...resturant]
        }
         }
         
    }
</script>

<template >
    <Header></Header>
<h1>Welcome {{name}} to home page</h1>
<table border="1">
    <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Contact</th>
        <th>Actions</th>
    </tr>
    <tr v-for="item in resturant"  :key=item.id>
 <td>{{ item.name }}</td>
 <td>{{ item.location }}</td>
 <td>{{ item.contact }}</td>
 <td><router-link :to='"/update/"+item.id'>Update</router-link></td>
    </tr>
</table>
</template>
<style>
table{
   
   margin-left: 400px;
}
td{
    width:160px;
    height: 60px;
}
</style>