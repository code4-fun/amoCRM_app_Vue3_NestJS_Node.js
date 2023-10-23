import {makeRequest} from "./index"

export function createEntityApi(entity){
  return makeRequest(`api/${entity}`, {
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  })
}
