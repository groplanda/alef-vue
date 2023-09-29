<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        person: {
            type: Object,
            required: true
        }
    })
    const fullPerson = computed(() => {
        return `${props.person.name}, ${props.person.age} лет`
    })
</script>

<template>
    <div class="preview__persons-item">
        <p class="preview__name preview__name_black">{{fullPerson}}</p>
    </div>
</template>