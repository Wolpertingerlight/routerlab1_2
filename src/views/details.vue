<template> 
<!-- <h1>details {{this.$route.params.id}}</h1> -->
 <img :src="item.picture" class="Icon"> <span><h1>{{item.title}}</h1></span>
 
  <p class="Abstract">{{item.abstract}}</p>
  
  <div class="Types" >
       
        <div class="product-item" v-for="type in item.types" :key="type.name">
             <router-link :to="{name:'type',params:{typename:type.name}}">
            <img :src="type.picture">
            <div class="product-list">
                <h3>{{type.name}}</h3>
            </div>
         </router-link>
        </div>
       
        
 </div>

  


</template>

<script>
import items from "@/items.js"
export default {
  
  data(){
    return{
     
    }

  },
  components: {
  },
  props:{
        name:{
            type:String,
            required: true,

        }

    },
  computed:{
        item(){
            return items.pages.find(item=>item.name==this.name)
           
        }
    }


}
</script>




<style scoped>


 .Icon{
     width: 150px;
 }
 .Abstract{
    
     text-align:justify;
 }

 .product-item {
   width: 300px;
   text-align: center;
   margin: 0 auto;
   border-bottom: 2px solid #F5F5F5;
   background: white;
   
}

.product-item img {
   display: block;
   width: 100%;
}
.product-list {
   background: #fafafa;
   padding: 15px 0;
}
.product-list h3 {
   font-size: 18px;
   font-weight: 400;
   color: #444444;
   margin: 0 0 10px 0;
}
.Types{
     content: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

}
.product-item{
    margin:10px;
    
}
</style>