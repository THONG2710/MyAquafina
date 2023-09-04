export type AuthenticationParamList = {
    SignIn: undefined,
    SignUp: undefined,
    OTP: {phoneNumber: string, isLogin: boolean, name: string},
    SignUpSuccess: undefined,
    Error: undefined,
    ReportError: undefined,
    PageDrawer: undefined,
}