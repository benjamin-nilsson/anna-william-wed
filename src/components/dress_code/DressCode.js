
function DressCode() {
    return (
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Dress Code</h2>
        <div className="mt-4 flex justify-center gap-4">
          <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/dress1.jpg" className="w-full rounded-lg" />
          <img src="/dress2.jpg" className="w-full rounded-lg" />
          <img src="/dress3.jpg" className="w-full rounded-lg" />
        </div>
      </section>
    );
  }

export default DressCode;