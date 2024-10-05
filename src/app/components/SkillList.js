import SkillBadge from "./SkillBadge";

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3 pt-3 place-content-center max-w-md">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;
