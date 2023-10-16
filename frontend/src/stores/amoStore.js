import {defineStore} from 'pinia'
import {ref} from 'vue'
import {createEntityApi} from '../api/amocrm'

export const useAmoStore = defineStore('amoStore', () => {
  const entities = ref([])
  const loading = ref(false)
  const error = ref('')

  const createEntity = async({entity, entityName}) => {
    try{
      loading.value = true
      const res = await createEntityApi(entity)
      entities.value.unshift({
        id: res,
        type: entityName
      })
      error.value = ''
    } catch(e){
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return {
    entities,
    loading,
    error,
    createEntity
  }
})
