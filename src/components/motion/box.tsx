"use client";

import { DOMMotionComponents, motion, MotionProps } from "motion/react";
import { JSX, ReactElement } from "react";

type ElementType = keyof DOMMotionComponents;

export type MotionBoxProps<T extends ElementType = "div"> = {
  element?: keyof DOMMotionComponents;
} & MotionProps &
  JSX.IntrinsicElements[T];

export const MotionBox = <T extends ElementType = "div">(
  props: MotionBoxProps<T>
) => {
  const { element = "div", children, ...others } = props;
  const MotionComponent = motion[element] as React.ElementType;
  return <MotionComponent {...others}>{children}</MotionComponent>;
};
