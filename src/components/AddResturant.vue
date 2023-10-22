<script>

import Header from './Header.vue';
export default{
    name :'AddResturant',
    components:{
        Header
    },
    mounted(){
         let user = localStorage.getItem("user-info")
         if(!user){
            this.$router.push({name:'SignUp'})
         }
         
    }
}
</script>

<template>
    <Header></Header>
<h1>Add Resturants Here!</h1>
</template>
<style>

</style>