<script setup>
import TheLoader from '../components/TheLoader.vue';
import { ref } from 'vue';
import { useAuthStore } from '../stores';
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Parol bir-biriga mos emas! Qayta kiriting')
    return;
  }
  await authStore.register(email.value, password.value);
}
</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen px-8 bg-gradient-to-r from-sky-500 to-indigo-500">
    <div class="w-[32rem] h-auto px-8 py-6 bg-white rounded space-y-6">
      <div class="flex flex-col items-center justify-start space-y-3">
        <h1 class="text-2xl font-bold">Ro'yhatdan o'tish</h1>
        <p>Oldin ro'yhatdan o'tganmisiz? <RouterLink to="/login" class="text-blue-500 underline cursor-pointer">Kirish</RouterLink></p>
      </div>
      <form @submit.prevent="register" class="flex flex-col space-y-3">
        <input v-model="email" class="w-full h-12 px-6 border rounded outline-none focus:border-blue-500" type="text" placeholder="Email">
        <input v-model="password" class="w-full h-12 px-6 border rounded outline-none focus:border-blue-500" type="password" placeholder="Parol">
        <input v-model="confirmPassword" class="w-full h-12 px-6 border rounded outline-none focus:border-blue-500" type="password" placeholder="Parolni qayta kiriting">
        <button type="submit" class="w-full h-12 px-0 mx-auto text-xl text-white rounded bg-gradient-to-r from-sky-500 to-indigo-500">Ro'yhatdan o'tish</button>
      </form>
      <TheLoader v-if="authStore.$state.loading" />
    </div>
  </div>
</template>