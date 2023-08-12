import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../../../storyboard';
import {RouteProp} from '@react-navigation/native';

export type HomePageNavigationProp = NativeStackNavigationProp<ReBirthStationParamList, 'HomePage'>;

export type HomePageRouteProp = RouteProp<ReBirthStationParamList, 'HomePage'>;

export type HomePageProp = {
    navigation: HomePageNavigationProp;
    route: HomePageRouteProp;
}