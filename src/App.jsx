import { useState } from 'react'
import Header from './components/Header'
import AppointmentForm from './components/AppointmentForm'
import AppointmentList from './components/AppointmentList'
import PetTypes from "./enums/PetType"
import Status from "./enums/Status"
import { v4 as uuidv4 } from 'uuid'
import {
  addAppointmentToList, 
  updateAppointmentFromList, 
  deleteAppointmentFromList, 
  isPresent
} from './services/appointmentService'

function App() {

  const createAppointment = () => {

    return {
      id: uuidv4(),
      petName: '',
      petType: PetTypes.Dog,
      petOwner: '',
      email: '',
      symptoms: '',
      date: '',
      status: Status.Open
    }

  }

  const [ appointmentList, setAppointmentList ] = useState([])
  const [ appointment, setAppointment ] = useState(createAppointment())

  const processAppointment = appointment => {

    const appointments = isPresent(appointmentList, appointment)
      ? updateAppointmentFromList(appointmentList, appointment)
      : addAppointmentToList(appointmentList, appointment)

    setAppointmentList(appointments)
    setAppointment(createAppointment())

  }

  const editAppointment = (appointment) => {
    
    setAppointment(appointment)
  }

  const deleteAppointment = (id) => {

    setAppointmentList(deleteAppointmentFromList(appointmentList, id))
  }

  return (
    <div className="container mx-auto pt-10 px-4 pb-7 md:pb-0">
      <Header />
      <div className="mt-12 md:flex">
        <AppointmentForm appointment={appointment} processAppointment={processAppointment} />
        <div className="mx-2"></div>
        <AppointmentList 
          appointmentList={appointmentList} 
          editAppointment={editAppointment} 
          deleteAppointment={deleteAppointment} />
      </div>
    </div>
  )
}

export default App
