import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

const useGetAsyncStorage = (key: any) => {
  const [soId, setSoId] = useState<any>('');

  const getSoid = async () => {
    let id = await AsyncStorage.getItem(key);
    setSoId(id);
  };
  useEffect(() => {
    getSoid();
  }, []);

  return soId;
};

export default useGetAsyncStorage;
