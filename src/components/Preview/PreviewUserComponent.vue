<script setup>
    import { computed } from 'vue'
    
    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    })
    
    const fullName = computed(() => {
        return `${props.user.name}, ${props.user.age} лет`
    })
</script>

<template>
    <div class="preview__about">
        <p class="preview__title">Персональные данные</p>
        <p class="preview__name">{{fullName}}</p>
    </div>
</template>