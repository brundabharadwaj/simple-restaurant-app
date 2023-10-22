<script>
/* eslint-disable */
export default {
    name: "Login",
    data()
       { return {
            email: '',
            password: ''
        }
    },
    methods:{

        login() {
         let result = axios.get('http://localhost:3000/users?email='+this.email+'&password='+this.password)
        }
    }
    
}
</script>
<template>
    <div>
    <h1>Login page</h1>
    <input class="register" v-model="email" type="email" placeholder="Enter your e-mail"/>
        <input class="register" v-model="password" type="password" placeholder="Enter password"/>
        <button v-on:click="login" class="register button">Login</button></div>   
</template>
<style >

</style>
