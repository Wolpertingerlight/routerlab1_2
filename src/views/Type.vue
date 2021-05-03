<template> 

 
     <h1>{{type.name}}</h1>
     <img :src="type.picture">
     <p>{{type.text}}</p>
     
 
  


</template>

<script>
import items from "@/items.js"
export default {
  
  props:{
        name:{
            type:String,
            required: true,

        },
        typename:{
            type:String,
            required:true,
        }

    },
  computed:{
        item(){
            return items.pages.find(item=>item.name==this.name)
           
        },
        type(){
            return this.item.types.find(type=>type.name==this.typename)
        }
    }


}
</script>