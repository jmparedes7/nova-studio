type WhatsappFloatingButtonProps = {
  href: string;
  label: string;
};

export function WhatsappFloatingButton({
  href,
  label,
}: WhatsappFloatingButtonProps) {
  return (
    <a
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[#25d366] px-5 text-sm font-bold text-white shadow-soft transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25d366]/30"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <span className="text-lg sm:mr-2">WA</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
