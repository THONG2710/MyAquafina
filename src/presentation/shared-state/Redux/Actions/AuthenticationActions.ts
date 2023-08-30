import { createAction } from "@reduxjs/toolkit";

const Login = createAction<boolean, 'authentication/login'>('authentication/login');

const checkOTP = createAction<boolean, 'authentication/checkOTP'>('authentication/checkOTP');

export {Login, checkOTP}