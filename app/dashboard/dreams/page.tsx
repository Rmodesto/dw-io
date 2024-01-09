export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Dreams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <div
            key={card}
            className="max-w-sm rounded overflow-hidden shadow-lg p-4"
          >
            <img
              className="w-full"
              src="/path/to/image.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Dream {card}</div>
              <p className="text-gray-700 text-base">
                Description for dream {card}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
