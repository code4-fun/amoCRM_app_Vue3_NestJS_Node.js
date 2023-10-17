<script setup lang="ts">
const emits = defineEmits<{
  'update:modelValue': [value: string]
}>()

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  name: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String
  }
})

const updateValue = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
      class="custom_input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder='placeholder'
      :value='modelValue'
      @input='updateValue'>
</template>

<style scoped>
.custom_input {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  padding: 8px;
}
</style>
