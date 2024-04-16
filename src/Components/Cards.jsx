export default function Cards() {
  const header = "Our Vision";
  return (
    <div className="max-w-screen-xl mx-auto  ">
      <div>
        <h4 className="text-cyan-600 font-Poppings text-2xl text-center underline m-10">
          {header}
        </h4>
        <p>
          Our vision is a world where all youth are equipped with the scientific
          knowledge that empowers them to become the next generation of
          innovators.
        </p>
        <button className="underline">Learn More</button>
      </div>
      {/* {Box} */}
      <div className="my-20 flex space-x-4">
        <div className="border rounded-md relative px-8 py-12 border-solid border-4 border-blue-400">
          <h4 className="font-Poppings text-lg text-cyan-600">
            ✨ STEM Curriculum
          </h4>
          <p className="mt-2 ">
            Our cutting-edge curriculum goes beyond traditional boundaries,
            integrating science, technology, engineering, and mathematics, AI
            integration in exciting and real-world ways.
          </p>
          <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800">
            Learn More
          </button>
          <div className="font-Poppings text-gray-300 top-0 right-10 text-6xl absolute -z-10 m-2">
            01
          </div>
        </div>

        <div className="border rounded-md relative px-8 py-12 border-solid border-4 border-blue-400">
          <h4 className="font-Poppings text-lg text-cyan-600">
            🌐 Global Perspective
          </h4>
          <p className="mt-2 ">
            We prepare students to think globally, encouraging them to apply
            STEM principles to real-world challenges and become responsible
            citizens of the future.
          </p>
          <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800 ">
            Learn More
          </button>
          <div className="font-Poppings text-gray-300 top-0 right-10 text-6xl absolute -z-10 m-2">
            02
          </div>
        </div>
        <div className="border rounded-md relative px-8 py-12 border-solid border-4 border-blue-400">
          <h4 className="font-Poppings text-lg text-cyan-600	">
            💡 Innovative Learning
          </h4>
          <p className="mt-2 ">
            State-of-the-art labs, interactive classrooms, and hands-on projects
            create an environment where curiosity thrives and creativity knows
            no bounds
          </p>
          <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800">
            Learn More
          </button>
          <div className="font-Poppings text-gray-300 top-0 right-10 text-6xl absolute -z-10 m-2">
            03
          </div>
        </div>
      </div>
    </div>
  );
}
