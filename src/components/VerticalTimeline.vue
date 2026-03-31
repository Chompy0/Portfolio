<template>

  <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

   
    <div 
      v-for="(section, index) in sections"
      :key="index"
      class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
    >
      
      <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      </div>
      
      <!-- Card -->
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-b to-blue-700 from-purple-900 p-4 rounded border border-slate-200 shadow">
        <div class="bg-gray-500 rounded border border-purple-900 border-2 ">
            <div class="flex mb-6 justify-between mx-auto">
              <div class="font-bold text-white">
                {{ section.title }}
              </div>
              <time class="text-white">
                {{ section.date }}
              </time>
            </div>
            <div class="p-1 ">
              <img v-if="section.img" :src="section.img" :alt="section.title" class="mx-auto object-contain border-black rounded" />
            </div>
            <br>
            <div class="">
              <text class="text-white"> {{ section.text }} </text>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>



<script>
import Aiw from '../assets/img/aiw.png';
import Nextbuy from '../assets/img/nextbuy.png';
import Tardis from '../assets/img/tardis.png';


export default {

  name: "VerticalTimeline",
  data() {
      return {
          sections : [
              { title: "Alice in wonderland", text: "Lightweight project giving out information about books listed in the Project Gutenberg library using natural language processing in python.",
              date : "March", img : Aiw },
              { title: "Nextbuy", text: "Data science project about analyzing and offering insights about orders made in supermarkets.",
              date : "March", img : Nextbuy },
              { title: "Tardis", text: "First Data science project that visualize different data about train delays from the SNCF delay dataset. A machine learning model predicting future delays is included.",
              date : "February", img : Tardis },
            ]
        };
    }
}
    
</script>