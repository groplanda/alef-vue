<script setup>
  import PersonComponent from "../components/Person/PersonComponent.vue";
  import PersonCreate from "../components/Person/PersonCreate.vue";
  import PersonSave from "../components/Person/PersonSave.vue";
  import { useChildStore } from '../stores/childs';
  import { reactive } from "vue";
  const store = useChildStore()
  const user = store.getUser; 
  
  const userState = reactive({
        name: user.name,
        age: user.age,
  });

  const onSave = () => {
    store.saveChilds();
    store.updateUser(userState);
  }

</script>

<template>
  <form class="main" @submit.prevent="onSave">
    <PersonComponent :user="userState" />
    <PersonCreate />
    <PersonSave />
  </form>
</template>
