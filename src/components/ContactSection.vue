<template>
  <div class="bg-red-500 flex flex-col">
    <div>
      <h1>Contact information</h1>
    </div>
    <div>
      <h1>Contact Form</h1>
  </div>
    </div>  
    <br>
    <div class="bg-green-500 flex flex-col">
      <h2 class="flex items-center"> Links</h2>
      <div class="flex flex-row bg-green-500 justify-evenly py-2">
      <a
        v-for="link in links"
        :key="link.text"
        :href="link.url"
        class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
        {{ link.text }}
        
      </a>
      </div>  
    </div> 
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      links: [
        { text: "Github", url : "https://github.com/Chompy0" },
        { text: "Linkedin", url : "https://linkedin.com/in/idriss-rahmouni-54b57338b" },
        { text: "idk", url : "" },
      ]
    };
  }
};
</script>