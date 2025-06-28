/**
 * Helpers Functions
 */
import moment from 'moment';
import React from 'react';
import Toast from 'react-native-root-toast';
import {NavigationProp} from '@react-navigation/native';
import {logoutAction} from '../redux-toolkit/slices/authSlice';
import {removeSelectedAddressAction} from '../redux-toolkit/slices/addressSlice';
import {emptyCartAction} from '../redux-toolkit/slices/cartSlice';
import {Route} from '../navigation/routeEnum';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * All global constants
 */
export const navigationRef = React.createRef() as any;
export const GOOGLE_MAP_API_KEY = 'Google map api key here';
export const DEFAULT_IMG =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

/**
 * Text Truncate
 */
export function textTruncate(str: string, length: number, ending: string) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

/**
 * Get Date
 */
export function getTheDate(timestamp: number, format: string) {
  let time = timestamp * 1000;
  let formatDate = format ? format : 'MM-DD-YYYY';
  return moment(time).format(formatDate);
}

/**
 * Convert Date To Timestamp
 */
export function convertDateToTimeStamp(date: any, format: string) {
  let formatDate = format ? format : 'YYYY-MM-DD';
  return moment(date, formatDate).unix();
}

/**
 * Function to return current app layout
 */
export function getAppLayout(url: any) {
  let location = url.pathname;
  let path = location.split('/');
  return path[1];
}

export const validateImage = (file: any) => {
  if (!file.name.match(/\.(jpg|jpeg|png|gif|JPG)/)) {
    return true;
  }
};

/**
 * All navigation functions
 */
export const moveScreenBack = (navigation: any) => {
  return navigation.goBack();
};

export const moveScreen = (
  navigation: any,
  screenName: string,
  extraData?: object,
) => {
  console.log('extr', extraData);
  return navigation.navigate(screenName, {...extraData});
};

export const moveScreenToTop = (navigation: any) => {
  return navigation.popToTop();
};

export const pushScreen = (
  navigation: any,
  screenName: string,
  extraData?: object,
) => {
  return navigation.push(screenName, {...extraData});
};

export const replaceScreen = (
  navigation: any,
  screenName: string,
  extraData?: object,
) => {
  return navigation.replace(screenName, {...extraData});
};

export const resetStack = (navigation: any, screenName: string) => {
  return navigation.reset({
    index: 0,
    routes: [
      {
        name: screenName,
      },
    ],
  });
};

export const toggleDrawer = (navigation: any) => {
  return navigation.toggleDrawer();
};

// export function navigate(name:string, params:object) {
//   console.log(navigationRef);
//   navigationRef.current?.navigate(name, params);
// }
// export function push(...args: any[]) {
//   console.log(navigationRef);
//   navigationRef.current?.dispatch(StackActions.push(...args));
// }

/**
 * Function to check validation
 */
export const validate = (val: any, rules: any, connectedValue: any) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      case 'checkPassword':
        isValid = isValid && passwordCheck(val);
        break;
      case 'notEmpty':
        isValid = isValid && notEmptyValidator(val);
        break;
      case 'nameValid':
        isValid = isValid && nameValidator(val);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
};

/**
 * Function to validate text
 */
export const validateText = (val: any, rules: any, connectedValue: any) => {
  let isValid = val;
  for (let rule in rules) {
    switch (rule) {
      case 'onlyAcceptNumbers':
        isValid = isValid && onlyAcceptNumber(val);
        break;
      case 'dontAcceptFirstLetterAsZero':
        isValid = isValid && dontAcceptFirstLetterAsZero(val);
        break;
      default:
        isValid = val;
    }
  }
  return isValid;
};

/**
 * Function to validate email or phone input
 */
export const validateEmailOrPhoneInput = (
  inputValue: any,
  setEmailOrPhone: (inputType: string) => void,
) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^[0-9]{10}$/;
  if (emailRegex.test(inputValue)) {
    setEmailOrPhone('email');
    return true;
  } else if (phoneRegex.test(inputValue)) {
    setEmailOrPhone('phone');
    return true;
  } else {
    return false;
  }
};

/**
 * Function to validate email
 */
export const emailValidator = (val: any) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val,
  );
};

/**
 * Function to validate minimum length
 */
const minLengthValidator = (val: any, minLength: number) => {
  return val.length >= minLength;
};

/**
 * Function to validate equal to
 */
const equalToValidator = (val: any, checkValue: any) => {
  return val === checkValue;
};

/**
 * Function to accept number
 */
const onlyAcceptNumber = (val: any) => {
  return val.replace(/[^0-9]/g, '');
};

/**
 * Function to don't accept first letter zero
 */
const dontAcceptFirstLetterAsZero = (val: any) => {
  let checkZero = val.replace(/^0+(?=\d)/, '');
  return checkZero.replace(/[^0-9]/g, '');
};

/**
 * Function to validate not empty
 */
const notEmptyValidator = (val: any) => {
  return val.trim() !== '';
};

/**
 * Function to validate password
 */
const passwordCheck = (val: any) => {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (val.match(passw)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Function to validate name
 */
const nameValidator = (val: any) => {
  return /^[0-9a-zA-Z \b]+$/.test(val);
};

/**
 * Function to show toast
 */
const showToast = (string: string) => {
  Toast.show(string, {animation: true, shadow: true});
};

export const setAsyncStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getAsyncStorage = async (key: string) => {
  let data = await AsyncStorage.getItem(key);
  return data ? data : '';
};

export const toastNotify = (message: string, status: string) => {
  Toast.show(message, {
    duration: 3000,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: 'white',
    textColor: status == 'success' ? 'green' : 'red',

    // opacity: 0.3,
  });
};

/**
 * Function to logout from app
 */
export const logoutFromApp = (
  props: NavigationProp<any, any>,
  dispatch: any,
) => {
  dispatch(logoutAction());
  dispatch(removeSelectedAddressAction());
  dispatch(emptyCartAction());
  resetStack(props, Route.MobileLogin);
};

export const mobileNoValidator = (val: string) => {
  return /^\d+$/.test(val);
};

export const pinCodeValidator = (val: string) => {
  return /^[a-zA-Z0-9]+$/.test(val);
};

export const checkImageValidator = (val: string) => {
  return /\.(jpeg|jpg|gif|png)$/i.test(val);
};

export const checkValidVideoUrl = (val: string) => {
  const videoFileExtensions = /\.(mp4|avi|mov|mkv|flv|wmv|webm)$/i;
  return videoFileExtensions.test(val);
};

export const hashtagRegex = /#(\w+)/g;

export const myMentionRegex = /@\[[^\]]+\]\([^)]+\)/g;
export const myHashtagRegex = /#\[[^\]]+\]\([^)]+\)/g;

export const containsSpecialCharactersOrNumbers = (val: string) => {
  const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
  return pattern.test(val);
};
