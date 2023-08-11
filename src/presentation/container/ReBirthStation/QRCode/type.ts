import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../../../storyboard';
import {RouteProp} from '@react-navigation/native';

export type QRCodeNavigationProp = NativeStackNavigationProp<ReBirthStationParamList, 'QRCode'>;

export type QRCodeRouteProp = RouteProp<ReBirthStationParamList, 'QRCode'>;

export type QRCodeProp = {
    navigation: QRCodeNavigationProp;
    route: QRCodeRouteProp;
}