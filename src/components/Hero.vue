<template>
  <div
    class="mx-auto py-32 sm:py-48 lg:py-56 container pt-24 md:pt-48 px-6 flex flex-wrap flex-col md:flex-row items-center"
  >
    <div
      class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3aaa35] to-[#009fe3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>

    <!--Left Col-->
    <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1
        class="font-heading my-10 text-3xl md:text-6xl text-primary font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
        >Welcome Smarter with Visitor On</h1
      >
      <p class="font-body mb-10 md:text-lg text-center md:text-left"
        >Visitor On modernizes your front desk with secure, seamless check-ins. Effortlessly manage
        clients, contractors, and coworkers for a professional guest experience every time.
      </p>
      <div class="flex gap-4 items-center">
        <a
          href="#"
          class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >Get started</a
        >

        <a href="#" class="text-sm/6 font-semibold text-gray-900"
          >Learn more <span aria-hidden="true">→</span></a
        >
      </div>
    </div>

    <!--Right Col-->
    <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
      <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="/checkin.svg" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  /* Add custom styles if needed */
</style>
