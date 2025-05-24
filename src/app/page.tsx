"use client";
import React, { useState } from "react";


export default function Home() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [error,setError] = useState("");
  const [budget, setBudget] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!appointmentDate){
      setError("Please select a date");
      alert("Please select a date");
      return;
    }

    const selectedDate = new Date(appointmentDate);
    const currentDate = new Date();
    const twoDaysLater = new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000);
    ///if (selectedDate < twoDaysLater) {
    ///  setError("Appointment must be at least 2 days from today.");
    ///  alert("Appointment must be at least 2 days from today.");
    ///  return;
    ///}
    setError("");
    alert("Form submitted!");

    const formData = {
      name:(document.getElementById("name") as HTMLInputElement).value,
      email:(document.getElementById("email") as HTMLInputElement).value,
      phone:(document.getElementById("phone") as HTMLInputElement).value,
      budget: (document.getElementById("budget") as HTMLInputElement).value,
      location:(document.getElementById("location") as HTMLInputElement).value,
      appointment: appointmentDate
    };

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

        alert("Form submitted!");
      } catch (error) {
        alert("Failed to submit.");
        console.error(error);
      }
  };
  
  return (
    <div className ="pt-16 bg-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <img className="w-64 h-64 rounded-3xl " src="/Dynasty.png" alt="" />
        <h1 className="text-5xl font-bold text-black">
        Welcome to Dynasty 8 Real Estate !
        </h1>
      </div>

      <section className="pt-12 flex items-center justify-center bg-white">
        <form onSubmit = {handleSubmit} className="w-8/12 max-w-3xl bg-gray-200 rounded-3xl border border-black pb-4 overflow-hidden">
          <div className="w-full bg-green-800 h-16 flex items-center justify-center text-white text-xl font-semibold rounded-t-3xl">
            Lead Submission
          </div>
            <div className="w-full pt-6 flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center w-full ">
                <label className="pl-16 text-3xl font-bold text-black mb-2 self-start" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Paramet Kitchanwit"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-2xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full ">
                <label className="pl-16 text-3xl font-bold text-black mb-2 self-start" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Paramet.Kitchanwit@gmail.com"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-2xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className=" pl-16 text-3xl font-bold text-black mb-2" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="0811234567"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-2xl"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="pl-16 text-3xl font-bold text-black mb-2" htmlFor="budget">
                  Budget:
                </label>
                <input
                  id="budget"
                  type="text"
                  value={budget}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, "");
                    const numericValue = parseInt(rawValue);

                    if (!isNaN(numericValue)) {
                      setBudget(numericValue.toLocaleString("en-US"));
                    } else {
                      setBudget("");
                    }
                  }}
                  placeholder="1,000,000"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-2xl"
                />
                              </div>

              <div className="flex flex-col w-full">
                <label className="pl-16 text-3xl font-bold text-black mb-2" htmlFor="location">
                  Location:
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter text"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-2xl"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="pl-16 text-3xl font-bold text-black mb-2" htmlFor="appointment">
                  Appointment:
                </label>
                <input
                  id="appointment"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  type="datetime-local"
                  className="w-10/12 self-center rounded-lg border text-black text-2xl border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-grey placeholder:text-2xl"
                />
              </div>
              <button
              type="submit"
              className="w-32 self-center py-4 bg-blue-600 text-white text-2xl font-semibold rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
            </div>

        </form>
      </section>

    </div>
  );
}
