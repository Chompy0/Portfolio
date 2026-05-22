<template>
  <div class="p-4 ">
    <h1>Project Timeline</h1>
  </div>
  <div>
    <VerticalTimeline ></VerticalTimeline>
    <br>
    <EventSection :events="myEvents" :title="title" ></EventSection>
  </div>
</template>


<script>
import VerticalTimeline from '../components/VerticalTimeline.vue';
import EventSection from '../components/EventSection.vue';
export default {
  name: "Projects",
  components: {
    VerticalTimeline,
    EventSection
  },
  data() {
    return {
      title: "Personal projects",
      myEvents: [
        {
          title: "Wake up",
          text: "'One button' game in a 2d/3d cube maze where you need to find the escape. Made in Unreal.",
          img: 'wakeup.png',
          features : "The player had to move through the faces of a cube. This means that when switching faces, the orientation would usually be different from the last time the player went there. The goal was to find the correct 'orientation' of a face to get the corresponding keys and unlock the exit. To try the game, visit http://willowgreens4.itch.io/wake-up. ",
          insights : "As it was the year-end project of my first year in game design and as the sole developer in the team, I absolutely wanted to offer satisfaying mechanics. While I was the only coding, I also took part in the design process through feedback by testing the level design. In the end, we were satisfied with the final product.  "
        },
        {
          title: "Cleaning Point",
          text: "Small experimental mobile game where you need to swipe your finger throughout points to prevent their contamination. Made in unity.",
          img: 'cleaningpoint.jpg',
          features : "Controlling the little yellow dot, the player has to go on blue circles that contain black parts until the time runs out. On the next levels, new features appear to complicate this task : new paths extending the area, switches that activate/deactivate paths, teleporters...  ",
          insights : "It is one of my finished solo project, which is rare. I had fun thinking of new features and immplementing them on a small environement since not much had to be done and I could focus on specific parts without breaking everything. While it surely needs to be polished, I am pretty satisfied with the result."
        }
      ]
    };
  }
};
</script>