<template>
  <main class="flex-grow flex items-center">
    <section
      class="w-full md:ml-5 lg:ml-20 px-12 md:px-16 sm:mt-8 md:mt-12 lg:mt-0 pt-5"
    >
      <h1
        class="font-balsamiq text-4xl sm:text-5xl xxl:text-6xl font-bold text-gray-800 animate__animated animate__fadeInTopLeft"
      >
        Contact me
      </h1>

      <div class="flex flex-wrap -mx-10 mt-5">
        <div class="w-full lg:w-1/2 px-10 mb-16">
          <form
            class="animate__animated animate__delay-1s animate__bounceInDown"
          >
            <div class="flex flex-col mb-2">
              <input
                type="text"
                class="w-full px-5 py-3 mb-2 focus:outline-none focus:bg-teal-300"
                placeholder="Name"
              />
              <input
                type="text"
                class="w-full px-5 py-3 mb-2 focus:outline-none focus:bg-teal-300"
                placeholder="Email"
              />
              <textarea
                rows="6"
                class="w-full px-5 py-3 mb-2 focus:outline-none focus:bg-teal-300"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              class="bg-transparent text-sm font-balsamiq font-bold text-gray-800 py-1 px-3 border-2 border-black uppercase transition duration-200 ease-out hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              SEND
            </button>
          </form>
        </div>

        <div
          class="w-full lg:w-1/2 px-10 pl-16 sm:pl-20 animate__animated animate__delay-2s animate__backInDown"
        >
          <div class="text-lg mb-4">
            <div class="flex items-center">
              <img src="./../assets/svg/gmail.svg" alt="my gmail" class="w-8" />
              <p class="font-balsamiq font-bold ml-3 md:mb-1 text-gray-800">
                Email
              </p>
            </div>
            <p class="text-white">ramain77@gmail.com</p>
          </div>

          <div class="text-lg mb-4">
            <div class="flex items-center">
              <img
                src="./../assets/svg/github.svg"
                alt="my gmail"
                class="w-8"
              />
              <p class="font-balsamiq font-bold ml-3 md:mb-1 text-gray-800">
                Github
              </p>
            </div>
            <p class="text-white">github.com/KrisCatDog</p>
          </div>

          <div class="text-lg mb-4">
            <div class="flex items-center">
              <img src="./../assets/svg/line.svg" alt="my gmail" class="w-8" />
              <p class="font-balsamiq font-bold ml-3 md:mb-1 text-gray-800">
                LINE
              </p>
            </div>
            <p class="text-white">krwisp</p>
          </div>

          <div class="text-lg mb-4">
            <div class="flex items-center">
              <img
                src="./../assets/svg/instagram.svg"
                alt="my gmail"
                class="w-8"
              />
              <p class="font-balsamiq font-bold ml-3 md:mb-1 text-gray-800">
                Instagram
              </p>
            </div>
            <p class="text-white">realramainnt</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
input,
textarea {
  background: #55ffbe;
}
</style>
