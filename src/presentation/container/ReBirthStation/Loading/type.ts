import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../../../storyboard';
import {RouteProp} from '@react-navigation/native';

export type LoadingNavigationProp = NativeStackNavigationProp<ReBirthStationParamList, 'Loading'>;

export type LoadingRouteProp = RouteProp<ReBirthStationParamList, 'Loading'>;

export type LoadingProp = {
    navigation: LoadingNavigationProp;
    route: LoadingRouteProp;
}