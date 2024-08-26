// import React from 'react'

export default function story() {
  return (
    <>
      <section className="mt-7">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 overflow-hidden">
          <div className=" lg:ml-10 lg:my-auto">
            <img
              src="./viewmore.png"
              alt=""
              className="size-max px-8 md:mx-auto  md:my-auto"
            />
          </div>
          <div>
            <div className="h-auto items-center justify-center">
              <h1
                className="lg:pt-20 mt-8 lg:mt-5 px-5 md:px-0 text-center lg:text-left font-custom3 font-bold text-3xl md:text-4xl text-red-950"
                id="auto-type1"
              >
                We Serve Healthy & Tasty Foods
              </h1>
            </div>
            <p className="text-zinc-800 font-medium mb-6 leading-7 text-center lg:text-left lg:pr-16 px-8 lg:px-0 mt-3 lg:mt-5">
              Welcome to FoodHouse, where culinary excellence meets a warm and
              inviting atmosphere. Our diverse menu features a delightful fusion
              of classNameic and contemporary dishes, each crafted with the
              freshest ingredients and utmost care. Whether youre in the mood
              for a hearty meal or a light snack, our offerings cater to every
              palate and preference. Join us for an unforgettable dining
              experience that will leave you craving for more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
