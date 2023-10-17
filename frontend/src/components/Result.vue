<script setup lang="ts">
import {IEntity} from '@/types'

defineProps<{
  entity: IEntity
}>()
</script>

<template>
  <div class="result">
    <div>{{entity.id}}</div>
    <div>{{entity.type}}</div>
  </div>
</template>

<style scoped>
.result {
  display: flex;
  padding: 7px 18px;
  font-weight: 300;
  width: fit-content;
  color: #ffffff;
  user-select: none;
  border-radius: 50px;
  background-color: var(--primary-color);
  gap: 10px;
}
.result:hover {
   background-color: var(--primary-color-hover);
 }
</style>
