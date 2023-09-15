import { useEffect } from 'react'
import AppointmentCard from './AppointmentCard'

function AppointmentList({ appointmentList, editAppointment, deleteAppointment }) {

  useEffect(() => console.log(appointmentList), [appointmentList])
  
  return (
    <div className="md:w-1/2 mt-7 md:mt-0 bg-gray-50 p-5 rounded-lg text-slate-900">
      <h2 className="text-2xl font-bold">Patient list</h2>
      <p className="mt-2 text-sm text-slate-500">🐶 Manage your {''}
      <span className="text-orange-400 font-bold">patients and appointments</span></p>

      <div className="h-full mt-2">
        { appointmentList.length == 0 ? "Nothing for now, try adding a new appointment!" : "" }
        {
          appointmentList.map(appointment =>
            <AppointmentCard 
              appointment={appointment} 
              editAppointment={editAppointment} 
              deleteAppointment={deleteAppointment} />
          )
        }
      </div>
    </div>
  )
}

export default AppointmentList