<template>
  <div>
    <AboutMeSection></AboutMeSection>
    <br>
    <SkillSection></SkillSection>
    <br>
    <EventSection></EventSection>
  </div>
</template>

<script>
import AboutMeSection from './AboutMeSection.vue';
import EventSection from './EventSection.vue';
import SkillSection from './SkillSection.vue';

export default {
  name: "About",
  components: {
    AboutMeSection,
    SkillSection,
    EventSection
  }
};
</script>