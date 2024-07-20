export function resizeMultiLineTextFlow(element: HTMLElement | null) {
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
