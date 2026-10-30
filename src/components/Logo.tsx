/** Icon only: phone with code brackets (mobile app developer). Color follows `text-*` classes. */
export default function Logo({ className = 'h-7 w-auto text-mint' }: { className?: string }) {
  return (
    <svg viewBox="15 5 34 54" className={className} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="19" y="9" width="26" height="46" rx="7" strokeWidth="4" />
      <path d="M29 17h6" strokeWidth="3" />
      <path d="M29 26l-5 7 5 7M35 26l5 7-5 7" strokeWidth="3" />
    </svg>
  )
}
