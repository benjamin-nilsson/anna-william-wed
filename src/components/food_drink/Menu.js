function Menu() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-semibold">Food & Drinks</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/food1.jpg" className="w-full rounded-lg" />
        <img src="/food2.jpg" className="w-full rounded-lg" />
        <img src="/food3.jpg" className="w-full rounded-lg" />
      </div>
    </section>
  );
}

export default Menu;