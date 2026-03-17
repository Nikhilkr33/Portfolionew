// React import not needed with the new JSX transform

interface WorkImageProps {
  image: string;
  alt: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: WorkImageProps) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
    );
  }
  return <img src={image} alt={alt} />;
};

export default WorkImage;