
/**
 * Adds a new appointment to the list of registered appointments
 * 
 * @param appointmentList the destionation list for the new appointments
 * @param currentAppointment  the new appointment to add to the list
 * @returns a new list with the new element inserted at the beginning 
 */
export const addAppointmentToList = (appointmentList, currentAppointment) => {

  return [currentAppointment, ...appointmentList]
}

/**
 * Updates an appointment in the list of registered appointments
 * 
 * @param appointmentList the list of appointments to update
 * @param currentAppointment  the updated appointment information
 * @returns a new list with the updated information
 */
export const updateAppointmentFromList = (appointmentList, currentAppointment) => {

  const index = getAppointmentIndex(appointmentList, currentAppointment)

  const result = [ ...appointmentList ]
  result[index] = currentAppointment

  return result
}

/**
 * Deletes an appointment from the list of registered appointments
 * 
 * @param appointmentList the list of appointments to update
 * @param id the id of the appointment to be deleted
 * @returns a new list of appointment without the deleted element
 */
export const deleteAppointmentFromList = (appointmentList, id) => {

  return appointmentList.filter((_, i) => _.id != id)
}

/**
 * Checks if an appointment is already present in list of registered appointments
 * 
 * @param appointmentList the list of appointments
 * @param currentAppointment the appointment to find
 * @returns a boolean representing whether the appointment was present or not
 */
export const isPresent = (appointmentList, currentAppointment) => {

  return -1 != getAppointmentIndex(appointmentList, currentAppointment)
}

/**
 * Gets the index of an appointment if it exists in the appointment list
 * 
 * @param appointmentList the list of registered appointments
 * @param currentAppointment the appointment of which we need to find the index
 * @returns the index of the appointment or -1 if not present
 */
const getAppointmentIndex = (appointmentList, currentAppointment) => {

  return appointmentList.map(appointment => appointment.id).indexOf(currentAppointment.id)
}