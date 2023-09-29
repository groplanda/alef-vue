<script setup>
    import PersonCreateItem from "./PersonCreateItem.vue";
    import { usePersonStore } from '../../stores/person';
    const store = usePersonStore()

    const removePerson = (id) => {
        store.deletePerson(id);
    }

    const updatePerson = (person) => {
        store.updatePerson(person);
    }
</script>

<template>
    <div class="person__list">
        <PersonCreateItem v-for="person in store.getPersons" :key="person.id" :person="person" @remove-person="removePerson" @update-person="updatePerson" />
    </div>
</template>
