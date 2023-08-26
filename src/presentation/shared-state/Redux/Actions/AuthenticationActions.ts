import { createAction } from "@reduxjs/toolkit";

const Login = createAction<boolean, 'authentication/login'>('authentication/login');

export {Login, }