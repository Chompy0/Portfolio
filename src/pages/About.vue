<template>
  <div>
    <AboutMeSection></AboutMeSection>
    <br />
    <SkillSection></SkillSection>
    <br />
    <EventSection :events="myEvents" :title="title"></EventSection>
  </div>
</template>

<script>
import AboutMeSection from "../components/AboutMeSection.vue";
import EventSection from "../components/EventSection.vue";
import SkillSection from "../components/SkillSection.vue";

export default {
  name: "About",
  components: {
    AboutMeSection,
    SkillSection,
    EventSection,
  },
  data() {
    return {
      title: "Outside Experience",
      myEvents: [
        {
          title: "DevFest - October 2025",
          text: "Technical conference for developers at Nantes.",
          img: "/devfest.jpg",
          insights:
            "As a volunteer, I helped setup the numerous stands, prepared goodies, managed the ticket office and such things. I also assisted to various conferences concerning the web, cloud and IA. ",
        },
        {
          title: "Epitech Nantes Summit - Ferbuary 2026",
          text: "Technical conference for students and developers.",
          img: "/epitechsummit.jpg",
          insights:
            "Assisted to numerous conferences around the agile development, our future with AIs, entrepreneurship and security.  ",
        },
      ],
    };
  },
};
</script>
