import { API_URL } from '../config/Environments';
import { StorageService } from '../storage/storage-service';

export class ApiService {
  
    async post(endpoint, data) {
      const token = await StorageService.getItem('token');
      return fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(response => {
        return response.json().then(body => {
          if (response.status === 200) {
            return body
          } else {
            throw Error(body.message)
          }
        })
      })
    }

    async get(endpoint, data) {
      const token = await StorageService.getItem('token');
        return fetch(`${API_URL}/${endpoint}`, {
          method: 'GET',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        })
        .then(response => {
          return response.json().then(body => {
            if (response.status === 200) {
              return body
            } else {
              throw Error(body.message)
            }
          })
        })
      }
}

export default new ApiService();