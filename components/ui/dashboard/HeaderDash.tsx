type Props = {};

const header = (props: Props) => {
  return (
    <div>
      <nav className="flex justify-between items-center w-full bg-purple-100  border-b border-aqua-200 px-6 py-4">
        <h1 className="font-Alegreya font-bold text-2xl">
          <span className="text-purple-900 font-bold">Dream</span>
          <span className="text-aqua-200 font-bold">Whisper</span>
        </h1>
        <h2>Avatar</h2>
      </nav>
    </div>
  );
};

export default header;
