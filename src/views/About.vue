<template>
  <main class="flex-grow flex h-full items-center">
    <section class="ml-5 lg:ml-20 px-10 md:px-16 pt-5">
      <h1
        class="font-balsamiq text-4xl sm:text-5xl xxl:text-6xl font-bold text-gray-800 animate__animated animate__fadeInTopLeft"
      >
        About me
      </h1>

      <h3
        class="text-sm xxl:text-xl sm:text-base text-white tracking-widest whitespace-pre-line animate__animated animate__delay-1s animate__bounceInDown"
      >
        {{ this.desc }}
      </h3>

      <div
        class="mt-10 animate__animated animate__delay-2s animate__backInDown"
      >
        <router-link
          to="/contact"
          class="bg-transparent font-balsamiq font-bold text-gray-800 py-2 px-5 border-2 border-black uppercase transition duration-200 ease-out hover:bg-black hover:text-white"
        >
          Contact Me
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      desc: `
            Hello there! 
            Let me introduce myself, 
            My name is Krishna Wijaya. 

            I'm a web designer and full stack web developer who always tries my best, 
            My programming language is PHP and JavaScript, my CSS framework 
            is Bootstrap and Tailwind, my PHP framework is Laravel, my JavaScript 
            framework is Vue.

            And also I use Adobe XD for designing a website.`,
    };
  },
};
</script>
