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
    <article className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-50 text-sky-700 transition duration-300 group-hover:bg-sky-100 group-hover:text-sky-900">
          {icon}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Услуга
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-semibold leading-tight text-slate-950">
        {service.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-slate-600">
        {service.description}
      </p>

      <div className="mt-8 flex items-end justify-between gap-4">
        <button
          type="button"
          className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          aria-label={`Подробнее об услуге ${service.title}`}
        >
          Подробнее
        </button>
        <span className="text-sm font-medium text-slate-400">
          Государственная помощь
        </span>
      </div>
    </article>
  );
}

export default ServiceCard;
