import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type PureMapNavigationProp = NativeStackNavigationProp<DrawerStoryBoard, 'PureMap'>;

export type PureMapRouterProp = RouteProp<DrawerStoryBoard, 'PureMap'>;

export type PureMapProp = {
    navigation: PureMapNavigationProp,
    route: PureMapRouterProp,
}