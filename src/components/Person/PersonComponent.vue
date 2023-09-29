<script setup>
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })
</script>

<template>
  <div class="person section">
    <div class="person__wrap wrap">
        <div class="person__container">
            <p class="person__title">Персональные данные</p>
            <div class="person__info">
                <div class="person__group person__group_full">
                    <p class="person__group-label">Имя</p>
                    <input type="text" class="person__input person__group-value" placeholder="Петр" v-model="user.name" />
                </div>
                <div class="person__group person__group_full">
                    <p class="person__group-label">Возраст</p>
                     <input type="number" class="person__input person__group-value" placeholder="99" v-model="user.age" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>