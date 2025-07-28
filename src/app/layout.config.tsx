import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="https://i.postimg.cc/NMR8pwr2/ov.png"
          alt="Openverse Logo"
          width={24}
          height={24}
          className="rounded"
        />
        Openverse
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/Openverse-iiitk',
      external: true,
    },
  ],
};
