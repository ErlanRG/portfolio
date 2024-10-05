import Image from 'next/image';
import Modal from './Modal';
import SkillList from './SkillList';

const Project = ({ img, title, description, href, details, skills }) => {
  const modalId = `modal-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="border border-cat-text rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto">
      <Image
        src={img}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />
      <div className="p-4 text-center flex flex-col gap-3 align-items-center">
        <h2 className="text-cat-maroon text-lg font-bold">{title}</h2>
        <p className="text-cat-text">{description}</p>
        <Modal title={title} href={href} modalId={modalId}>
          <p className="text-cat-text">{details}</p>
          <h1 className="text-cat-text pt-3">Skills:</h1>
          <SkillList skills={skills} />
        </Modal>
      </div>
    </div>
  );
};

export default Project;
