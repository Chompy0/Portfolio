<template>
  <div
    class=" h-full flex flex-row justify-evenly bg-gradient-to-b from-purple-900 to-blue-900 p-4 rounded"
  >
    <div class="w-1/4">
      <div class="flex flex-col p-1 h-full">
        <div
          class="h-full flex flex-col justify-evenly items-center bg-gray-600 rounded shadow"
        >
          <a v-for="link in links" :href="link.url" class="h-1/6">
            <img
              v-if="link.img"
              :src="link.img"
              :alt="link.text"
              class="h-12 w-16 object-contain hover:scale-90 transition duration-800"
              @click="activeSection = event"
            />
            {{ link.text }}
          </a>
          <div
            class="text-white text-sm underline font-mono tracking-tight hover:text-blue-500"
          >
            <a href="../../public/CV_Rahmouni_Idriss.pdf" download
              >Download my CV!</a
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-500 ml-5 bg-gradient-to-tr from-transparent to-transparent opacity-75  rounded h-full w-0.5 "></div>
    </div>
    <div class="w-2/3 flex flex-col p-6 gap-6">
      <div class="bg-gray-500/50 text-black p-4 rounded shadow max-h-96 overflow-auto">
        <h2 class="font-mono tracking-tight mb-4">Contact Form</h2>

        <form
          class="flex flex-col gap-4 items-center p-5 rounded"
          @submit.prevent="submitForm"
        >
          <div>
            <h2 class="font-mono tracking-tight">Name</h2>
            <input
              class="w-full p-2 text-white rounded"
              type="text"
              v-model="name"
              required
            />
          </div>

          <div>
            <h2 class="font-mono tracking-tight">Email</h2>
            <input
              class="w-full p-2 text-white rounded"
              type="email"
              v-model="email"
              required
            />
          </div>

          <div class="w-5/6">
            <h2 class="font-mono tracking-tight">Your message</h2>
            <textarea
              class="w-full p-2 text-white font-mono tracking-tight"
              v-model="message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              class="relative inline-flex items-center justify-center p-2 hover:bg-gradient-to-tl hover:scale-105 overflow-hidden font-medium rounded-base bg-gradient-to-br from-purple-600 to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
            >
              <p class="text-white">Submit message</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "cc43fd21-4c2d-4e98-88c1-e711a22dcede";

export default {
  name: "ContactSection",

  data() {
    return {
      links: [
        { img: "./github.svg", url: "https://github.com/Chompy0" },
        {
          img: "./linkedin.svg",
          url: "https://linkedin.com/in/idriss-rahmouni-54b57338b",
        },
      ],

      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    async submitForm() {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        const result = await response.json();

        if (result.success) {
          alert("Message sent successfully!");

          this.name = "";
          this.email = "";
          this.message = "";
        } else {
          alert("Something went wrong.");
        }
      } catch {
        alert("Network error.");
      }
    },
  },
};
</script>
