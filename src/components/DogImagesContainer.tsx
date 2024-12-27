import { useEffect, useState } from 'react';
import DogImages from './DogImages';


const DogImagesContainter: React.FC = () => {
  const [images, setImages] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://dog.ceo/api/breeds/image/random/3'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch dog images');
        }
        const data = await response.json();
        setImages(data.message as string[]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDogImages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return images ? <DogImages images={images} /> : <p>No images available</p>;
};

export default DogImagesContainter;
