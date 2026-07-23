interface Service {
  title: string;
  description: string;
}

const icons = {
  Диагностика: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <circle
        cx="20"
        cy="20"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M26 26l8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 14l-2 8 8 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Хирургическая помощь": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <path
        d="M12 34l8-8 14-14 6 6-14 14-8 8-6-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 29l5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Терапевтическое лечение": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <rect
        x="12"
        y="12"
        width="24"
        height="24"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M24 16v16M16 24h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Лабораторные исследования": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <path
        d="M16 10h16l6 12-6 12H16l-6-12 6-12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M18 24h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  Реанимация: (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <rect
        x="10"
        y="10"
        width="28"
        height="28"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M16 26h8l4-8 4 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Консультации специалистов": (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-10 w-10">
      <path
        d="M15 16h18M15 24h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 34c0-5 4-9 9-9h2c5 0 9 4 9 9v2H14v-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function ServiceCard({ service }: { service: Service }) {
  const icon = icons[service.title as keyof typeof icons] ?? icons.Диагностика;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-800 transition duration-300 group-hover:bg-blue-100">
          {icon}
        </div>
        <span className="text-xs font-medium text-blue-500">
          Медицинская помощь
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold leading-tight text-blue-800">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="mt-6 flex items-end justify-between gap-4">
        <button
          type="button"
          className="rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-800 transition duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          aria-label={`Подробнее об услуге ${service.title}`}
        >
          Подробнее
        </button>
        <span className="text-xs font-medium text-slate-400">
          Государственная помощь
        </span>
      </div>
    </article>
  );
}

export default ServiceCard;
