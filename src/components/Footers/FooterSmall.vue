<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative',
    ]"
  >
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-blueGray-600" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
          >
            Copyright © {{ date }}
            <a
              href="/"
              class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
            >
              KHUSANBOY AKHMEDOV
            </a>
          </div>
        </div>
       
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date().getFullYear());

const props = defineProps({
  absolute: {
    type: Boolean,
    default: false,
  },
})
</script>
