export default function Section() {
  return (
    <section className="m-10">
      <div className="max-w-screen-xl mx-auto">
        <h4 className="text-cyan-600 font-Poppings text-2xl text-center underline">
          What is STEM
        </h4>
        {/* <h2 className="text-4xl font-poppings">All Courses</h2> */}
        <p className="mt-6 text-lg text-justify ">
          S.T.E.M. is an acronym for Science, Technology, Engineering and
          Mathematics, and STEM Schools focus on these subjects to help our
          nation's youth gain the skills required to succeed in today's
          challenging world. This includes the ability to think critically,
          solve complex problems, and drive advancements in science and
          technology.
        </p>
        <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800 animate-pulse">
          Show more
        </button>
      </div>
    </section>
  );
}
