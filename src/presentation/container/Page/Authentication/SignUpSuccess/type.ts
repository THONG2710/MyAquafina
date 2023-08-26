import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard";
import { RouteProp } from "@react-navigation/native";

export type SignUpSuccessNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'SignUpSuccess'>;

export type SignUpSuccessRouteProp = RouteProp<AuthenticationParamList, 'SignUpSuccess'>;

export type SignUpSuccessProp = {
    navigation: SignUpSuccessNavigationProp;
    route: SignUpSuccessRouteProp;
}