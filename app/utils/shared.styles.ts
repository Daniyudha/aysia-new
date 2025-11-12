// Add here because button styles are used in several components
export const buttonStyles = tv({
  base: "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
  variants: {
    variant: {
      default: "text-dashboard-primary-50 bg-dashboard-accent-50 hover:bg-dashboard-accent-50/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90",
      outline: "border border-dashboard-neutral-100/50 bg-dashboard-neutral-50 hover:bg-dashboard-neutral-100/20",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      "xs": "h-8 px-2",
      "sm": "h-9 px-3",
      "default": "h-10 px-4 py-2",
      "lg": "h-11 px-8",
      "icon-xs": "h-8 w-8",
      "icon-sm": "h-9 w-9",
      "icon": "h-10 w-10",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
    },
    hasIcon: {
      false: "gap-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
