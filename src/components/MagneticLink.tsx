import { useRef, type MouseEvent, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

type MagneticProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  strength?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function MagneticLink<T extends ElementType = "a">({
  as,
  children,
  strength = 0.25,
  ...rest
}: MagneticProps<T>) {
  const Component = (as || "a") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <Component
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)", display: "inline-flex" }}
      {...rest}
    >
      {children}
    </Component>
  );
}