import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type OTPNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'OTP'>;

export type OTPRouteProp = RouteProp<AuthenticationParamList, 'OTP'>;

export type OTPProp = {
    navigation: OTPNavigationProp;
    route: OTPRouteProp;
}