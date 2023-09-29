<script setup>
  import { defineEmits } from "vue";
  const emit = defineEmits(['save-persons']);

  const savePersons = () => {
    emit('save-persons');
  }

</script>
<template>
  <button type="button" class="person__button person__save" @click="savePersons">Сохранить</button>
</template>
