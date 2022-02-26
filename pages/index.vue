<template>
  <div>
   <Header />
   <Event />
   <Responsibility />
   <Mission />  
   <News />
   <Counter />
   <Gallery />  
    
  </div>
</template>
 <script>
 import Topnavbar from "~/components/Topnavbar";
 import Header from "~/components/Header";
 import Event from "~/components/Event";
 import Responsibility from "~/components/Responsibility";
 import Mission from "~/components/Mission";
 import News from "~/components/News";
 import Counter from "~/components/Counter";
 import Gallery from "~/components/Gallery";
 import Newsletter from "~/components/Newsletter";
 import Footer from "~/components/Footer";
export default {
  name:'index',
  components:{
    Topnavbar,
    Header,
    Event,
    Responsibility,
    Mission,
    News,
    Gallery,
    Newsletter,
    Footer,
  },
  mounted(){
    
  }

}
</script>


