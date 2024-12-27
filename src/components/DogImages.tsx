interface DogImagesProps {
  images: string[];
}
const DogImages: React.FC<DogImagesProps> = ({ images }) =>
  images.map((image: string, index: number) => (
    <img key={index} src={image} alt="dog" />
  ));

export default DogImages;