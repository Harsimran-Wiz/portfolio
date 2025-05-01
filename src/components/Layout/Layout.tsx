import { FC, memo } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = memo(({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))]">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 
            bg-[linear-gradient(to_right,hsl(var(--primary)_/_0.05)_1px,transparent_1px),
            linear-gradient(to_bottom,hsl(var(--primary)_/_0.05)_1px,transparent_1px)] 
            bg-[size:4rem_4rem] 
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        {/* Gradient orbs */}
        <div
          className="absolute -top-[40rem] w-full h-[80rem]
            bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)_/_0.075)_0%,transparent_60%),
            radial-gradient(circle_at_50%_0%,hsl(var(--secondary)_/_0.075)_0%,transparent_60%)]"
        />
      </div>

      {/* Main content */}
      <div className="relative">{children}</div>

      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 
          bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--primary)_/_0.05),transparent),
          radial-gradient(circle_800px_at_0%_calc(100%_-_200px),hsl(var(--secondary)_/_0.05),transparent)]"
        aria-hidden="true"
      />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
