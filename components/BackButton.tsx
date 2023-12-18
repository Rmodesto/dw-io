import Link from 'next/link';

const BackButton: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 m-4">
      <Link
        href="/"
        className="inline-flex items-center justify-center p-2 text-gray-600 rounded-full hover:bg-gray-200 hover:text-gray-900 transition duration-150 ease-in-out"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
    </div>
  );
};

export default BackButton;
