<template>
  <div
    class="mx-auto py-32 sm:py-48 lg:py-56 container pt-24 md:pt-48 px-6 flex flex-wrap flex-col md:flex-row items-center"
  >
    <!--Left Col-->
    <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1
        class="my-10 text-3xl md:text-6xl text-primary font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
        >Welcome Smarter with Visitor On</h1
      >
      <p class="mb-10 md:text-lg text-center md:text-left"
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
      <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="/devices.svg" />
    </div>
  </div>

  <!--  <div class="bg-white">-->

  <!--    <div-->
  <!--      class="px-6 md:px-8 py-6 lg:py-16 !pb-8 max-w-screen-xl mx-auto bg-no-repeat bg-cover relative z-10 flex-1 flex flex-col justify-center items-center"-->
  <!--    >-->
  <!--      <div class="grid grid-cols-12 gap-6 flex-col">-->
  <!--        <div-->
  <!--          class="col-span-12 md:col-span-6 pb-8 md:pb-0 flex flex-col justify-start sm:pt-12 gap-8 md:gap-10"-->
  <!--        >-->
  <!--          <div class="space-y-8 max-w-[595px]">-->
  <!--            <div class="hidden sm:mb-8 sm:flex">-->
  <!--              <div-->
  <!--                class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"-->
  <!--              >-->
  <!--                Announcing our next round of funding.-->
  <!--                <a href="#" class="font-semibold text-primary"-->
  <!--                  ><span class="absolute inset-0" aria-hidden="true"></span>Read more-->
  <!--                  <span aria-hidden="true">&rarr;</span></a-->
  <!--                >-->
  <!--              </div>-->
  <!--            </div>-->

  <!--            <h1-->
  <!--              class="text-black text-5xl md:text-5xl !leading-[56px] lg:text-[50px] lg:!leading-[62px] font-semibold"-->
  <!--            >-->
  <!--              {{ heroSlides[currentSlide].title }}-->
  <!--            </h1>-->
  <!--            <div class="text-[#475467] space-y-2 md:space-y-2 text-[18px] font-normal">-->
  <!--              <p>-->
  <!--                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat-->
  <!--                commodo. Elit sunt amet fugiat veniam occaecat.-->
  <!--              </p>-->
  <!--            </div>-->

  <!--            <div class="flex gap-4 items-center">-->
  <!--              <a-->
  <!--                href="#"-->
  <!--                class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"-->
  <!--                >Get started</a-->
  <!--              >-->

  <!--              <a href="#" class="text-sm/6 font-semibold text-gray-900"-->
  <!--                >Learn more <span aria-hidden="true">→</span></a-->
  <!--              >-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->

  <!--        <div class="col-span-12 md:col-span-6">-->
  <!--          <div class="sm:relative flex flex-col gap-0 max-w-[450px] md:max-w-[800px] mx-auto">-->
  <!--            <div class="sm:relative sm:min-h-[450px] flex items-center justify-center">-->
  <!--              <div-->
  <!--                class="sm:absolute rounded-full w-[28em] h-[28em] rotating hidden sm:block"-->
  <!--                style="border: 2px dashed rgba(255, 0, 0, 0.1)"-->
  <!--              ></div>-->

  <!--              <div class="rounded-full hidden sm:block">-->
  <!--                <div-->
  <!--                  class="p-12 m-4 w-[24em] h-[24em] rounded-full flex items-center justify-center relative"-->
  <!--                  style="-->
  <!--                    background: linear-gradient(-->
  <!--                      180deg,-->
  <!--                      rgba(237, 30, 37, 0.14) 0%,-->
  <!--                      rgba(236, 0, 8, 0.04) 100%-->
  <!--                    );-->
  <!--                  "-->
  <!--                >-->
  <!--                </div>-->
  <!--              </div>-->

  <!--              <div class="sm:absolute w-full h-full">-->
  <!--                <img src="/reception.jpg" class="sm:absolute md:left-0 rounded-full" alt="image" />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <div class="relative isolate px-6 pt-14 lg:px-8">-->
  <!--      <div-->
  <!--        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"-->
  <!--        aria-hidden="true"-->
  <!--      >-->
  <!--        <div-->
  <!--          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3aaa35] to-[#009fe3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"-->
  <!--          style="-->
  <!--            clip-path: polygon(-->
  <!--              74.1% 44.1%,-->
  <!--              100% 61.6%,-->
  <!--              97.5% 26.9%,-->
  <!--              85.5% 0.1%,-->
  <!--              80.7% 2%,-->
  <!--              72.5% 32.5%,-->
  <!--              60.2% 62.4%,-->
  <!--              52.4% 68.1%,-->
  <!--              47.5% 58.3%,-->
  <!--              45.2% 34.5%,-->
  <!--              27.5% 76.7%,-->
  <!--              0.1% 64.9%,-->
  <!--              17.9% 100%,-->
  <!--              27.6% 76.8%,-->
  <!--              76.1% 97.7%,-->
  <!--              74.1% 44.1%-->
  <!--            );-->
  <!--          "-->
  <!--        ></div>-->
  <!--      </div>-->
  <!--      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">-->
  <!--        <div class="hidden sm:mb-8 sm:flex sm:justify-center">-->
  <!--          <div-->
  <!--            class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"-->
  <!--          >-->
  <!--            Announcing our next round of funding.-->
  <!--            <a href="#" class="font-semibold text-primary"-->
  <!--              ><span class="absolute inset-0" aria-hidden="true"></span>Read more-->
  <!--              <span aria-hidden="true">&rarr;</span></a-->
  <!--            >-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="text-center">-->
  <!--          <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"-->
  <!--            >Data to enrich your online business</h1-->
  <!--          >-->
  <!--          <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"-->
  <!--            >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat-->
  <!--            commodo. Elit sunt amet fugiat veniam occaecat.</p-->
  <!--          >-->
  <!--          <div class="mt-10 flex items-center justify-center gap-x-6">-->
  <!--            <a-->
  <!--              href="#"-->
  <!--              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"-->
  <!--              >Get started</a-->
  <!--            >-->
  <!--            <a href="#" class="text-sm/6 font-semibold text-gray-900"-->
  <!--              >Learn more <span aria-hidden="true">→</span></a-->
  <!--            >-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div-->
  <!--        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"-->
  <!--        aria-hidden="true"-->
  <!--      >-->
  <!--        <div-->
  <!--          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3aaa35] to-[#009fe3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"-->
  <!--          style="-->
  <!--            clip-path: polygon(-->
  <!--              74.1% 44.1%,-->
  <!--              100% 61.6%,-->
  <!--              97.5% 26.9%,-->
  <!--              85.5% 0.1%,-->
  <!--              80.7% 2%,-->
  <!--              72.5% 32.5%,-->
  <!--              60.2% 62.4%,-->
  <!--              52.4% 68.1%,-->
  <!--              47.5% 58.3%,-->
  <!--              45.2% 34.5%,-->
  <!--              27.5% 76.7%,-->
  <!--              0.1% 64.9%,-->
  <!--              17.9% 100%,-->
  <!--              27.6% 76.8%,-->
  <!--              76.1% 97.7%,-->
  <!--              74.1% 44.1%-->
  <!--            );-->
  <!--          "-->
  <!--        ></div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup>
  import { ref } from 'vue';

  const heroSlides = ref([
    {
      id: 1,
      title: 'Tulipe Ushuru Tujitegemee.',
      description: [
        'The convenient way for taxpayers to file their tax returns, make tax payments, and access various tax-related services online.',
        'Kenya Revenue Authority online services. Apply and pay for the services conveniently through your eCitizen account.',
      ],
      image1: 'assets/png/landing/tulipe.png',
    },
    {
      id: 2,
      title: 'Property Management with eRITS',
      description: [
        'Enjoy a hassle-free experience with our simplified registration process. Register your rental properties, file and pay your rental income taxes seamlessly while enjoying our bundled property management system ',
      ],
      image1: 'assets/png/landing/erits.png',
    },
    {
      id: 3,
      title: 'Invoicing on eTIMS',
      description: [
        'Transform the way you manage your business seamlessly with ETIMS E-Invoicing. ETIMS E-Invoicing is your comprehensive solution to streamline and optimize the invoicing workflow, allowing you to focus on what matters most.',
      ],
      image1: 'assets/png/landing/etims.png',
    },
    {
      id: 4,
      title: 'Customs',
      description: [
        'Access Customs services seamlessly from the simplified solutions portal today. Apply to become an authorised exporter and apply for COOs and more directly from your KRA profile.',
      ],
      image1: 'assets/png/landing/customs.png',
    },
  ]);
  const currentSlide = ref(0);
</script>

<style scoped>
  /* Add custom styles if needed */
</style>
