import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

interface Props {
  doctor: Doctor;
  /** Флаг активного состояния при наведиеии делать красным */
  isActive?: boolean;
}

function DoctorCard({ doctor, isActive = false }: Props) {
  return (
    <Link
      to={`/doctors/${doctor.id}`}
      className={`
        relative 
        block 
        group 
        w-full 
        aspect-[3/4] 
        bg-gray-100 
        overflow-hidden 
        transition-all 
        duration-200
        border-2
        ${
          isActive
            ? "border-red-500"
            : "border-transparent hover:border-red-500"
        }
      `}
    >
      {/* фото врача */}
      <img
        src={
          doctor.image
            ? `http://localhost:5000${doctor.image}`
            : "/doctor-placeholder.jpg"
        }
        alt={doctor.name}
        className="w-full h-full object-cover object-center"
      />

      {/* Текстовый блок в левом нижнем углу */}
      <div className="absolute bottom-4 left-4 flex flex-col items-start space-y-1">
        {/* Имя */}
        <span
          className={`
            px-3 py-1 
            text-base font-bold 
            transition-colors duration-200
            ${
              isActive
                ? "bg-red-600 text-white"
                : "bg-white text-black group-hover:bg-red-600 group-hover:text-white"
            }
          `}
        >
          {doctor.name}
        </span>

        {/* Должность */}
        <span
          className={`
            px-3 py-0.5 
            text-xs font-normal 
            transition-colors duration-200
            ${
              isActive
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 group-hover:bg-red-600 group-hover:text-white"
            }
          `}
        >
          {doctor.position}
        </span>
      </div>
    </Link>
  );
}

export default DoctorCard;
