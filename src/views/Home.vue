<script setup>
import { useUsersStore } from '../stores';
import { useAuthStore } from '../stores';
import { auth } from '../firebase';
import { onBeforeMount, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const usersStore = useUsersStore();
const authStore = useAuthStore();
const router = useRouter();

const email = ref('');

onBeforeMount(() => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      router.push('/login');
    } else {
      email.value = usersStore.$state.user.email
    }
  })
})

const logout = async () => {
  await authStore.logout();
}
</script>

<template>
  <div class="p-8 space-y-6">
    <h1 class="text-2xl">Hi, <span class="font-bold">{{ email }}</span></h1>
    <button @click="logout"
      class="px-4 py-2 transition border rounded hover:bg-green-500 hover:text-white hover:border-green-500">Chiqish</button>
  </div>
</template>