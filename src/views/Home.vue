<template>
  <div class="home">
   <h1>Категории</h1>
    <div class="Categories">
      <div v-for="page in pages" 
        v-bind:key="page.name"
         class="CategoryPan">
          
            <router-link :to="{name:'details',params:{name:page.name}}">
            <img :src="page.picture"> <h1 class="CatNm"> {{page.title}}</h1>
          
          </router-link>
      </div>
    </div>
   
  </div>
</template>



<script>
import items from "@/items.js"
export default {
  name: 'Home',
  data(){
    return{
      pages:items.pages
    }

  },
  components: {
  }

}
</script>

<style>
 
  .Categories{
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex:3;
   
    
    

  }
  .CategoryPan{
    width: 30%;
    
    margin: 1% 0 ;
    padding:15px;
    background:rgba(62, 90, 180, 0.7);
    content: inherit;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    
    
  }
  .CategoryPan img{
   width:200px;
  }
  
  
  .CatNm {
    text-decoration: none;
    color: lemonchiffon;
    font-size: 45px;
    
  }
  


</style>
