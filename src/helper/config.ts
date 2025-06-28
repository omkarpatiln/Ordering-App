// import Config from 'react-native-config';

import Config from "react-native-config";

export const API_BASE_URL: string = 'https://www.commercloud.com';
export const BUCKET_URL: string =  Config.ENV_MODE === "development" ?
  'https://showshaldev3.s3.eu-west-2.amazonaws.com' : 'https://showshalprods3.s3.eu-west-2.amazonaws.com'; //'https://showshalpreprods.s3.eu-west-2.amazonaws.com'; //Config.APP_BUCKET_URL!;
// export const STRIPE_PUBLISH_KEY: string = Config.APP_STRIPE_PUBLISH_KEY!;

export const FIREBASE_CLIENT_ID: string =
  '797078684377-ko42r327j5cc7rf30cqcbceng3062kn6.apps.googleusercontent.com';

  export const S3_BUCKET_URL: string =
  'https://showshaldev3.s3.eu-west-2.amazonaws.com'; 
