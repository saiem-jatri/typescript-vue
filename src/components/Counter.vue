<script setup lang="ts">
import {ref} from "vue";

const count = ref<number>(0)
const increment:any =()=>{
    count.value++
}

defineExpose({
  count,increment
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>