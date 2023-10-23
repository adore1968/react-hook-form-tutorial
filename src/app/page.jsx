"use client";

import { useForm } from "react-hook-form";

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className="sm:px-5 px-0">
      <section className="container flex items-center justify-center min-h-screen mx-auto">
        <form
          className="lg:w-[65%] sm:w-full flex flex-col gap-5 p-5 my-5 border"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="name" className="sm:text-2xl text-xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="..."
              {...register("name", {
                required: {
                  value: true,
                  message: "The name is required!",
                },
                minLength: {
                  value: 2,
                  message: "The name must have at least 2 characters!",
                },
                maxLength: {
                  value: 20,
                  message: "The name must not have more than 20 characters!",
                },
              })}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            />
            {errors.name && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="email" className="sm:text-2xl text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="youremail@email.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "The email is required!",
                },
              })}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            />
            {errors.email && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="password" className="sm:text-2xl text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("password", {
                required: {
                  value: true,
                  message: "The password is required!",
                },
                minLength: {
                  value: 8,
                  message: "The password must have at least 8 characters",
                },
              })}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            />
            {errors.password && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="confirm" className="sm:text-2xl text-xl">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              placeholder="********"
              {...register("confirm", {
                required: {
                  value: true,
                  message: "Confirm the password is required!",
                },
                validate: (value) => {
                  const password = watch("password");
                  if (password === value) return true;
                  return "The passwords do not match!";
                },
              })}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            />
            {errors.confirm && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.confirm.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="birthdate" className="sm:text-2xl text-xl">
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              {...register("birthdate", {
                required: {
                  value: true,
                  message: "The birthdate is required!",
                },
                validate: (value) => {
                  const birthdate = new Date(value);
                  const currentDate = new Date();
                  const age =
                    currentDate.getFullYear() - birthdate.getFullYear();
                  if (age >= 18) return true;
                  return "You must be of legal age!";
                },
              })}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            />
            {errors.birthdate && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.birthdate.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-5 border-b">
            <label htmlFor="country" className="sm:text-2xl text-xl">
              Country
            </label>
            <select
              id="country"
              {...register("country")}
              className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
            >
              <option value="ur">Uruguay</option>
              <option value="ar">Argentina</option>
              <option value="ch">Chile</option>
            </select>
          </div>

          {watch("country") === "ar" && (
            <div className="flex flex-col gap-1 pb-5 border-b">
              <label htmlFor="province" className="sm:text-2xl text-xl">
                Province
              </label>
              <input
                type="text"
                id="province"
                {...register("province", {
                  required: {
                    value: true,
                    message: "The province is required!",
                  },
                })}
                placeholder="Enter the province"
                className="sm:text-xl px-4 py-2 text-lg text-gray-200 bg-gray-800 rounded"
              />
              {errors.province && (
                <p className="sm:text-xl mt-1 text-lg text-red-600">
                  {errors.province.message}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-5">
              <label htmlFor="terms" className="sm:text-2xl text-xl">
                Confirm terms and conditions
              </label>
              <input
                type="checkbox"
                id="terms"
                {...register("terms", {
                  required: {
                    value: true,
                    message: "The terms are required!",
                  },
                })}
              />
            </div>
            {errors.terms && (
              <p className="sm:text-xl mt-1 text-lg text-red-600">
                {errors.terms.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-sky-700 text-gray-50 hover:bg-sky-600 sm:text-2xl px-4 py-2 text-xl transition-colors ease-in rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default HomePage;
