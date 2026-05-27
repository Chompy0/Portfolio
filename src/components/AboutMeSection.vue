<template>
  <div class="bg-gradient-to-b from-purple-900 to-blue-900 p-4 flex">
    <div
      class="flex flex-col bg-gray-600 text-black justify-center items-center p-4 rounded shadow"
    >
      <div
        class="flex flex-row justify-evenly items-center bg-purple-900 py-2 rounded"
      >
        <div class="w-1/6">
          <img
            class=" ml-2 max-h-96 rounded transition duration-700 hover:animate-bounce hover:[animation-delay:-0.5s] hover:[animation-direction:reverse] hover:[animation-iteration-count:infinite]"
            src="../assets/img/profilepicture.jpg"
          />
        </div>
        <div>
          <h1>Rahmouni Idriss</h1>

          <blockquote
            class="text-white italic font-semibold text-center text-heading font-mono tracking-tight py-2"
          >
            <p>"A line of code a day keeps errors at bay."</p>
          </blockquote>
        </div>
      </div>
      <br />
      <div>
        <text class="text-white font-mono tracking-tight"
          >Currently a student at Epitech, I love creative activities.
        </text>
        <br />
        <text class="text-white font-mono tracking-tight"
          >20 And living in Nantes, France, I enjoy programming as a whole. Aspiring to
          be a fullstack developer, I also code games when I have time.
        </text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",
};
</script>
