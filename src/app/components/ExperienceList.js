import ExperienceCard from './ExperienceCard';
import experience from '/data/experience.json';

const ExperienceList = () => {
  const resumePath = "/resume/ErlanRangel_CV.pdf"
  return (
    <div className="flex flex-col gap-5">
      {experience.map((exp, index) => (
        <ExperienceCard
          key={index}
          period={exp.period}
          title={exp.title}
          details={exp.details}
        />
      ))}
      <a
        href={resumePath}
        download
        className="text-cat-teal hover:underline font-bold"
      >
        View full Resume
      </a>
    </div>
  );
}

export default ExperienceList;
