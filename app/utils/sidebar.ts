import type { ComputedRef, Ref } from "vue";

import { createContext } from "reka-ui";

export const SIDEBAR_COOKIE_NAME = "sidebar:state";
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60;
export const SIDEBAR_WIDTH = "17rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export const sidebarMenuButtonVariants = tv({
  base: "flex items-center gap-3 opacity-70 aria-[current='page']:opacity-100 aria-[current='page']:font-semibold aria-[current='page']:bg-[oklch(0.8067_0.0715_72.13)] aria-[current='page']:text-card-foreground rounded-lg group hover:opacity-100",
  variants: {
    variant: {
      default: "",
      outline:
        "",
    },
    size: {
      default: "px-4 py-2 text-base",
      sm: "",
      lg: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;

export const [useSidebar, provideSidebarContext] = createContext<{
  state: ComputedRef<"expanded" | "collapsed">;
  open: Ref<boolean>;
  setOpen: (value: boolean) => void;
  isMobile: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpenMobile: (value: boolean) => void;
  toggleSidebar: () => void;
}>("Sidebar");
