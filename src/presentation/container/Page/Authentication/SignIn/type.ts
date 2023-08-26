import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import { AuthenticationParamList } from '../../../../storyboard/AuthenticationStoryBoard';

export type SignInNavigationProp = NativeStackNavigationProp<AuthenticationParamList, 'SignIn'>;

export type SignInRouteProp = RouteProp<AuthenticationParamList, 'SignIn'>;

export type SingInProp = {
    navigation: SignInNavigationProp;
    route: SignInRouteProp;
}