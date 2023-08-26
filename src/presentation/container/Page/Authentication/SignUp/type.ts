import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationParamList } from "../../../../storyboard/AuthenticationStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type SignUpNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'SignUp'>;

export type SignUpRouteProp = RouteProp<AuthenticationParamList, 'SignUp'>;

export type SignUpProps = {
    navigation: SignUpNavigationProp;
    route: SignUpRouteProp;
}
