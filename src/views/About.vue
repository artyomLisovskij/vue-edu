<template>
  <div class="about">
    <h1>{{ $route.params.name }}</h1>
    {{ $store.getters.getStatusByName($route.params.name) }}
  </div>
</template>
