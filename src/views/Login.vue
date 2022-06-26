<script setup></script>

<template>
  <div class="w-full min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center px-8">
    <div class="w-[32rem] h-auto px-8 py-6 bg-white rounded space-y-6">
      <div class="flex flex-col justify-start items-center space-y-3">
        <h1 class="text-2xl font-bold">Tizimga kirish</h1>
        <p>Hali yangimisiz? <RouterLink to="/register" class="text-blue-500 underline cursor-pointer">Ro'yhatdan o'tish</RouterLink></p>
      </div>
      <form class="flex flex-col space-y-3">
        <input class="w-full h-12 px-6 border rounded outline-none focus:border-blue-500" type="text" placeholder="Email">
        <input class="w-full h-12 px-6 border rounded outline-none focus:border-blue-500" type="text" placeholder="Parol">
        <button class="w-full h-12 mx-auto px-0 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded text-xl">Kirish</button>
      </form>
    </div>
  </div>
</template>