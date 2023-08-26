import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerStoryBoard } from "../../../../storyboard/DrawerStoryBoard";
import { RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export type HomeMainNavigationProp = DrawerNavigationProp<DrawerStoryBoard, 'HomePage'>;

export type HomeMainRouteProp = RouteProp<DrawerStoryBoard, 'HomePage'>;

export type HomeMainProp = {
    navigation: HomeMainNavigationProp;
    route: HomeMainRouteProp;
}