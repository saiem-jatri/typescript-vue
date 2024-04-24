<script setup lang="ts">

const modelValue = defineModel<string>('modelValue',{
  required: true,
});
</script>

<template>
  <div>
    <input type="text" v-model="modelValue">
  </div>
</template>