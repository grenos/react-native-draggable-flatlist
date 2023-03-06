import React from "react";
import Animated, { WithSpringConfig } from "react-native-reanimated";
import { CellData, DraggableFlatListProps } from "../types";
import { FlashList } from "@shopify/flash-list";
declare type RefContextValue<T> = {
  propsRef: React.MutableRefObject<DraggableFlatListProps<T>>;
  animationConfigRef: React.MutableRefObject<WithSpringConfig>;
  cellDataRef: React.MutableRefObject<Map<string, CellData>>;
  keyToIndexRef: React.MutableRefObject<Map<string, number>>;
  containerRef: React.RefObject<Animated.View>;
  flatlistRef: React.RefObject<FlashList<T>> | React.ForwardedRef<FlashList<T>>;
  scrollViewRef: React.RefObject<Animated.ScrollView>;
};
export default function RefProvider<T>({
  children,
  flatListRef,
}: {
  children: React.ReactNode;
  flatListRef?: React.ForwardedRef<FlashList<T>> | null;
}): JSX.Element;
export declare function useRefs<T>(): RefContextValue<T>;
export {};
