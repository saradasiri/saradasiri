export const API_PATHS = {
  LOGIN: `http://134.209.96.231/api/auth/signin`,
  SIGNUP: `http://134.209.96.231/api/auth/signup`,
  VALIDATE_OTP: `http://134.209.96.231/api/verifyOTP`,
  FORGET: `http://134.209.96.231/api/get-password-reset-link/`,
  RESEND_OTP: `http://134.209.96.231/api/auth/resendOTP/`,
  CREATE_PROFILE: `http://134.209.96.231/api/profile/create/`,
  FETCH_PROFILE: `http://134.209.96.231/api/profile/get-by-email`,
  VALIDATE_PASSWORD: `http://134.209.96.231/api/investor/validate-password/`,
  SEND_OTP: `http://134.209.96.231/api/sendOTP`,
  VERIFY_OTP: `http://134.209.96.231/api/verifySmsOTP`,
  MARKET_DATA: `http://134.209.96.231/api/wallet-coins/marketdata`,
  EXISTENCE_OF_WALLET: `http://134.209.96.231/wallet/User/check-existance-of-wallet/`,
  WALLET_SIGNUP : `http://134.209.96.231/wallet/User/auth/signUp`,
  WALLET_SIGNIN : `http://134.209.96.231/wallet/User/auth/signIn`,
  CREATE_WALLET :`http://134.209.96.231/wallet/vdc/create/wallet`,
  GET_BALANCES :`http://134.209.96.231/wallet/vdc/get/balances`
};
