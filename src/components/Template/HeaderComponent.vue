<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header section">
    <div class="header__wrap">
        <RouterLink to="/" class="header__logo">
            <img alt="Alef" class="header__logo-src" src="@/assets/logo.svg"  />
        </RouterLink>
        <nav class="header__nav">
            <RouterLink to="/" class="header__nav-link">Форма</RouterLink>
            <RouterLink to="/preview" class="header__nav-link">Превью</RouterLink>
        </nav>
    </div>
  </header>
</template>
