import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type PureGiftNavigationProp = NativeStackNavigationProp<DrawerStoryBoard, 'PureGift'>;

export type PureGiftRouterProp = RouteProp<DrawerStoryBoard, 'PureGift'>;

export type PureGiftProp = {
    navigation: PureGiftNavigationProp,
    route: PureGiftRouterProp,
}