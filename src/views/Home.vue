<script setup>
import { useUsersStore } from '../stores';
import { useAuthStore } from '../stores';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const usersStore = useUsersStore();
const authStore = useAuthStore();
const router = useRouter();

onBeforeMount(() => {
  if (!usersStore.$state.isAuthenticated) {
    router.push('/login');
  }
})

const logout = async () => {
  await authStore.logout();
}
</script>

<template>
  <div v-if="usersStore.$state.isAuthenticated" class="p-8 space-y-6">
    <h1 class="text-2xl">Hi, <span class="font-bold">{{ usersStore.$state.user.email }}</span></h1>
    <button @click="logout"
      class="px-4 py-2 transition border rounded hover:bg-green-500 hover:text-white hover:border-green-500">Chiqish</button>
  </div>
</template>