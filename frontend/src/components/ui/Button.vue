<script setup lang="ts">
const emit = defineEmits(['click'])
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'normal'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  }
})

const clickHandler = () => {
  emit('click')
}
</script>

<template>
  <button :class="['custom_btn', `custom_btn_${color}`, {'custom_btn_large': size === 'large'}, {'loading': loading}]"
          :disabled="disabled || loading"
          @click="clickHandler">
    <div v-if="loading" class="loading"></div>
    <span v-else><slot></slot></span>
  </button>
</template>

<style scoped>
.custom_btn {
  height: 39px;
  width: fit-content;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
}
.custom_btn_primary {
  background: var(--primary-color);
}
.custom_btn_primary:hover {
  background: var(--primary-color-hover);
}
.custom_btn_danger {
  background: var(--danger-color);
}
.custom_btn_danger:hover {
  background: var(--danger-color-hover);
}
.custom_btn_large {
  height: 50px;
  font-size: 16px;
  padding: 0 15px;
}
.custom_btn[disabled]:not(.loading) {
  background-color: #e5e5e5;
  cursor: auto;
}
.custom_btn .loading {
  margin: 0 auto;
  width: 25px;
  height: 25px;
  border: 3px solid #fff;
  border-top: 3px solid var(--primary-color);
  border-right: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: rotate 1.5s linear infinite;
}
.custom_btn.custom_btn_danger .loading {
  border-top: 3px solid var(--danger-color);
  border-right: 3px solid var(--danger-color);
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
