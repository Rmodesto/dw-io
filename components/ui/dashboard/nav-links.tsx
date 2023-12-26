'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const topLinks = [
  { name: 'Interpret', href: '/DashboardContent' },
  { name: 'Dreams', href: '/dreams' },
];

const bottomLinks = [
  { name: 'Billing', href: '/billing' },
  { name: 'Settings', href: '/settings' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-1/5 bg-purple-100 text-lg text-black-500 p-4 border-r border-aqua-200 flex flex-col justify-between h-screen">
        <div className="space-y-2">
          {/* Top links */}
          {topLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center  gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-aqua-200 hover:text-white-500 md:flex-none md:justify-center md:p-2 md:px-3',
                {
                  'bg-aqua-100 text-white-500': pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-auto space-y-2">
          {/* Bottom links */}
          {bottomLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-aqua-100 hover:text-white-500 md:flex-none md:justify-center md:p-2 md:px-3',
                {
                  'bg-aqua-100 text-white-500': pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Logout button */}
          <button className="w-full text-left px-3 py-2 text-black-500 rounded-md hover:bg-purple-200">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
