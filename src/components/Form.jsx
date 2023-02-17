import { useState, useEffect } from "react"
import Error from "./Error";

const Form = ({patients, setPatients, patient, setPatient}) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
      setAdress(patient.adress)
      setPhone(patient.phone)
    }
  }, [patient])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del Formulario
      if([name, owner, email, date, symptoms, adress, phone].includes('')) {

        setError(true);
        return;
      } 

      setError(false);

      // Objeto de paciente
      const patientObject = {
        name,
        owner, 
        email, 
        date, 
        symptoms,
        adress,
        phone
      }

      if(patient.id) {
        // Editando el registro
        patientObject.id = patient.id;
        const updatedPatients = patients.map( patientState => patientState.id === patient.id ? patientObject : patientState );

        setPatients(updatedPatients);
        setPatient({});
      } else {
        // Nuevo registro
        patientObject.id = generarId();
        setPatients([...patients, patientObject]);
      }


      // Reiniciar el form
      setName('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymptoms('');
      setAdress('');
      setPhone('');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 my-10">
      <h2 className="font-black text-white text-3xl text-center">Patient Monitoring</h2>

      <p className="text-white text-lg mt-5 text-center mb-10">
        Add Patient and {''}
        <span className="text-sky-300 font-bold">Manage Them</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>All fields are required</Error>}

        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>

          <input
            id="pet"
            type="text"
            placeholder="Write the name of your pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Owner's name
          </label>

          <input
            id="owner"
            type="text"
            placeholder="Write your name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={ (e) => setOwner(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="adress" className="block text-gray-700 uppercase font-bold">
            Pet Adress
          </label>

          <input
            id="adress"
            type="text"
            placeholder="Write your adress"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={adress}
            onChange={ (e) => setAdress(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-gray-700 uppercase font-bold">
            Phone Number
          </label>

          <input
            id="phone"
            type="text"
            placeholder="Write your phone number"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={phone}
            onChange={ (e) => setPhone(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Write your email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="release" className="block text-gray-700 uppercase font-bold">
            Release Date
          </label>

          <input
            id="release"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
           Symptoms
          </label>

          <textarea 
            id="symptoms" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input
          type="submit" 
          className="bg-sky-500 w-full p-3 text-white uppercase font-bold hover:bg-sky-600 cursor-pointer transition-all"
          value={ patient.id ? "Edit patient" : "Add patient" }
        />

      </form>
    </div>
  )
}

export default Form