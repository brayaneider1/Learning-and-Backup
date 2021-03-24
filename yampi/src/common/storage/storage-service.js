import AsyncStorage from '@react-native-community/async-storage';


export const StorageService = {

  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // To-Do saving error
    }
  },
  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value;
    } catch(e) {
      // To-Do error reading value
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // To-Do remove error
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // To-Do clear error
    }
  }

};