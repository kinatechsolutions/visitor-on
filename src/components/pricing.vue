<template>
  <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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
      <h2 class="text-base/7 font-semibold text-primary">Pricing</h2>
      <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
        >Choose the right plan for you</p
      >
    </div>
    <p
      class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8"
      >Choose an affordable plan that’s packed with the best features for engaging your audience,
      creating customer loyalty, and driving sales.</p
    >
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3"
    >
      <div v-for="(tier, index) in pricings" :key="index" :class="tier.class">
        <h3 :id="tier.id" :class="tier.titleClass">{{ tier.title }}</h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span :class="tier.priceClass">{{ tier.price }}</span>
          <span class="text-base text-gray-500">/month</span>
        </p>
        <p :class="tier.descriptionClass">{{ tier.description }}</p>
        <ul role="list" :class="tier.listClass">
          <li v-for="(feature, fIndex) in tier.features" :key="fIndex" class="flex gap-x-3">
            <svg
              :class="feature.iconClass"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path fill-rule="evenodd" :d="feature.iconPath" clip-rule="evenodd" />
            </svg>
            {{ feature.text }}
          </li>
        </ul>
        <a href="#" :aria-describedby="tier.id" :class="tier.buttonClass">Get started today</a>
      </div>
    </div>
  </div>
</template>

<script setup>
  const pricings = [
    {
      class:
        'rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none',
      id: 'tier-hobby',
      titleClass: 'text-base/7 font-semibold text-primary',
      title: 'Basic',
      priceClass: 'text-5xl font-semibold tracking-tight text-gray-900',
      price: 'KES 3,999',
      descriptionClass: 'mt-6 text-base/7 text-gray-600',
      description: `The perfect plan if you're just getting started with our product.`,
      listClass: 'mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10',
      features: [
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: '7 days trial',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Upto 500 visitors per month',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Unlimited staffs/employees',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Digital agreements',
        },
      ],
      buttonClass:
        'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-primary ring-1 ring-inset ring-primary hover:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10',
    },
    {
      class: 'relative rounded-3xl bg-tertiary p-8 shadow-2xl ring-1 ring-tertiary/10 sm:p-10',
      id: 'tier-enterprise',
      titleClass: 'text-base/7 font-semibold text-primary',
      title: 'Standard',
      priceClass: 'text-5xl font-semibold tracking-tight text-white',
      price: 'KES 6,999',
      descriptionClass: 'mt-6 text-base/7 text-gray-300',
      description: 'Dedicated support and infrastructure for your company.',
      listClass: 'mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10',
      features: [
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: '7 days trial',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Upto 1500 visitors per month',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Unlimited tenants/hosts',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Unlimited staffs/employees',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Digital agreements',
        },
      ],
      buttonClass:
        'mt-8 block rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10',
    },
    {
      class:
        'rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-br-3xl lg:rounded-tl-none',
      id: 'tier-hobby',
      titleClass: 'text-base/7 font-semibold text-primary',
      title: 'Premium',
      priceClass: 'text-5xl font-semibold tracking-tight text-gray-900',
      price: 'KES 11,999',
      descriptionClass: 'mt-6 text-base/7 text-gray-600',
      description: 'For workplaces with greater safety, security & compliance requirements',
      listClass: 'mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10',
      features: [
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Upto 5000 visitors per month',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Unlimited tenants/hosts',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Unlimited staffs/employees',
        },
        {
          iconClass: 'h-6 w-5 flex-none text-primary',
          iconPath:
            'M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z',
          text: 'Digital agreements',
        },
      ],
      buttonClass:
        'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-primary ring-1 ring-inset ring-primary hover:ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10',
    },
  ];
</script>
<style scoped></style>
