import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";
import { RouteProp } from "@react-navigation/native";


export type PureCoinNavigationProp = NativeStackNavigationProp<DrawerStoryBoard, 'PureCoin'>;

export type PureCoinRouteProp = RouteProp<DrawerStoryBoard, 'PureCoin'>;

export type PureCoinProp = {
    navigation: PureCoinNavigationProp,
    route: PureCoinRouteProp,
} 