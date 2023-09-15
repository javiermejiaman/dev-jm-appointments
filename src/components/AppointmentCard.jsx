import AppointmentBullet from "./AppointmentBullet"

function AppointmentCard({ appointment, editAppointment, deleteAppointment }) {

  return (
    <div className="mt-5 p-5 bg-white rounded-md">
      <div>
        <h3 className="inline-block text-lg font-bold text-gray-900 mb-5">
          {appointment.petName} | <span className="text-orange-500">{appointment.petType}</span>
        </h3>
        <span className="inline-block float-right cursor-pointer" 
          onClick={ () => deleteAppointment(appointment.id) }>🗑️</span>
        <span className="inline-block float-right cursor-pointer mr-2" 
          onClick={ () => editAppointment(appointment) }>✏️</span>
      </div>
      
      <AppointmentBullet label={"Pet owner"} value={appointment.petOwner} />
      <AppointmentBullet label={"Email"} value={appointment.email} />
      <AppointmentBullet label={"Symptoms"} value={appointment.symptoms} />
      <AppointmentBullet label={"Appointment date"} value={appointment.date} />
      <AppointmentBullet label={"Status"} value={appointment.status} />
    </div>
  )
}

export default AppointmentCard