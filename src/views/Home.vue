<template>
  <main class="flex-grow flex items-center">
    <section class="ml-5 lg:ml-20 px-10 md:px-16 my-5">
      <h1
        class="font-balsamiq text-4xl sm:text-5xl xxl:text-6xl font-bold text-gray-800 animate__animated animate__fadeInTopLeft"
      >
        Hi, <br />
        I'm Krishna, <br />
        junior web developer.
      </h1>

      <h3
        class="text-sm lg:text-base xxl:text-xl text-white tracking-widest mt-2 animate__animated animate__delay-1s animate__bounceInDown"
      >
        Front End Developer | Back End Developer | Web Designer
      </h3>

      <div
        class="mt-10 animate__animated animate__delay-2s animate__backInDown flex flex-row"
      >
        <router-link
          to="/about"
          class="self-start text-sm md:text-base bg-transparent font-balsamiq font-bold text-gray-800 py-1 sm:py-2 px-3 sm:px-5 border-2 border-black uppercase transition duration-200 ease-out hover:bg-black hover:text-white"
        >
          About Me
        </router-link>
        <router-link
          to="/projects"
          class="self-start text-sm md:text-base ml-2 lg:ml-5 bg-transparent font-balsamiq font-bold text-gray-800 py-1 sm:py-2 px-3 sm:px-5 border-2 border-black uppercase transition duration-200 ease-out hover:bg-black hover:text-white"
        >
          Projects
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
