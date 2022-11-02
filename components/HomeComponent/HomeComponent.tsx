import SketchContainer from 'components/SketchContainer/SketchContainer';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import {
  DEFAULT_IMAGE_PARAMETERS,
  getRandomParameters,
} from 'shared/constants/image-parameters.const';

const HomeComponent: FC = () => {
  const [form, setForm] = useState(DEFAULT_IMAGE_PARAMETERS[0]);

  return (
    <div className="relative">
      <SketchContainer form={form} />
      <div className="absolute flex justify-between w-full bottom-32">
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
        />
      </div>
    </div>
  );
};

export default HomeComponent;
