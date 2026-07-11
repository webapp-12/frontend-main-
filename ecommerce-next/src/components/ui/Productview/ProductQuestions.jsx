export default function ProductQuestions() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-extrabold text-slate-950">
        Questions about this product
      </h2>

      <div className="flex overflow-hidden rounded-2xl border border-slate-200">
        <input
          type="text"
          placeholder="Enter your question(s) here"
          className="flex-1 px-5 py-4 text-slate-700 outline-none"
        />

        <button className="bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600">
          Ask Question
        </button>
      </div>

      <div className="py-12 text-center">
        <p className="text-5xl text-slate-300">?</p>
        <p className="mt-4 text-slate-500">
          There are no questions yet.
          <br />
          Ask the seller now and their answer will show here.
        </p>
      </div>
    </section>
  );
}