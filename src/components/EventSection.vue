<template>
  <div class="bg-gray-800 p-4 z-20">
    <div class="w-full">
      <h1>{{ title }}</h1>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="bg-gray-700 text-black p-4 rounded shadow border-y-2 border-indigo-800 text-center flex flex-col"
      >
        <h2
          class="font-bold text-white flex items-center justify-center font-mono tracking-tight"
        >
          {{ event.title }}
        </h2>
        <div class="w-full object-fill">
          <button
            class="flex items-center justify-center w-full transition  duration-800 hover:scale-90"
          >
            <img
              v-if="event.img"
              :src="event.img"
              :alt="event.text"
              class="h-96 w-full object-scale-down"
              @click="activeSection = event"
            />
          </button>
        </div>
        <div>
          <p class="text-white text-sm p-4 font-mono tracking-tight">
            {{ event.text }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        v-if="activeSection"
        @click.self="activeSection = null"
        class=" fixed inset-0 flex items-center justify-center z-10 top-10 row"
      >

      <hr class=" lg:visible invisible bg-purple-600 p-6 rounded-lg translate border-r border-b  animate-horizontal-move-more-l h-1/4 z-10"></hr>
      <hr class=" lg:visible invisible bg-purple-600 p-6 rounded-lg translate  border-r border-b  animate-horizontal-move-l h-1/2 z-10"></hr>
      <div class="bg-purple-800 p-6 rounded-lg shadow-lg lg:w-2/3  border z-10">
        
        <h1 class=" font-mono tracking-tight mb-4">
          {{ activeSection.title }}
        </h1>

        <div v-if="activeSection.features">
          <h2 class="mb-4 text-white font-mono tracking-tight"> Features </h2>
  
          <p  class="mb-4 text-sm text-white font-mono tracking-tight">
            {{ activeSection.features }}
          </p>
        </div>

        <div v-if="activeSection.insights">
        
        <h2 class=" mb-4 text-white font-mono tracking-tight"> Insights </h2>
        <p class="mb-4 text-sm text-white font-mono tracking-tight">
          {{ activeSection.insights }}
        </p>
        </div>

        <button
          @click="activeSection = null"
          class="px-4 py-2 bg-gradient-to-tl from-blue-500 to-purple-500 text-white rounded -skew-3"
        >
          Close
        </button>

      </div>
      <hr class=" lg:visible invisible bg-purple-600 p-6 rounded-lg  border-l border-b  animate-horizontal-move-r h-1/2"></hr>
      <hr class=" lg:visible invisible bg-purple-600 p-6  rounded-lg border-l border-b animate-horizontal-move-more-r h-1/4"></hr>
        
        
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
const activeSection = ref(null);

defineProps({
  title: {
    type: String,
    required: true,
  },
  events: {
    type: Array,
    required: true,
  },
  features: {
    type: String,
    required: false,
  },
  insights: {
    type: Array,
    required: false,
  },

});
</script>
