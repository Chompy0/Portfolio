<template>
  <div class="bg-gray-800 p-4">
    <div class=" w-full">
      <h1>Outside experience</h1>
    </div>
    <div class="grid lg:grid-cols-2  grid-cols-1 gap-4">
      <div
        v-for="(event, index) in events"
        :key="index"
          class="bg-gray-700 text-black p-4 rounded shadow border-y-2 border-indigo-800 text-center flex flex-col"
        >
          <h2 class="font-bold text-white flex items-center justify-center">{{ event.title }}</h2>
              <img v-if="event.img" :src="event.img" :alt="event.text" class=" object-fill" />

        <p class="text-white"> {{ event.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Devfest from '../assets/img/devfest.jpg';


export default {

  name: "EventSection",
  data() {
    return {
      events: [
        { title : "DevFest - October 2025", text: "Technical conference for developers at Nantes, it is aimed at students, professionals, and simply curious tech enthusiasts. I volunteered to help set up the event and watched conferences.",img : Devfest},

      ]
    };
  }
};
</script>