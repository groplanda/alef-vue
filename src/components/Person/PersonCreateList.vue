<script setup>
    import PersonCreateItem from "./PersonCreateItem.vue";
    import { useChildStore } from '../../stores/childs';
    const store = useChildStore()

    const deleteChild = (id) => {
        store.deleteChild(id);
    }

    const updateChild = (child) => {
        store.updateChild(child);
    }
</script>

<template>
    <div class="person__list">
        <PersonCreateItem v-for="child in store.getChilds" :key="child.id" :child="child" @remove-child="deleteChild" @update-child="updateChild" />
    </div>
</template>
