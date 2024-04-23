<script setup lang="ts">
import {ref} from "vue";
import Counter from '@/components/Counter.vue'
const counter = ref<number>(null)
const reset:any =()=>{
  counter.value.count = 0
}
</script>

<template>
  <div>
   <Counter ref="counter" />
    <button @click="reset">-1</button>
  </div>
</template>