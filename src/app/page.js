import ContactForm from './components/ContactForm';
import ExperienceList from './components/ExperienceList';
import HighText from './components/HighlightedText';
import Image from 'next/image';
import ProjectList from './components/ProjectList';
import Section from './components/Section';
import SocialList from './components/SocialList';
import Text from './components/Text';
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
              <Text className="pt-4">
                I am a <HighText>software developer</HighText> and an
                <HighText> electronics engineer</HighText> with over
                <HighText> 7 years of experience</HighText> in the
                semiconductor industry. I am passionate about technology,
                especially the world of <HighText>Linux</HighText> and
                <HighText> open-source software</HighText>. I am a quick learner
                who adapts easily to different technologies and development
                environments, always seeking new ways to innovate and improve.
              </Text>
              <Text className="py-2">Find me on social media or send me an email!</Text>
              <SocialList />
            </div>
            {/* Right div */}
            <Image src="/images/software_dev_vector.png" width={600} height={600} className="order-1 lg:order-2" alt="dev_image" />
          </div>
        </Section>

        {/* About Me Section */}
        <Section id="about">
          <div className="flex flex-col align-items-center gap-5">
            <Title>About Me</Title>
            <div id="about-info" className="flex flex-col lg:flex-row items-center gap-5 w-9/12 justify-around">
              <Image src="/images/20230926_232410_IMG_2453.jpg" width={460} height={460} className="rounded-5 order-1" alt="dev_image" />
              <div className="flex flex-col w-full lg:w-1/3 items-center gap-3 order-2">
                <Text>
                  Hi! I am Erlan Rangel and I like <HighText>tech!</HighText> I am primarily interested in developing
                  <HighText> desktop applications</HighText>, command line interface tools <HighText>(CLI)</HighText>,
                  text-based user interfaces <HighText>(TUI)</HighText>, <HighText>backend</HighText>, and <HighText>embedded systems</HighText>,
                  with a specialization in <HighText>Linux</HighText> environments.
                </Text>
                <Text>
                  Although not my main focus, I also have experience with
                  <HighText> frontend</HighText> and <HighText>web development</HighText> using the most sought-after tools on the market.
                </Text>
                <Text>
                  Fast-forward to today, I have the privilege of working for a company as a software developer.
                </Text>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="flex flex-col items-center gap-5 w-9/12">
            <Title>Projects</Title>
            <ProjectList />
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <div className="flex flex-col items-center justify-around gap-5 w-6/12">
            <Title>Experience</Title>
            <ExperienceList />
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <div className="flex flex-col items-center justify-around gap-5 w-6/12">
            <Title>Contact</Title>
            <ContactForm />
          </div>
        </Section>
      </div>
    </div>
  );
}
