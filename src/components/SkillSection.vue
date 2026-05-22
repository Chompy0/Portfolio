<template>
  <div class="bg-gray-800 p-4">
    <h1 class="text-white">Skills</h1>
    <div v-for="(category, cIndex) in categories" :key="cIndex">
      <div
        class="py-3 font-mono tracking-tight flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600"
      >
        {{ category.title }}
      </div>
      <div
        class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 skill-grid"
      >
        <div
          v-for="(item, index) in category.items"
          :key="index"
          class="card bg-gray-600 p-4 rounded shadow text-center flex flex-col transition duration-300 active:bg-purple-700"
        >
          <div class="flex justify-evenly items-center">
            <img
              v-if="item.img"
              :src="item.img"
              :alt="item.text"
              class="h-12 w-16 object-contain"
            />
            <h2 class="font-bold text-white">{{ item.text }}</h2>
          </div>

          <div class="mt-4 w-full bg-gray-300 rounded-full h-4">
            <div
              class="bg-gradient-to-r h-4 rounded-full from-purple-900"
              :class="item.color"
              :style="{ width: item.score }"
            ></div>
          </div>
        </div>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillSection",
  data() {
    return {
      categories: [
        {
          title: "Languages & Frameworks",
          items: [
            {
              text: "HTML",
              img: "/html.svg",
              score: "70%",
              color: "to-red-500",
            },
            {
              text: "CSS",
              img: "/css.svg",
              score: "70%",
              color: "to-blue-500",
            },
            {
              text: "React",
              img: "reactIcon.svg",
              score: "70%",
              color: "to-blue-500",
            },
            {
              text: "Tailwind",
              img: "tailwindIcon.svg",
              score: "60%",
              color: "to-blue-500",
            },
            { text: "JS", img: "js.svg", score: "70%", color: "to-yellow-500" },
            {
              text: "Python",
              img: "pythonIcon.svg",
              score: "75%",
              color: "to-yellow-500",
            },
            {
              text: "Express",
              img: "expressIcon.svg",
              score: "65%",
              color: "to-yellow-500",
            },
            {
              text: "Vue",
              img: "vueIcon.svg",
              score: "60%",
              color: "to-green-500",
            },
            {
              text: "C#",
              img: "csharpIcon.svg",
              score: "70%",
              color: "to-green-500",
            },
            {
              text: "SQL",
              img: "sqlIcon.svg",
              score: "50%",
              color: "to-purple-500",
            },
            {
              text: "Streamlit",
              img: "streamlitIcon.svg",
              score: "60%",
              color: "to-red-500",
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              text: "Git",
              img: "gitIcon.svg",
              score: "65%",
              color: "to-purple-500",
            },
            {
              text: "Docker",
              img: "dockerIcon.svg",
              score: "60%",
              color: "to-blue-500",
            },
            {
              text: "BurpSuite",
              img: "burpIcon.svg",
              score: "50%",
              color: "to-blue-500",
            },
            {
              text: "Figma",
              img: "figmaIcon.svg",
              score: "60%",
              color: "to-red-500",
            },
            {
              text: "Notion",
              img: "notionIcon.svg",
              score: "75%",
              color: "to-gray-500",
            },
            {
              text: "Unity",
              img: "unityIcon.svg",
              score: "75%",
              color: "to-gray-500",
            },
            {
              text: "Unreal",
              img: "unrealIcon.svg",
              score: "65%",
              color: "to-gray-500",
            },
            {
              text: "Blender",
              img: "blenderIcon.svg",
              score: "60%",
              color: "to-orange-500",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.skill-grid:has(.card:hover) .card:not(:hover) {
  transform: scale(0.95);
}

.skill-grid .card:hover {
  transform: scale(1.1);
  opacity: 1;
  z-index: 10;
}
</style>
