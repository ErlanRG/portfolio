import Image from "next/image";
import Link from "next/link";

const Social = ({ img, href, alt }) => {
  return (
    <Link href={href}>
      <Image src={img} height={25} width={25} alt={alt} style={{ cursor: "pointer" }} />
    </Link>
  );
}

export default Social;
