import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";

export type PureWorldNavigationProp = NativeStackNavigationProp<DrawerStoryBoard,'PureWorld'>;

export type PureWorldRouterProp = RouteProp<DrawerStoryBoard, 'PureWorld'>;

export type PureWorldProp = {
    navigation: PureWorldNavigationProp;
    route: PureWorldRouterProp;
}