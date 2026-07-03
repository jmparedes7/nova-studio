type WhatsappFloatingButtonProps = {
  href: string;
  label: string;
};

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.48-8.41Zm-8.44 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c-.01 5.45-4.45 9.86-9.9 9.86Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsappFloatingButton({
  href,
  label,
}: WhatsappFloatingButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      aria-label={label}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-50 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-[#25d366] px-4 text-xs font-bold text-white shadow-[0_16px_38px_rgba(37,211,102,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_20px_46px_rgba(37,211,102,0.34)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 sm:bottom-5 sm:right-5 sm:min-h-14 sm:min-w-14 sm:px-5 sm:text-sm"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <WhatsappIcon className="size-5 sm:mr-2" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
