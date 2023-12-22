// components/Sidebar.tsx
import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => (
  <nav className="w-1/5 bg-purple-100 items-center text-lg text-black-500 p-4 border-r border-aqua-200 flex flex-col justify-between h-screen">
    <div className="space-y-2">
      {/* Top links */}
      <Link href="/interpret">Interpret</Link>
      <Link href="/dreams" className="cursor-pointer block">
        Dreams
      </Link>
    </div>
    <div className="mt-auto space-y-2">
      {/* Bottom links */}
      <Link href="/billing" className="cursor-pointer block">
        Billing
      </Link>
      <Link href="/settings" className="cursor-pointer block">
        Settings
      </Link>
      {/* Logout button */}
      <button className=" w-full text-left">Logout</button>
    </div>
  </nav>
);

export default Sidebar;
