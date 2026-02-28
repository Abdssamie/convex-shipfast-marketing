export default function ClerkLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 30"
      fill="currentColor"
      className="h-6 w-auto"
    >
      <circle cx="15" cy="15" r="10" opacity="0.2" />
      <circle cx="15" cy="15" r="6" />
      <text
        x="32"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
      >
        Clerk
      </text>
    </svg>
  );
}
