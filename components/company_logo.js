import Link from "next/link";
import Image from "next/image";

export default function CompanyLogo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <Image
        src="/logos/company-logo-removebg-preview.png"
        alt="Company logo"
        width={150}
        height={150}
      />
    </Link>
  );
}
