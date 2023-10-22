<script>

import Header from './Header.vue';
export default{
    name :'UpdateResturant',
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
<h1>Update resturant details here</h1>
</template>
<style>

</style>