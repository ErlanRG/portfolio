const ExperienceCard = ({ period, title, details }) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg shadow-xl hover:bg-cat-surface0 transition duration-300 ease-in-out transform hover:scale-105 group">
      {/* Time */}
      <div className="w-40 flex-shrink-0">
        <h1 className="text-cat-teal font-bold text-lg">{period}</h1>
      </div>
      {/* Details */}
      <div className="flex flex-col gap-2">
        <h1 className="text-cat-text group-hover:text-cat-maroon font-bold text-lg transition duration-300 ease-in-out">{title}</h1>
        <p className="text-cat-text text-sm">{details}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;