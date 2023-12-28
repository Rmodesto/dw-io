import NavLinks from '@/app/ui/dashboard/nav-links';
import Link from 'next/link';

import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-purple-200 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white font-bold font-Alegreya text-3xl md:w-40">
          <span className="text-purple-900">Dream</span>
          <span className="text-aqua-100">Whisper</span>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 ">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm hover:bg-aqua-400 hover:text-aqua-100 font-medium  md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}