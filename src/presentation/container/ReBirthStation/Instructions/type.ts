import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { ReBirthStationParamList } from '../../../storyboard';
import {RouteProp} from '@react-navigation/native';

export type InstructionsNaviagtionProps = NativeStackNavigationProp<ReBirthStationParamList, 'Instructions'>;

export type InstructionsRouteProps = RouteProp<ReBirthStationParamList, 'Instructions'>;

export type InstructionsProps = {
    navigation: InstructionsNaviagtionProps;
    route: InstructionsRouteProps;
}