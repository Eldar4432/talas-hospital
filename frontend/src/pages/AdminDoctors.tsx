import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { api } from "../api/api";

interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
  specialization: string;
  department: string;
  biography: string;
}

function AdminDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    position: "",
    experience: "",
    education: "",
    specialization: "",
    department: "",
    biography: "",
  });

  const loadDoctors = async () => {
    const res = await api.get("/doctors");

    setDoctors(res.data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const saveDoctor = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    try {
      const data = new FormData();

      data.append("name", form.name);
      data.append("position", form.position);
      data.append("experience", form.experience);
      data.append("education", form.education);
      data.append("specialization", form.specialization);
      data.append("department", form.department);
      data.append("biography", form.biography);

      if (imageSrc && croppedAreaPixels) {
        const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
        const fileName = image?.name ?? "doctor-photo.jpg";
        const croppedFile = new File([croppedBlob], fileName, {
          type: croppedBlob.type,
        });
        data.append("image", croppedFile);
      } else if (image) {
        data.append("image", image);
      }

      if (editingId) {
        await api.put(`/doctors/${editingId}`, data);
        setStatusMessage("Врач успешно обновлён.");
      } else {
        await api.post("/doctors", data);
        setStatusMessage("Врач успешно добавлен.");
      }

      clearForm();
      loadDoctors();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      setStatusMessage(`Ошибка при сохранении врача: ${message}`);
    }
  };

  const editDoctor = (doctor: Doctor) => {
    setEditingId(doctor.id);

    setForm({
      name: doctor.name,
      position: doctor.position,
      experience: doctor.experience,
      education: doctor.education,
      specialization: doctor.specialization || "",
      department: doctor.department || "",
      biography: doctor.biography || "",
    });

    setImage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clearForm = () => {
    setEditingId(null);
    setImageSrc(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);

    setForm({
      name: "",
      position: "",
      experience: "",
      education: "",
      specialization: "",
      department: "",
      biography: "",
    });

    setImage(null);
  };

  const deleteDoctor = async (id: number) => {
    await api.delete(`/doctors/${id}`);

    loadDoctors();
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Управление врачами
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            Добавляйте и редактируйте врачей в аккуратном интерфейсе.
          </p>
        </div>

        <form
          onSubmit={saveDoctor}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 mb-10"
        >
          {statusMessage && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {statusMessage}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Имя
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Имя"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Должность
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Должность"
                value={form.position}
                onChange={(e) =>
                  setForm({
                    ...form,
                    position: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Опыт
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Опыт"
                value={form.experience}
                onChange={(e) =>
                  setForm({
                    ...form,
                    experience: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Образование
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Образование"
                value={form.education}
                onChange={(e) =>
                  setForm({
                    ...form,
                    education: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Специализация
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Специализация"
                value={form.specialization}
                onChange={(e) =>
                  setForm({
                    ...form,
                    specialization: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Отделение
              </label>
              <input
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Отделение"
                value={form.department}
                onChange={(e) =>
                  setForm({
                    ...form,
                    department: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Биография врача
            </label>
            <textarea
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              rows={5}
              placeholder="Биография врача"
              value={form.biography}
              onChange={(e) =>
                setForm({
                  ...form,
                  biography: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Фото врача
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm text-slate-700"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] || null;
                setImage(file);
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImageSrc(reader.result as string);
                    setCrop({ x: 0, y: 0 });
                    setZoom(1);
                    setCroppedAreaPixels(null);
                  };
                  reader.readAsDataURL(file);
                } else {
                  setImageSrc(null);
                }
              }}
            />
          </div>

          {imageSrc ? (
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-4">
              <div className="relative h-72 w-full">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={3 / 4}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={(_, croppedAreaPixels) =>
                    setCroppedAreaPixels(croppedAreaPixels)
                  }
                  cropShape="rect"
                  showGrid={false}
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <label className="text-sm text-slate-700">Масштаб</label>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.05}
                  value={zoom}
                  onChange={(event) => setZoom(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-300"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Перетащите фото внутри рамки и измените масштаб для правильного
                отображения.
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-2xl bg-blue-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-900"
            >
              {editingId ? "Сохранить изменения" : "Добавить врача"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="inline-flex items-center rounded-2xl bg-slate-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-600"
              >
                Отмена
              </button>
            )}
          </div>
        </form>

        <div className="space-y-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {doctor.position}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => editDoctor(doctor)}
                    className="text-sm font-medium text-blue-800 hover:text-blue-900"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => deleteDoctor(doctor.id)}
                    className="text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = url;
  });
}

async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<Blob> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not get canvas context");
  }

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Кадрирование не удалось"));
        }
      },
      "image/jpeg",
      0.9,
    );
  });
}

export default AdminDoctors;
