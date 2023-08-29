import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";
import { RouteProp } from "@react-navigation/native";

export type PureChartNavigationProp = NativeStackNavigationProp<DrawerStoryBoard, 'PureChart'>;

export type PureChartRouteProp = RouteProp<DrawerStoryBoard, 'PureChart'>;

export type PureChartProp = {
    navigation: PureChartNavigationProp,
    route: PureChartRouteProp,
}