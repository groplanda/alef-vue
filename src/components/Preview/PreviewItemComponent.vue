<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        child: {
            type: Object,
            required: true
        }
    })
    const fullName = computed(() => {
        return `${props.child.name}, ${props.child.age} лет`
    })
</script>

<template>
    <div class="preview__persons-item">
        <p class="preview__name preview__name_black">{{fullName}}</p>
    </div>
</template>