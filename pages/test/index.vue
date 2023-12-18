<template>
  <div class="flex">
    <div class="w-full">
      {{useStore.authenticated}}
    </div>
    <q-btn @click="useStore.login()">login</q-btn>
    <div class="w-full bg-red-500" v-for="(item,index) in data!" :key="index">
      {{item.title}}
    </div>
    <div class="">{{error}}</div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useApiFetch } from '~/composables/useApiFetch'

definePageMeta({
  layout: 'main',
  middleware: 'authenticated'
})
useSeoMeta({
  title: 'Test Page',
  themeColor: '#F2F2F2',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
const useStore = useAuthStore()
interface test {
  userId: number,
  title: string
}
const { data, error } = await useApiFetch<test[]>('/todos')
</script>

<style scoped lang="scss">

</style>
