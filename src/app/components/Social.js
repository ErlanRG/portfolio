import Image from "next/image";
import Link from "next/link";

const Social = ({ src, href, alt }) => {
  return (
    <Link href={href}>
      <Image src={src} height={25} widht={25} alt={alt} style={{ cursor: "pointer" }} />
    </Link>
  );
}

export default Social;
