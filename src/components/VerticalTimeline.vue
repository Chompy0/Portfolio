<template>

  <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent ">
    
    
    <hr class="absolute md:left-1/2 left-5 -translate-x-1/2 bg-purple-600  rounded-lg border-b animate-vertical-move size-16 z-0"/>


    <div 
      v-for="(section, index) in sections"
      :key="index"
      class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active z-10"
    >
      
      <button class="flex items-center justify-center w-10 h-10 rounded-full border-2 shadow shrink-0 bg-purple-500 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition duration-800 hover:bg-blue-800 hover:scale-125 "
      @click="activeSection = section"
      ></button>

      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-b to-blue-700 from-purple-900 p-4 rounded border border-white shadow">
        <div class="bg-gray-500/50  rounded border border-purple-900 border-2  ">
            <div class="flex mb-6 justify-between mx-auto font-bold text-white p-5">
              <h2 class="font-mono tracking-tight">
                {{ section.title }}
              </h2>
              <div>
                <time class="text-white font-mono tracking-tight">
                  {{ section.date }}
                </time>
              </div>
            </div>
            <div class="p-1">
              <button @click="activeSection = section">
                <img v-if="section.img" :src="section.img" :alt="section.title" class="mx-auto object-contain border-black rounded transition duration-800 hover:scale-90" 
                />
              </button>
            </div>
            <br>
            <div class="p-1">
              <text class="text-white font-mono tracking-tight"> {{ section.text }} </text>
            </div>
          </div>
        </div>
    </div>
    <div
      v-if="activeSection"
      @click.self="activeSection = null"
      class="fixed inset-0 flex items-center justify-center top-10 z-10"
    >
      
    <hr class=" lg:visible invisible bg-purple-600 p-6 rounded-lg translate border-r border-b  animate-horizontal-move-more-l h-1/4 z-10"></hr>
    <hr class=" lg:visible invisible bg-purple-600 p-6 rounded-lg translate  border-r border-b  animate-horizontal-move-l h-1/2 z-10"></hr>
      <div class="bg-purple-800 p-6 rounded-lg shadow-lg w-2/3 border-white border z-10">
        
        <h1 class=" font-mono tracking-tight mb-4">
          {{ activeSection.title }}
        </h1>

        <h2 class="mb-4 text-white font-mono tracking-tight"> Features </h2>

        <p class="mb-4 text-sm text-white font-mono tracking-tight">
          {{ activeSection.information }}
        </p>

        <h2 class=" mb-4 text-white font-mono tracking-tight"> Insights </h2>
        <p class="mb-4 text-sm  text-white font-mono tracking-tight">
          {{ activeSection.insight }}
        </p>

        <button
          @click="activeSection = null"
          class="px-4 py-2 bg-gradient-to-tl from-blue-500 to-purple-500 text-white rounded -skew-3"
        >
          Close
        </button>

      </div>
      <hr   class=" lg:visible invisible bg-purple-600 p-6 rounded-lg  border-l border-b  animate-horizontal-move-r h-1/2"></hr>
      <hr  class=" lg:visible invisible bg-purple-600 p-6  rounded-lg border-l border-b animate-horizontal-move-more-r h-1/4"></hr>
        
  
    
      </div>

  </div>
</template>



<script setup>
import { ref } from 'vue'

const activeSection = ref(null)

const sections = [
              {
              title: "Eliza",
              text: "Discord chatbot helping users schedule events, see their agendas and find free/busy timeslots using the Google calendar API. From Product design to promotion with a landing page.",
              date : "April",
              img : "eliza.png",
              information : "Our chatbot ScheduleBot implemented on Discord (switched from Teams due to technical constraints) can give events on your calendar based on a time range, tell you when you are free or busy and can direclty schedule meetings from the chat interface.",
              insight : "I learned that if you want to experiment new technologies or methods you don't know anything of, you ought to set a time limit in case of failure to be able to safely switch to traditional methods to finish the project in time. As you may have guessed, the final product was incomplete. I also learned how to implement a LLM through Python and HuggingFace and how to fine-tune it.",
              },
              {
              title: "Alice in wonderland",
              text: "Lightweight project giving out information about books listed in the Project Gutenberg library using natural language processing in python.",
              date : "March",
              img : '/aiw.png',
              information : "Using Streamlit, users can check numerous statistics of a specific book through a visual interface, such as the main topics of each chapter, summaries, characters and locations, lexical diversity measures, similar book titles and wordclouds containing the most used words.",
              insight : "In this project, I learned how to use NLP models for specific cases. On the same occasion, I dug deeper in the domain of lexical diversity measures and found out there are a lot of things I haven't discovered in this domain. I also tried out Streamlit as an interface and in little time I had gotten a satisfactory result."
              },
              { title: "Nextbuy",
              text: "Data science project about analyzing and offering insights about orders made in supermarkets.",
              date : "March",
              img : '/nextbuy.png',
              information : "Business insights can be easily discovered thorugh the graphs and metrics displayed on the Streamlit. Showcasing through multiple angles potential areas of interests either with structured data or unstructured data using LM.",
              insight : "As this project was similar to a previous one we had done, we worked faster more efficiently using the same tools and thus were able to produce more. We also focused more on the documentation and presentation side of the project, as it is a non-negligeable aspect of a product. " },
              { title: "Tardis",
              text: "First Data science project that visualize different data about train delays from the SNCF delay dataset. A machine learning model predicting future delays is included.",
              date : "February",
              img : '/tardis.png',
              information : "Using Jupyter notebooks, pandas and sklearn libraries, we used Streamlit to showcase insight graphs on train delays ( by stations, average delay...). We also built a prediction model for future trains delays. ",
              insight : "As it was the first project in the Data & AI theme, it was more about experimentation than results that mattered. Working for the first time with a large dataset, we had to think on how to deal with loading times, aberrant data, inaccurate models. We succeeded at everything except the inaccuracy of our model. " },
              { title: "YOWL",
              text: "Product design project about prototyping a mobile social application aiming to gather photos in one place.",
              date : "January",
              img : "yowl.png",
              information : "As the goal of this project was more on the process of designing a product, only documentation and a frontend is available. On the documentation paart, we showcased our researchs which goes from defining a target to drawing a mockup to visualize the future product.",
              insight : "On the coding aspect of the project, we took an opportunity to explore mobile app development with React native using Expo Go. On the research aspect, we experimented agile methods to quickly define a product solving a problem. We used Figma for our wireframe/mockup/prototype. " },
]
</script>   