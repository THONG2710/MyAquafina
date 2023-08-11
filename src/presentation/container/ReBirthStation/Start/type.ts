import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../../../storyboard';
import {RouteProp} from '@react-navigation/native';

export type StartNavigationProp = NativeStackNavigationProp<ReBirthStationParamList>;

export type StartRouteProp = RouteProp<ReBirthStationParamList, 'Start'>;

export type StartProps = {
    navigation: StartNavigationProp;
    route: StartRouteProp;
}