import Social from "./Social";
import socials from "/data/contact.json"

const SocialList = () => {
  return (
    <div id="socials" className="flex gap-3">
      {socials.map((social, index) => (
        <Social
          key={index}
          img={social.img}
          href={social.url}
          alt={social.alt}
        />
      ))}
    </div>
  );
}

export default SocialList;
