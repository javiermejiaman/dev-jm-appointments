import { useState, useEffect } from "react"
import PetTypes from "../enums/PetType"
import Status from "../enums/Status"

function AppointmentForm({ appointment, processAppointment }) {

  const [ petName, setPetName ] = useState('')
  const [ petType, setPetType ] = useState(PetTypes.Dog)
  const [ petOwner, setPetOwner ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ symptoms, setSymptoms ] = useState('')
  const [ date, setDate ] = useState('')
  const [ status, setStatus ] = useState(Status.Open)

  useEffect(() => {
    setPetName(appointment.petName)
    setPetOwner(appointment.petOwner)
    setPetType(appointment.petType)
    setEmail(appointment.email)
    setSymptoms(appointment.symptoms)
    setDate(appointment.date)
    setStatus(appointment.status)
  }, [appointment])

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [ petName, petType, petOwner, email, symptoms, date, status ].includes('') ) {
      window.alert("Please, complete the form before submission")

      return
    }
    
    processAppointment({
      id: appointment.id,
      petName,
      petType,
      petOwner,
      email,
      symptoms,
      date,
      status
    })

  }
  
  return (
    <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg text-slate-900 self-start">

      <h2 className="text-2xl font-bold">Patient follow up</h2>
      <p className="mt-2 text-sm text-slate-500">📝 Add and manage {''}
      <span className="text-orange-400 font-bold">patient info</span></p>

      <form className="mt-7" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pet" className="font-bold block text-sm text-gray-700">Pet name</label>
          <input id="pet" type="text" placeholder="Pet name" 
           className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 placeholder-slate-400"
            value={petName}
            onChange={ (e) => setPetName(e.target.value) } />
        </div>

        <div className="mt-3">
          <label htmlFor="type" className="font-bold block text-sm text-gray-700">Pet type</label>
          <select id="type" className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 font-bold"
            value={petType}
            onChange={ (e) => setPetType(e.target.value) } >
              { Object.keys(PetTypes).map(key => (<option key={key} value={key}>{PetTypes[key]}</option>)) }
          </select>
        </div>

        <div className="mt-3">
          <label htmlFor="owner" className="font-bold block text-sm text-gray-700">Pet owner</label>
          <input id="owner" type="text" placeholder="Pet owner"
            className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 placeholder-slate-400"
            value={petOwner}
            onChange={ (e) => setPetOwner(e.target.value) } />
        </div>

        <div className="mt-3">
          <label htmlFor="email" className="font-bold block text-sm text-gray-700">Email</label>
          <input id="email" type="text" placeholder="Email"
            className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 placeholder-slate-400"
            value={email}
            onChange={ (e) => setEmail(e.target.value) } />
        </div>

        <div className="mt-3">
          <label htmlFor="symptoms" className="font-bold block text-sm text-gray-700">Symptoms</label>
          <textarea id="symptoms" type="text" placeholder="Symptoms"
            className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 placeholder-slate-400"
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value) } />
        </div>

        <div className="mt-3">
          <label htmlFor="date" className="font-bold block text-sm text-gray-700">Appointment date</label>
          <input id="date" type="date" placeholder="Appointment date"
            className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 placeholder-slate-400" 
            value={date}
            onChange={ (e) => setDate(e.target.value) } />
        </div>

        <div className="mt-3">
          <label htmlFor="status" className="font-bold block text-sm text-gray-700">Status</label>
          <select id="status" className="mt-2 px-2 py-2 rounded-sm w-full text-slate-700 font-bold"
            value={status}
            onChange={ (e) => setStatus(e.target.value) } >
              { Object.keys(Status).map(key => (<option key={key} value={key}>{Status[key]}</option>)) }
          </select>
        </div>

        <div className="mt-7 mb-3">
          <input type="submit" value="Send"
            className="bg-orange-500 text-white font-bold py-3 px-10 rounded-sm hover:bg-orange-600 cursor-pointer transition-all" />
        </div>
      </form>

    </div>
  )
}

export default AppointmentForm