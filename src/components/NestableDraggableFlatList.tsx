import React, { useRef, useState } from "react";
import { findNodeHandle, LogBox } from "react-native";
import Animated, {
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { DraggableFlatListProps } from "../types";
import DraggableFlatList from "../components/DraggableFlatList";
import { useSafeNestableScrollContainerContext } from "../context/nestableScrollContainerContext";
import { useNestedAutoScroll } from "../hooks/useNestedAutoScroll";
import { typedMemo } from "../utils";
import { useStableCallback } from "../hooks/useStableCallback";
import { FlashList } from "@shopify/flash-list";

function NestableDraggableFlatListInner<T>(
  props: DraggableFlatListProps<T>,
  ref?: React.ForwardedRef<FlashList<T>>
) {
  const hasSuppressedWarnings = useRef(false);

  if (__DEV__) {
    const ignoreWarns = [
      "VirtualizedLists should never be nested inside plain ScrollViews",
    ];

    const errorWarn = global.console.error;
    global.console.error = (...arg) => {
      for (const error of ignoreWarns) {
        if (arg[0].startsWith(error)) {
          return;
        }
      }
      errorWarn(...arg);
    };
  }

  const {
    scrollableRef,
    outerScrollOffset,
    setOuterScrollEnabled,
  } = useSafeNestableScrollContainerContext();

  const listVerticalOffset = useSharedValue(0);
  const [animVals, setAnimVals] = useState({});
  const defaultHoverOffset = useSharedValue(0);
  const [listHoverOffset, setListHoverOffset] = useState(defaultHoverOffset);

  const hoverOffset = useDerivedValue(() => {
    return listHoverOffset.value + listVerticalOffset.value;
  }, [listHoverOffset]);

  useNestedAutoScroll({
    ...animVals,
    hoverOffset,
    autoscrollThreshold: props.autoscrollThreshold,
  });

  const onListContainerLayout = useStableCallback(async ({ containerRef }) => {
    const nodeHandle = findNodeHandle(scrollableRef.current);

    const onSuccess = (_x: number, y: number) => {
      listVerticalOffset.value = y;
    };
    const onFail = () => {
      console.log("## nested draggable list measure fail");
    };
    //@ts-ignore
    containerRef.current.measureLayout(nodeHandle, onSuccess, onFail);
  });

  const onDragBegin: DraggableFlatListProps<T>["onDragBegin"] = useStableCallback(
    (params) => {
      setOuterScrollEnabled(false);
      props.onDragBegin?.(params);
    }
  );

  const onDragEnd: DraggableFlatListProps<T>["onDragEnd"] = useStableCallback(
    (params) => {
      setOuterScrollEnabled(true);
      props.onDragEnd?.(params);
    }
  );

  const onAnimValInit: DraggableFlatListProps<T>["onAnimValInit"] = useStableCallback(
    (params) => {
      setListHoverOffset(params.hoverOffset);
      setAnimVals({
        ...params,
        hoverOffset,
      });
      props.onAnimValInit?.(params);
    }
  );

  return (
    <DraggableFlatList
      ref={ref}
      onContainerLayout={onListContainerLayout}
      activationDistance={props.activationDistance || 20}
      scrollEnabled={false}
      {...props}
      outerScrollOffset={outerScrollOffset}
      onDragBegin={onDragBegin}
      onDragEnd={onDragEnd}
      onAnimValInit={onAnimValInit}
    />
  );
}

// Generic forwarded ref type assertion taken from:
// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
export const NestableDraggableFlatList = React.forwardRef(
  NestableDraggableFlatListInner
) as <T>(
  props: DraggableFlatListProps<T> & { ref?: React.ForwardedRef<FlashList<T>> }
) => ReturnType<typeof NestableDraggableFlatListInner>;
