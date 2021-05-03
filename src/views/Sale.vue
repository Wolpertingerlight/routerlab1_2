<template>
    <h1>Актуальные акции</h1>
   <router-link :to="{name:'details',params:{name:'wine'}}">
            <img src="http://кафе-вечера.рф/images/actions/IMG_6079.JPG">
        </router-link>
    <router-link :to="{name:'details',params:{name:'beer'}}">
            <img src="http://кафе-вечера.рф/images/actions/af.jpg">
    </router-link>
</template>

<script>
import items from "@/items.js"
export default {
  name: 'Sale',
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
 img{
     width:500px;
     margin: 10px;
 }
</style>>
