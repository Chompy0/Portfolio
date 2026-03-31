<template>
  <div class="bg-gray-800 p-4">
    <div class=" w-full">
      <h1>Skills</h1>
    </div>
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      <div
        v-for="(skill, index) in skills"
        :key="index"
          class="bg-gray-600 text-black p-4 rounded shadow text-center flex flex-col "
        >
        <div class="flex flex-row justify-evenly  ">
          <div>
            <img v-if="skill.img" :src="skill.img" :alt="skill.text" class="h-12 w-16 object-contain" />
          </div>
          <h2 class="font-bold text-white flex items-center justify-center"> {{ skill.text }} </h2>
          
        </div>
        <br>
          <div class="w-full bg-gray-300 rounded-full h-4">
            <div class="bg-gradient-to-r from-purple-900 h-4 rounded-full" :style="{width: skill.score}" :class="skill.color"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CssSvg from '../assets/img/css.svg';
import HtmlSvg from '../assets/img/html.svg';
import JsSvg from '../assets/img/js.svg';

export default {

  name: "SkillSection",
  data() {  
    return {
      skills: [
        { text: "HTML",img : HtmlSvg, score : "60%" , color : "to-red-500"},
        { text: "CSS",img : CssSvg, score :  "70%", color : "to-blue-500"},
        { text: "JS", img : JsSvg ,score : "70%", color : "to-yellow-500" },
      ]
    };
  }
};
</script>