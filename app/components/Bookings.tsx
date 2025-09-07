import { useState } from "react";
import { Button } from "./DemoComponents";

const specialists = ["Dr. Smith", "Dr. Johnson", "Dr. Lee", "Dr. Patel"];

export default function Bookings() {
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  type Appointment = { specialist: string; date: string; attended: boolean };
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const bookAppointment = () => {
    if (!selectedSpecialist || !selectedDate) return;
    setAppointments([
      ...appointments,
      { specialist: selectedSpecialist, date: selectedDate, attended: false },
    ]);
    setSelectedSpecialist("");
    setSelectedDate("");
  };

  return (
    <div className="space-y-6 bg-pink-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-pink-700">Book an Appointment</h2>
      <div>
        <label className="block mb-2 font-semibold text-pink-600">
          Select Specialist:
        </label>
        <select
          value={selectedSpecialist}
          onChange={(e) => setSelectedSpecialist(e.target.value)}
          className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">-- Select --</option>
          {specialists.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-semibold text-pink-600">
          Select Date:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <Button
        onClick={bookAppointment}
        disabled={!selectedSpecialist || !selectedDate}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Book Appointment
      </Button>

      <h3 className="mt-8 mb-4 text-xl font-semibold text-pink-700">
        Your Appointments
      </h3>
      <ul>
        {appointments.map((appt, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center border border-pink-300 p-4 rounded-lg mb-3 bg-white shadow-sm"
          >
            <div className="space-y-1 text-pink-800">
              <div>
                <strong>Specialist:</strong> {appt.specialist}
              </div>
              <div>
                <strong>Date:</strong> {appt.date}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                {appt.attended ? "Attended" : "Pending"}
              </div>
            </div>
            {!appt.attended && (
              <Button
                onClick={() => {
                  const newAppointments = [...appointments];
                  newAppointments[idx].attended = true;
                  setAppointments(newAppointments);
                }}
                className="bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-lg px-4 py-2 transition"
              >
                Mark Attended
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
