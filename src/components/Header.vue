<template>
 <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add"  >Add Resturant </router-link>
    <router-link to="update" >Update Resturant</router-link>
    <a href="#" v-on:click="logout">Logout</a>


 </div>
</template>
<script>

 /* eslint-disable */
export default{
 name :'Header',
 methods: {
logout(){
    localStorage.clear();
    this.$router.push({name: 'Login'})
}
 }
}
</script>
<style scoped>

.nav{
    background-color: black;
    overflow:  hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size:17px;
    margin-right: 5px;
    text-decoration: none;
}
.nav a:hover{
    background: #ddd;
    color: #333

}
</style>
