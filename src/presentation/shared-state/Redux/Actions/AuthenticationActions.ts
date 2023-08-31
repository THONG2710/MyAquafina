import { createAction } from "@reduxjs/toolkit";

const Login = createAction<boolean, 'authentication/login'>('authentication/login');

const checkOTP = createAction<boolean, 'authentication/checkOTP'>('authentication/checkOTP');

const showModalLogin = createAction<boolean, 'authentication/showModalLogin'>('authentication/showModalLogin');

const getMyPlace = createAction<number, 'authentication/getMyPlace'>('authentication/getMyPlace');

export {Login, checkOTP, showModalLogin, getMyPlace}