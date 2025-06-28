import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosProgressEvent} from 'axios';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';

// export const BASE_URL: string = 'http://192.168.29.141:2001/';
// export const API_KEY: string = 'PiuRcts9gYsh8CMwAIwApvNL4PayKIaR';
// export const APPLICATION_KEY: string = '0vGdJAP307JqaNYP';
// export const IMAGE_URL: string = BASE_URL + 'static/';

// testing server
export const BASE_URL = 'https://commercloud.com/';
export const API_KEY = 'Hw28hh3Sl8iDL4HpBnq1dzozaGsu9nWh';
export const APPLICATION_KEY = 'ewr9DpnLLqMOp9D3';
export const IMAGE_URL: string = BASE_URL + 'static/';

//Live Server
// export const BASE_URL = 'http://12dimension.uvtechsoft.com:9889/';
// export const API_KEY = 'PiuRcts9gYsh8CMwAIwApvNL4PayKIaR';
// export const APPLICATION_KEY = '0vGdJAP307JqaNYP';
// export const IMAGE_URL: string = BASE_URL + 'static/';

export const apiSimpleGet = async (endpoint: string) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const deviceId = await DeviceInfo.getUniqueId();

    // Default headers
    const headers = {
      // 'Content-Type': 'application/json',
      // Accept: 'application/json',
      // apikey: API_KEY,
      // deviceid: deviceId,
      // token: token || 'iojhiojhojj',
    };

    const response = await axios.get(`${BASE_URL}${endpoint}`, {headers});

    if (response.status === 200) {
      return response.data;
    } else {
      console.warn('Error:', response.data);
      return {code: response.status, message: response.statusText};
    }
  } catch (error) {
    console.error('Request failed:', error);
    return {code: 999, message: error.message};
  }
};

export const apiPost = async (method: string, data: any) => {
  try {
    const start = new Date();
    const token = await AsyncStorage.getItem('token');
    const deviceId = await DeviceInfo.getUniqueId();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      apikey: API_KEY,
      deviceid: deviceId,
      token: token ? token : 'iojhiojhojj',
    };
    let body = JSON.stringify(data);
    const response = await axios(`${BASE_URL}${method}`, {
      method: 'POST',
      headers,
      data,
    });
    if (!response) {
      return {code: 999, message: 'Response not found'};
    }
    const result = await response.data;
    if (result.code !== 200) {
      console.warn(
        `Error: ${BASE_URL}${method}`,
        moment(new Date()).diff(start, 'milliseconds'),
        body,
        result,
      );
    } else {
      console.log(
        `success: ${BASE_URL}${method}`,
        moment(new Date()).diff(start),
        data,
      );
    }
    return result;
  } catch (err) {
    console.warn(`Route Not Found: ${BASE_URL}${method}`, err);
    return {code: 999, message: '' + err};
  }
};
export const apiPut = async (method: string, data: any) => {
  try {
    const token = await AsyncStorage.getItem('token');

    // const sessionKey = await AsyncStorage.getItem('chat_sessionKey');
    const deviceId = await DeviceInfo.getUniqueId();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      apikey: API_KEY,
      deviceid: deviceId,
      token: token ? token : '',
      // sessionKey: sessionKey ? sessionKey : '',
    };
    let body = JSON.stringify(data);
    const response = await axios(`${BASE_URL}${method}`, {
      method: 'PUT',
      headers,
      data,
    });
    // const result = await response.json();
    const result = await response.data;
    if (result.code !== 200) {
      console.warn(`Error: ${BASE_URL}${method}`, body, result, headers);
    } else {
      console.log(`success: ${BASE_URL}${method}`, body);
    }
    return result;
  } catch (err) {
    console.warn(`Route Not Found: ${BASE_URL}${method}`, err);
    return {code: 999, message: '' + err};
  }
};
export const apiUpload = async (
  method: string,
  file: {uri: string; name: string | any; type: string | any},
  onProgress?: (event: AxiosProgressEvent) => void,
) => {
  try {
    const start = new Date();
    const token = await AsyncStorage.getItem('token');
    const deviceId = await DeviceInfo.getUniqueId();
    let data = new FormData();
    data.append('Image', {
      uri: file.uri,
      type: file.type,
      name: file.name,
    });
    let headers = {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      apikey: API_KEY,
      deviceid: deviceId,
      token: token ? token : '',
      // sessionKey: sessionKey ? sessionKey : '',
    };
    const res = await axios(BASE_URL + method, {
      method: 'POST',
      headers,
      data,
      onUploadProgress: event => {
        onProgress ? onProgress(event) : null;
      },
    });
    // let result = await res.json();
    let result = await res.data;
    if (result.code !== 200) {
      console.warn(
        `Error: ${BASE_URL}${method}`,
        moment(new Date()).diff(start, 'milliseconds'),
        file,
        result,
      );
    } else {
      console.log(
        `success: ${BASE_URL}${method}`,
        moment(new Date()).diff(start),
        file,
      );
    }
    return result;
  } catch (err) {
    console.warn('upload error', err);
  }
};
export const apiDownload = async (
  method: string,
  progress: (progress: any) => void,
  path: string,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    // const sessionKey = await AsyncStorage.getItem('chat_sessionKey');
    const deviceId = await DeviceInfo.getUniqueId();
  } catch (err) {
    console.warn(err);
  }
};
