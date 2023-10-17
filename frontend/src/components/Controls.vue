<template>
  <div class="controls_container">
    <div class="controls">
      <Select v-model="selectedOption"
              :options="sortOptions" />
      <Button :loading="amoStore.loading"
              :disabled="!selectedOption"
              @click="saveEntity">Сохранить</Button>
    </div>
    <div v-if="amoStore.error" class="error_msg">{{amoStore.error}}</div>
  </div>
</template>

<script setup lang="ts">
import Select from '@/components/ui/Select.vue'
import Button from '@/components/ui/Button.vue'
import {ref} from 'vue'
import {useAmoStore} from '@/stores/amoStore'
import {ISortOptions} from '@/types'

const amoStore = useAmoStore()
const selectedOption = ref('')
const sortOptions = ref<ISortOptions[]>([
  {value: '', name: 'Не выбрано', disabled: true},
  {value: 'leads', name: 'Сделка'},
  {value: 'contacts', name: 'Контакт'},
  {value: 'companies', name: 'Компания'}
])

const saveEntity = () => {
  amoStore.createEntity({
    entity: selectedOption.value,
    entityName: sortOptions.value.filter(item => item.value === selectedOption.value)[0].name
  })
}
</script>

<style scoped>
.controls_container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 270px;
  margin: 0 auto;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.error_msg {
  color: hsl(0, 100%, 67%);
}
</style>
