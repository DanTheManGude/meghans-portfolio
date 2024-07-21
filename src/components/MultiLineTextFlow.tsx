import { useEffect, useRef, PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

function resizeMultiLineTextFlow(element: HTMLElement | null) {
  if (!element) return;

  element.style.width = "inherit";

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  for (var newWidth = width; newWidth; newWidth--) {
    element.style.width = newWidth + "px";
    if (element.offsetHeight !== height) break;
  }

  if (newWidth < element.scrollWidth) {
    element.style.width = element.style.maxWidth = element.scrollWidth + "px";
  } else {
    element.style.width = newWidth + 1 + "px";
  }
}

export default function MultiLineTextFlow({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) {
  const multiLineTextFlowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    addEventListener("resize", (_event) => {
      resizeMultiLineTextFlow(multiLineTextFlowRef.current);
    });
  }, []);

  useEffect(() => {
    resizeMultiLineTextFlow(multiLineTextFlowRef.current);
  }, [multiLineTextFlowRef]);

  return (
    <Typography ref={multiLineTextFlowRef} {...props}>
      {children}
    </Typography>
  );
}
