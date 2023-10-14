<template>
  <div class="main_page">
    <Controls />
    <Results />
  </div>
</template>

<script setup lang="ts">
import Controls from '@/components/Controls.vue'
import Results from '@/components/Results.vue'
</script>

<style scoped>
.main_page {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
</style>
