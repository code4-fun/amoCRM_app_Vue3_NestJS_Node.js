<script setup lang="ts">
import Result from '@/components/Result.vue'
import {useAmoStore} from '@/stores/amoStore'

const amoStore = useAmoStore()
</script>

<template>
  <div class="results">
    <Result v-for="entity of amoStore.entities"
            :key="entity.id"
            :entity="entity" />
  </div>
</template>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
</style>
