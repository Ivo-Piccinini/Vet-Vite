import Patients from "./Patients";
import "../scroll.css";

const PatientList = ({patients, setPatient, deletePatient}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen mt-10 ">
      { patients && patients.length ? (
        <>
            <h2 className="font-black text-white text-3xl text-center">
              Patient List
            </h2>
            <p className="text-xl mt-5 mb-10 text-center text-white px-1">
              Manage your{" "}
              <span className="text-sky-300 font-bold">
                Patients
              </span>
            </p>
      
            <div className="overflow-y-scroll scroll h-screen">
              {patients.map( patient => (
                  <Patients
                    key={patient.id}
                    patient={patient}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                  />
               ))}
            </div>
        </>
   ) : (
    <>
      <h2 className="font-black text-white text-3xl text-center">
        No patients
      </h2>
      <p className="text-xl mt-5 mb-10 text-center text-white px-1">
        Start adding patients{" "}
        <span className="text-sky-300 font-bold">
          and they will appear here
        </span>
      </p>
    </>
   ) }


    </div>
  );
};

export default PatientList;
