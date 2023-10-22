<template>
    <img src="../assets/resturant-logo.png" class="logo"/>
    <div >
        <input  class="register" v-model="name" type="text" placeholder="Enter your name"/>
        <input class="register" v-model="email" type="email" placeholder="Enter your e-mail"/>
        <input class="register" v-model="password" type="password" placeholder="Enter password"/>
        <button v-on:click="signUp" class="register button">Sign Up</button>
        <p><router-link to="/login" >Login</router-link></p>
    </div>
</template>
<script>
import axios from 'axios'; // Ensure you have imported axios
import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
           let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password,
                name: this.name,
                id: uuidv4()
            });
            if (result.status == 201)
        {        alert("successful");
            localStorage.setItem("user-info", JSON.stringify(result.data));
           this.$router.push({name: 'HomePage'})
        } else if(result.status==500)
        {
            alert("Error during sign up. Please try again")
        }
           
        }
    },
    mounted(){
         let user = localStorage.getItem("user-info")
         console.log("user info"+user)
         if(user){
this.$router.push({name : 'HomePage'})
         }

    }
}
</script>

<style >
.logo{
    width: 100px;
}
.register{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    border: 1px solid rgb(97, 102, 104);;
    margin-right: auto;
    margin-left: auto;
}
.button{
    width: 320px;
    height: 40px;
    border: 1ps solid rgb(97, 102, 104);
    color: #fff;
    background: rgb(97, 102, 104);
    cursor: pointer;
}
</style>
