<template>
  <div class="p-4">
    <h1>Contact Information</h1>
    <br />
    <ContactSection></ContactSection>
  </div>
</template>

<script>
import ContactSection from "../components/ContactSection.vue";

export default {
  name: "Contact",
  components: {
    ContactSection,
  },
};
</script>
