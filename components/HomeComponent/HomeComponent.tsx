import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import SketchContainer from 'components/SketchContainer/SketchContainer';
import { motion } from 'framer-motion';
import { FC, useContext, useState } from 'react';
import {
  DEFAULT_IMAGE_PARAMETERS,
  getRandomParameters,
} from 'shared/constants/image-parameters.const';
import { BlobImagesContext } from 'shared/contexts/BlobImagesContext';

const HomeComponent: FC = () => {
  const [form, setForm] = useState(DEFAULT_IMAGE_PARAMETERS[0]);
  const { blobImages, setBlobImages } = useContext(BlobImagesContext);

  const saveCanvas = () => {
    const canvasElement = document.getElementsByClassName('p5Canvas')[0];

    (canvasElement as HTMLCanvasElement).toBlob((blob) => {
      setBlobImages((current) => [...current, blob]);
    });

    setForm(getRandomParameters());
  };

  return (
    <div className="flex flex-wrap justify-center gap-10">
      <div className="relative" style={{ height: 'fit-content' }}>
        <SketchContainer form={form} />
        <div className="absolute flex justify-between w-full bottom-5">
          <motion.img
            className="w-10 ml-4 bg-white rounded-full"
            src="/assets/icons/refresh.png"
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setForm(getRandomParameters());
            }}
          />
          <motion.img
            className="w-10 mr-4 bg-white rounded-full"
            src="/assets/icons/tick.png"
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              saveCanvas();
            }}
          />
        </div>
      </div>

      <div style={{ width: '400px', height: '650px' }}>
        {blobImages.length > 0 && <ImageCarousel />}
      </div>
    </div>
  );
};

export default HomeComponent;
