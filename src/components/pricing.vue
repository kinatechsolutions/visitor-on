<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#009fe3] to-[#3aaa35] opacity-30"
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
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base/7 font-semibold text-blue-600">Pricing</h2>
      <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Choose the right plan for you
      </p>
    </div>
    <p
      class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8"
    >
      Choose an affordable plan that’s packed with the best features for engaging your audience,
      creating customer loyalty, and driving sales.
    </p>

    <!-- Toggle Switch -->
    <div class="mt-8 flex justify-center">
      <div class="relative inline-flex items-center">
        <span class="mr-3 text-sm font-medium text-gray-600">Monthly</span>
        <button
          @click="isYearly = !isYearly"
          class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
          :class="{ 'bg-blue-600': isYearly }"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition"
            :class="{ 'translate-x-6': isYearly, 'translate-x-1': !isYearly }"
          />
        </button>
        <span class="ml-3 text-sm font-medium text-gray-600">Yearly (Save 20%)</span>
      </div>
    </div>

    <div
      class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:grid-cols-3"
    >
      <!-- Hobby Tier -->
      <div class="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10 lg:rounded-r-none">
        <h3 id="tier-hobby" class="text-base/7 font-semibold text-blue-600">Basic</h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-semibold tracking-tight text-gray-900">
            KES {{ isYearly ? '45,589' : '3,999' }}
          </span>
          <span class="text-base text-gray-500">{{ isYearly ? '/year' : '/month' }}</span>
        </p>
        <p class="mt-6 text-base/7 text-gray-600">
          The perfect plan if you're just getting started with our product.
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            7 days trial
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Upto 500 visitors per month
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited tenants/hosts
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited staffs/employees
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Digital agreements
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-hobby"
          class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 sm:mt-10"
        >
          Get started today
        </a>
      </div>

      <!-- Growth Tier (New) -->
      <div
        class="relative rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-900/10 sm:p-10 lg:rounded-none"
      >
        <h3 id="tier-growth" class="text-base/7 font-semibold text-blue-600">Standard</h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-semibold tracking-tight text-gray-900">
            KES {{ isYearly ? '79,789' : '6,999' }}
          </span>
          <span class="text-base text-gray-500">{{ isYearly ? '/year' : '/month' }}</span>
        </p>
        <p class="mt-6 text-base/7 text-gray-600">
          Ideal for growing businesses ready to scale their operations.
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            7 days trial
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Upto 1500 visitors per month
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited tenants/hosts
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited staffs/employees
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Digital agreements
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-growth"
          class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 sm:mt-10"
        >
          Get started today
        </a>
      </div>

      <!-- Enterprise Tier -->
      <div
        class="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 lg:rounded-l-none"
      >
        <h3 id="tier-enterprise" class="text-base/7 font-semibold text-blue-400">Premium</h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span class="text-5xl font-semibold tracking-tight text-white">
            KES {{ isYearly ? '136,789' : '11,999' }}
          </span>
          <span class="text-base text-gray-400">{{ isYearly ? '/year' : '/month' }}</span>
        </p>
        <p class="mt-6 text-base/7 text-gray-300">
          Dedicated support and infrastructure for your company.
        </p>
        <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Upto 5000 visitors per month
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited tenants/hosts
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Unlimited staffs/employees
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Digital agreements
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-enterprise"
          class="mt-8 block rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:mt-10"
        >
          Get started today
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isYearly = ref(false);
</script>

<style scoped>
  /* Add any additional custom styles here if needed */
</style>
