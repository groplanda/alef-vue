<script setup>
    import { computed } from 'vue'
    import PreviewItemComponent from "../Preview/PreviewItemComponent.vue";
    import { usePersonStore } from '../../stores/person';
    const store = usePersonStore()
    
    const savedPersons = computed(() => {
        return store.getSavedPersons;
    })
</script>

<template>
    <section class="section preview">
        <div class="preview__wrap wrap">
            <div class="preview__container">
                <div class="preview__about">
                    <p class="preview__title">Персональные данные</p>
                    <p class="preview__name">Василий, 30 лет</p>
                </div>
                <div class="preview__persons" v-if="savedPersons.length > 0">
                    <p class="preview__title">Дети</p>
                    <div class="preview__persons-list">
                        <PreviewItemComponent v-for="person in savedPersons" :key="person.id" :person="person" />
                    </div>
                </div>
                <div class="preview__persons" v-else>Дети не добавлены</div>
            </div>
        </div>
  </section>
</template>
