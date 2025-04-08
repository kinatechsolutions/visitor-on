<template>
  <footer class="bg-[#F6F6F6]">
    <div class="mx-auto max-w-screen-xl px-6 lg:px-8 py-12">
      <div class="grid grid-cols-12 gap-x-5 pb-8">
        <div class="col-span-12 mb-6 space-y-5 sm:col-span-5 sm:mb-0 sm:space-y-16 md:col-span-2">
          <img src="/logo.png" class="h-10 lg:h-12" alt="Kenya Revenue Authority" />
        </div>

        <div
          class="col-span-12 space-y-4 px-0 sm:col-span-7 sm:space-y-6 md:col-span-4 lg:mx-auto lg:px-4"
        >
          <div class="space-y-4">
            <p class="text-sm font-semibold text-itax-500">Reach Us</p>
            <ul class="space-y-4 text-sm font-medium leading-8 text-gray-600 sm:text-sm">
              <li>
                Tel:
                <a href="tel:+000-00000000">000-00000000</a>
              </li>
              <li>
                Cell:
                <a href="tel:+254708-338855">0708-338855</a>
              </li>
              <li>
                Email:
                <a href="mailto:info@visitoron.com">callcentre@kra.go.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-span-12 mt-6 md:mt-0 space-y-4 px-0 sm:col-span-7 sm:space-y-6 md:col-span-4 lg:px-4"
        >
          <div class="space-y-4">
            <p class="text-sm font-semibold text-itax-500">Company</p>
            <ul class="space-y-4 text-sm font-medium leading-8 text-gray-600 sm:text-sm">
              <li>
                <router-link :to="{}">About US</router-link>
              </li>

              <li>
                <router-link :to="{}">Contacts</router-link>
              </li>

              <li>
                <router-link :to="{ name: 'Terms' }">Terms of Service</router-link>
              </li>

              <li>
                <router-link :to="{ name: 'Privacy' }">Privacy Policy</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-2 hidden md:block">
          <a href="https://play.google.com/store/apps/details?id=com.lulliezy.visitor">
            <img src="/google-play.png" class="h-6 lg:h-10" alt="eCitizen" />
          </a>
        </div>
      </div>
      <div
        class="mt-3 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 pt-8 lg:justify-between"
      >
        <p class="text-center text-sm font-light text-[#475467] sm:text-right lg:text-left">
          Copyright ©
          <span class="inline-block px-1">
            {{ new Date().getFullYear() }}
          </span>
          All rights reserved.
        </p>
        <div class="flex items-center gap-8">
          <a
            href="https://kra.go.ke/images/Corporate_Website_Terms_Conditions.pdf"
            class="text-base hover:underline font-semibold text-gray-600"
          >
            Terms & Conditions
          </a>
          <a href="/" class="text-base hover:underline font-semibold text-gray-600">
            Privacy Policy
          </a>
        </div>
        <div class="flex items-center gap-6">
          <a href="https://twitter.com/KRACorporate">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24">
              <g clip-path="url(#a)">
                <path
                  fill="#98A2B3"
                  d="M7.714 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638a10 10 0 0 0 2.456-2.549 9.7 9.7 0 0 1-2.826.774 4.95 4.95 0 0 0 2.165-2.723A9.898 9.898 0 0 1 20.378 3.8a4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.837 3.15 4.93 4.93 0 0 0 3.36 9.72a4.93 4.93 0 0 1-2.23-.614v.06a4.922 4.922 0 0 0 3.95 4.829 4.895 4.895 0 0 1-2.221.084 4.934 4.934 0 0 0 4.597 3.422 9.875 9.875 0 0 1-7.292 2.037 13.969 13.969 0 0 0 7.55 2.212Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.164 0h24v24h-24z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/kracare/">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24">
              <g clip-path="url(#a)">
                <path
                  fill="#98A2B3"
                  d="M22.387 0H1.936C.956 0 .164.773.164 1.73v20.536C.164 23.222.956 24 1.936 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73c0-.957-.797-1.73-1.777-1.73ZM7.284 20.452H3.722V8.995h3.562v11.457ZM5.504 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.52V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.164 0h24v24h-24z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://web.facebook.com/KRACare">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24">
              <g clip-path="url(#a)">
                <path
                  fill="#98A2B3"
                  d="M24.164 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.242V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469H14.04v8.385c5.737-.9 10.125-5.864 10.125-11.854Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.164 0h24v24h-24z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
