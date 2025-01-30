interface SectionProps {
  sectionTitle: string;
}

const Section: React.FC<SectionProps> = ({ sectionTitle }) => {
  return (
    <section className="dashboard-section">
      <h2>{sectionTitle}</h2>
    </section>
  );
};

export default Section;
