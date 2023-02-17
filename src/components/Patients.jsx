const Patients = ({ patient, setPatient, deletePatient }) => {

  const { name, owner, email, date, symptoms, adress, phone, id } = patient;
  const handleDelete = () => {
    const answer = confirm('Do you want delete this patient?');
    
    if(answer) {
      deletePatient(id)
    }
  }

  return (
    <div className="mx-3 my-5 bg-white shadow-md px-5 py-10 rounded-xl mt-0">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner's Name: <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet Adress: <span className="font-normal normal-case">{adress}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Phone Number: <span className="font-normal normal-case">{phone}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Release Date: <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-sky-500 hover:bg-sky-600 text-white font-bold uppercase cursor-pointer transition-all rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>

        <button
          type="button" 
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase cursor-pointer transition-all rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patients;
