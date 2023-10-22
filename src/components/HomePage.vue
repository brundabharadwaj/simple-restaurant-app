<script>

import Header from './Header.vue';
export default{
    name :'HomePage',
    components:{
        Header
    },
    data(){
            return {name:""}
    },
    mounted(){
       
         let user = localStorage.getItem("user-info")
            if(!user)
           {this.$router.push({name:'SignUp'})}
           else{
            this.name=JSON.parse(user).name;
        }
         }
         
    }
</script>

<template >
    <Header></Header>
<h1>Welcome {{name}} to home page</h1>
</template>
<style>

</style>