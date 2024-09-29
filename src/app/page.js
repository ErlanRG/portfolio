import HighText from './components/HighlightedText';
import Image from 'next/image';
import React from 'react';
import Section from './components/Section';
import Social from './components/Social';
import devLogo from './assets/software_dev_vector.png';
import ghLogo from './assets/github-142-svgrepo-com.png';
import gmailLogo from './assets/gmail-svgrepo-com.png';
import linkedinLogo from './assets/linkedin-rounded-svgrepo-com.png';
import mastodonLogo from './assets/mastodon-simple-svgrepo-com.png';

export default function Home() {
  return (
    <div>
      <div className="pt-16 overflow-y-scroll h-screen snap-y snap-mandatory">
        {/* Home info */}
        <Section id="home" bgColor="bg-cat-base">
          <div id="home_info" className="container flex flex-wrap justify-around items-center gap-4 lg:flex-row-reverse">
            {/* Left div */}
            <div className="flex flex-col w-full lg:w-1/3 items-center gap-3 order-2 lg:order-1">
              <h1 className="text-4xl text-start font-bold text-cat-maroon">Hi! I am Erlan Rangel</h1>
              <p className="text-cat-text text-center text-xl leading-relaxed pt-4">
                I am a <HighText>software developer</HighText> and an
                <HighText> electronics engineer </HighText>with over
                <HighText>7 years of experience </HighText> in the
                semiconductor industry. I am passionate about technology,
                especially the world of <HighText>Linux </HighText> and
                <HighText>open-source software</HighText>. I am a quick learner
                who adapts easily to different technologies and development
                environments, always seeking new ways to innovate and improve.
              </p>
              <p className="text-cat-text text-center text-xl leading-relaxed py-2">Find me on social media or send me an email! </p>
              <div id="socials" className="flex gap-3">
                <Social src={ghLogo} href="https://github.com/ErlanRG" alt="github_logo" />
                <Social src={gmailLogo} href="mailto:erlanrangel@gmail.com" alt="gmail_logo" />
                <Social src={linkedinLogo} href="https://www.linkedin.com/in/erlanrangel" alt="mastodon_logo" />
                <Social src={mastodonLogo} href="https://fosstodon.org/@tateyrg" alt="mastodon_logo" />
              </div>
            </div>
            {/* Right div */}
            <Image src={devLogo} width={600} height={600} className="order-1 lg:order-2" alt="dev_image" />
          </div>
        </Section>

        {/* About */}
        <Section id="projects" bgColor="bg-cat-base">
          <h1 className="text-cat-text text-4xl">Projects</h1>
        </Section>
        <Section id="about" bgColor="bg-cat-base">
          <h1 className="text-cat-text text-4xl">About Me</h1>
        </Section>
        <Section id="contact" bgColor="bg-cat-base">
          <h1 className="text-cat-text text-4xl">Contact</h1>
        </Section>
      </div>
    </div>
  );
}
