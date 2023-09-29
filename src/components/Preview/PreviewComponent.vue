<script setup>
    import { computed } from 'vue'
    import PreviewItemComponent from "./PreviewItemComponent.vue";
    import PreviewUserComponent from "./PreviewUserComponent.vue";
    
    import { useChildStore } from '../../stores/childs';
    const store = useChildStore()
    
    const savedChilds = computed(() => {
        return store.getSavedChilds;
    })
</script>

<template>
    <section class="section preview">
        <div class="preview__wrap wrap">
            <div class="preview__container">
                <PreviewUserComponent :user="store.getUser" />
                <div class="preview__persons" v-if="savedChilds.length > 0">
                    <p class="preview__title">Дети</p>
                    <div class="preview__persons-list">
                        <PreviewItemComponent v-for="child in savedChilds" :key="child.id" :child="child" />
                    </div>
                </div>
                <div class="preview__persons" v-else>Дети не добавлены</div>
            </div>
        </div>
  </section>
</template>
