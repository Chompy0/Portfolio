<template>
  <nav
    class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default"
  >
    <div
      class="flex flex-row justify-evenly py-2 bg-gradient-to-b from-purple-900 to-gray-900"
    >
      <router-link
        v-for="link in links"
        :key="link.text"
        :to="link.url"
        class="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium hover:scale-105 rounded-base group bg-gradient-to-br from-purple-600 to-blue-500 text-white focus:ring-4 focus:outline-none"
      >
        <span class="relative px-4 py-2.5">
          {{ link.text }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { text: "About me", url: "/" },
        { text: "Projects", url: "/projects" },
        { text: "Contact", url: "/contact" },
      ],
    };
  },
};
</script>
