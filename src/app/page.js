import HighText from './components/HighlightedText';
import Image from 'next/image';
import ProjectList from './components/ProjectList';
import SocialList from './components/SocialList';
import Section from './components/Section';
import Title from './components/Title';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="pt-16 flex-grow snap-y snap-mandatory">
        {/* Home info */}
        <Section id="home">
          <div id="home_info" className="container flex flex-wrap justify-around items-center gap-4 lg:flex-row-reverse my-5">
            {/* Left div */}
            <div className="flex flex-col w-full lg:w-1/3 items-center gap-3 order-2 lg:order-1">
              <Title>Hi! I am Erlan Rangel</Title>
              <p className="text-cat-text text-center text-xl leading-relaxed pt-4">
                I am a <HighText>software developer</HighText> and an
                <HighText> electronics engineer </HighText>with over
                <HighText> 7 years of experience </HighText> in the
                semiconductor industry. I am passionate about technology,
                especially the world of <HighText>Linux </HighText> and
                <HighText> open-source software</HighText>. I am a quick learner
                who adapts easily to different technologies and development
                environments, always seeking new ways to innovate and improve.
              </p>
              <p className="text-cat-text text-center text-xl leading-relaxed py-2">Find me on social media or send me an email! </p>
              <SocialList />
            </div>
            {/* Right div */}
            <Image src="/images/software_dev_vector.png" width={600} height={600} className="order-1 lg:order-2" alt="dev_image" />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects">
          <div className="flex flex-col items-center gap-5 w-9/12">
            <Title>Projects</Title>
            {/* TODO: add project images */}
            <ProjectList />
          </div>
        </Section>

        {/* About */}
        <Section id="about">
          <Title>About me</Title>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <Title>Contact</Title>
        </Section>
      </div>
    </div>
  );
}
