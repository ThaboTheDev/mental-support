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
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Book an Appointment</h2>
      <div>
        <label className="block mb-1">Select Specialist:</label>
        <select
          value={selectedSpecialist}
          onChange={(e) => setSelectedSpecialist(e.target.value)}
          className="w-full p-2 border rounded"
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
        <label className="block mb-1">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <Button
        onClick={bookAppointment}
        disabled={!selectedSpecialist || !selectedDate}
      >
        Book Appointment
      </Button>

      <h3 className="mt-6 font-semibold">Your Appointments</h3>
      <ul>
        {appointments.map((appt, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center border p-2 rounded mb-2"
          >
            <div>
              <div>Specialist: {appt.specialist}</div>
              <div>Date: {appt.date}</div>
              <div>Status: {appt.attended ? "Attended" : "Pending"}</div>
            </div>
            {!appt.attended && (
              <Button
                onClick={() => {
                  const newAppointments = [...appointments];
                  newAppointments[idx].attended = true;
                  setAppointments(newAppointments);
                }}
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
