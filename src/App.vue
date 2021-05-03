<template>
  <div id="nav">

    <ul class="topmenu">
      <li><a href="#">Категории<i class="fa fa-angle-down"></i></a>
        <ul class="submenu">
          <li v v-for="page in pages"
          :key="page.name"><router-link :to="{name:'details',params:{name:page.name}}">{{page.title}}</router-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/">Главная</router-link></li>
      <li> <router-link to="/about">О компании</router-link></li>
      <li><router-link to="/sale">Акции</router-link></li>
      <li><router-link to="/dishes">Бокалы</router-link></li>
    </ul>

  </div>
  <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c166d;
  
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #f7d82c;
  margin: 30px;
  display: block;
}

#nav a.router-link-exact-active {
  color: #c7870f;
}


nav {
  width: 660px;
  margin: 0 auto 30px;
}
ul {
  list-style: none; 
  margin: 0;
  padding: 0;
   background:rgba(62, 90, 180, 0.9);
}
.topmenu > li {
  display: inline-block;
  margin-right: 20px;
  position: relative;
  
}
.topmenu > li:last-child {
  margin-right: 0;
}
a {
  
  padding: 10px 15px;
  text-decoration: none;
  outline: none;
 

}
.fa {

  color: inherit;
  padding-left: 10px;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  
}

#nav .submenu {
  display: none;
  background:rgba(62, 90, 180, 0.9);
}
#nav ul li:hover .submenu {
  display: block;
}

p{
  text-align: justify;
   margin:0 20%;
}
</style>
