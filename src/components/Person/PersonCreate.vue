<script setup>
    import PersonCreateHeading from "./PersonCreateHeading.vue";
    import PersonCreateList from "./PersonCreateList.vue";
    import PersonCreateSave from "./PersonCreateSave.vue";
    import { usePersonStore } from '../../stores/person';
    
    const store = usePersonStore()

    const savePersons = () => {
      store.savePersons();
    }
</script>

<template>
  <div class="person section">
    <div class="person__wrap wrap">
        <div class="person__container">
            <PersonCreateHeading />
            <PersonCreateList />
            <PersonCreateSave @save-persons="savePersons" />
        </div>
    </div>
  </div>
</template>