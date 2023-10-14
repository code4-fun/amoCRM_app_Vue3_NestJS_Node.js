<script  setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: String
  }
})

const changeHandler = e => {
  emits('update:modelValue', e.target.value)
}
</script>

<template>
  <select :value="modelValue"
          @change="changeHandler"
          class='custom_select'>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        class='custom-option'>
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.custom_select{
  width: 160px;
  border: 2px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  padding: 8px;
  cursor: pointer;
}
</style>
