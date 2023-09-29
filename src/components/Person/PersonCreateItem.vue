<script setup>
  import { reactive, defineEmits, watch } from "vue";

  const props = defineProps({
    person: {
      type: Object,
      required: true
    }
  })

  const personState = reactive({
    id: props.person.id,
    name: props.person.name,
    age: props.person.age,
    saved: props.person.saved
  });
  
  const emit = defineEmits(['remove-person', 'update-person']);

  const removePerson = () => {
    emit('remove-person', personState.id);
  }

  watch(() => props.person.saved, (newValue) => {
    personState.saved = newValue;
    emit('update-person', personState);
  });

</script>

<template>
  <div class="person__item">
    <div class="person__group person__group_self">
        <label class="person__group-label">Имя</label>
        <input type="text" class="person__input person__group-value" placeholder="Петр" v-model="personState.name" :readonly="personState.saved" />
    </div>
    <div class="person__group person__group_self">
        <label class="person__group-label">Возраст</label>
        <input type="number" class="person__input person__group-value" placeholder="10" v-model="personState.age" :readonly="personState.saved" />
    </div>
    <button class="person__button person__remove" @click="removePerson">Удалить</button>
  </div>
</template>
