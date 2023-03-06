import React from "react";
import Animated from "react-native-reanimated";
import { DraggableFlatListProps } from "../types";
import { FlashList, FlashListProps } from "@shopify/flash-list";
declare function DraggableFlatList<T>(
  props: DraggableFlatListProps<T>,
  ref?: React.ForwardedRef<FlashList<T>> | null
): JSX.Element;
declare const _default: <T>(
  props: Omit<
    FlashListProps<T>,
    | "keyExtractor"
    | "data"
    | "renderItem"
    | "estimatedItemSize"
    | "scrollEnabled"
    | "autoscrollThreshold"
    | "autoscrollSpeed"
    | "animationConfig"
    | "dragHitSlop"
    | "activationDistance"
    | "dragItemOverflow"
    | "containerStyle"
    | "debug"
    | "onDragBegin"
    | "onDragEnd"
    | "onPlaceholderIndexChange"
    | "onRelease"
    | "onScrollOffsetChange"
    | "renderPlaceholder"
    | "simultaneousHandlers"
    | "outerScrollOffset"
    | "onAnimValInit"
    | "itemEnteringAnimation"
    | "itemExitingAnimation"
    | "itemLayoutAnimation"
    | "enableLayoutAnimationExperimental"
    | "onContainerLayout"
  > & {
    data: T[];
    estimatedItemSize: number;
    activationDistance?: number | undefined;
    animationConfig?:
      | Partial<import("react-native-reanimated").WithSpringConfig>
      | undefined;
    autoscrollSpeed?: number | undefined;
    autoscrollThreshold?: number | undefined;
    containerStyle?: import("react-native").StyleProp<
      import("react-native").ViewStyle
    >;
    debug?: boolean | undefined;
    dragItemOverflow?: boolean | undefined;
    keyExtractor: (item: T, index: number) => string;
    onDragBegin?: ((index: number) => void) | undefined;
    onDragEnd?:
      | ((params: import("../types").DragEndParams<T>) => void)
      | undefined;
    onPlaceholderIndexChange?: ((placeholderIndex: number) => void) | undefined;
    onRelease?: ((index: number) => void) | undefined;
    onScrollOffsetChange?: ((scrollOffset: number) => void) | undefined;
    renderItem: import("../types").RenderItem<T>;
    renderPlaceholder?: import("../types").RenderPlaceholder<T> | undefined;
    simultaneousHandlers?: React.Ref<any> | React.Ref<any>[] | undefined;
    outerScrollOffset?: Animated.SharedValue<number> | undefined;
    onAnimValInit?:
      | ((animVals: {
          activeCellOffset: import("react-native-reanimated").SharedValue<number>;
          activeCellSize: import("react-native-reanimated").SharedValue<number>;
          activeIndexAnim: import("react-native-reanimated").SharedValue<number>;
          containerSize: import("react-native-reanimated").SharedValue<number>;
          disabled: import("react-native-reanimated").SharedValue<boolean>;
          horizontalAnim: import("react-native-reanimated").SharedValue<boolean>;
          hoverAnim: Readonly<Animated.SharedValue<number>>;
          hoverOffset: Readonly<Animated.SharedValue<number>>;
          isDraggingCell: Readonly<Animated.SharedValue<boolean>>;
          isTouchActiveNative: import("react-native-reanimated").SharedValue<boolean>;
          panGestureState: import("react-native-reanimated").SharedValue<
            import("react-native-gesture-handler").State
          >;
          placeholderOffset: import("react-native-reanimated").SharedValue<number>;
          resetTouchedCell: () => void;
          scrollOffset: import("react-native-reanimated").SharedValue<number>;
          scrollViewSize: import("react-native-reanimated").SharedValue<number>;
          spacerIndexAnim: import("react-native-reanimated").SharedValue<number>;
          touchPositionDiff: Readonly<Animated.SharedValue<number>>;
          touchTranslate: import("react-native-reanimated").SharedValue<number>;
          autoScrollDistance: Readonly<Animated.SharedValue<number>>;
          viewableIndexMin: import("react-native-reanimated").SharedValue<number>;
          viewableIndexMax: import("react-native-reanimated").SharedValue<number>;
        }) => void)
      | undefined;
    itemEnteringAnimation?:
      | import("react-native-reanimated").BaseAnimationBuilder
      | typeof import("react-native-reanimated").BaseAnimationBuilder
      | import("react-native-reanimated").EntryExitAnimationFunction
      | import("react-native-reanimated").Keyframe
      | undefined;
    itemExitingAnimation?:
      | import("react-native-reanimated").BaseAnimationBuilder
      | typeof import("react-native-reanimated").BaseAnimationBuilder
      | import("react-native-reanimated").EntryExitAnimationFunction
      | import("react-native-reanimated").Keyframe
      | undefined;
    itemLayoutAnimation?:
      | import("react-native-reanimated").BaseAnimationBuilder
      | typeof import("react-native-reanimated").BaseAnimationBuilder
      | import("react-native-reanimated").LayoutAnimationFunction
      | undefined;
    enableLayoutAnimationExperimental?: boolean | undefined;
    onContainerLayout?:
      | ((params: {
          layout: import("react-native").LayoutRectangle;
          containerRef: React.RefObject<Animated.View>;
        }) => void)
      | undefined;
  } & Partial<
      Readonly<{
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: import("react-native-reanimated").WithSpringConfig;
        scrollEnabled: boolean;
        dragHitSlop:
          | import("react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon").HitSlop
          | undefined;
        activationDistance: number;
        dragItemOverflow: boolean;
      }>
    > & {
      ref?: React.ForwardedRef<FlashList<T>> | undefined;
    }
) => ReturnType<typeof DraggableFlatList>;
export default _default;
