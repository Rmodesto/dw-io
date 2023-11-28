const Footer: React.FC = () => {
  const year = new Date().getFullYear(); // Get current year for the copyright text

  return (
    <footer className="bg-purple-100">
      {/* Grid container for footer content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4 items-start">
        {/* Logo */}
        <div
          className="md:col-span-1 font-bold text-2xl tracking-widest font-Alegreya"
          id="logo"
        >
          <span className="text-purple-900">Dream</span>
          <span className="text-aqua-100">Whisper</span>
        </div>

        {/* Navigation Links */}
        <nav className="md:col-span-1 md:col-start-2 flex flex-col text-sm space-y-2">
          <a href="#" className="text-purple-900 hover:text-aqua-100">
            Terms and Conditions
          </a>
          <a href="#" className="text-purple-900 hover:text-aqua-100">
            Privacy Policy
          </a>
          <a href="#" className="text-purple-900 hover:text-aqua-100">
            Blog
          </a>
        </nav>

        {/* Empty div for spacing */}
        <div className="hidden md:block md:col-span-1"></div>
      </div>

      {/* Centered copyright text */}
      <div className="text-center py-4 bg-purple-100">
        <p className="text-sm text-black-800">© {year} DW</p>
      </div>
    </footer>
  );
};

export default Footer;
