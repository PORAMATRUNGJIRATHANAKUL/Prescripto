import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-grat-600">Browse through the doctors speacialist</p>
      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <div className="sm:w-[250px] flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className="w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className="w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatrician"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatrician")
            }
            className="w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Pediatrician
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className="w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className="w-full pl-3 py-1.5 pr-4 border border-gray-300 rounded transition-all cursor-pointer"
          >
            Gastroenterologist
          </p>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover object-top bg-blue-50"
                    src={item.image}
                    alt={item.name}
                    style={{ objectPosition: "50% 25%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-2">
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <div className="bg-green-500 rounded-full w-2 h-2"></div>
                      <p className="font-medium">Available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-900 text-lg font-medium mb-1">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
