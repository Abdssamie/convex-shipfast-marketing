import Image from "next/image";

type FluxkitLogoProps = {
  size?: number;
  className?: string;
};

export default function FluxkitLogo({
  size = 28,
  className,
}: FluxkitLogoProps) {
  return (
    <Image
      src="/fluxkit.png"
      alt="FluxKit logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
