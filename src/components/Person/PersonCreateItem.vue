<script setup>
  import { reactive, watch } from "vue";

  const props = defineProps({
    child: {
      type: Object,
      required: true
    }
  })

  const childState = reactive({
    id: props.child.id,
    name: props.child.name,
    age: props.child.age,
    saved: props.child.saved
  });
  
  const emit = defineEmits(['remove-child', 'update-child']);

  const removeChild = () => {
    emit('remove-child', childState.id);
  }

  watch(() => props.child.saved, (newValue) => {
    childState.saved = newValue;
    emit('update-child', childState);
  });

</script>

<template>
  <div class="person__item">
    <div class="person__group person__group_self">
        <label class="person__group-label">Имя</label>
        <input type="text" class="person__input person__group-value" placeholder="Петр" v-model="childState.name" :readonly="childState.saved" />
    </div>
    <div class="person__group person__group_self">
        <label class="person__group-label">Возраст</label>
        <input type="number" class="person__input person__group-value" placeholder="10" v-model="childState.age" :readonly="childState.saved" />
    </div>
    <button class="person__button person__remove" @click="removeChild">Удалить</button>
  </div>
</template>
