import { FC, memo, useContext, useRef } from 'react';
import {
  ResponsiveContainer,
  StackedCarousel,
  StackedCarouselSlideProps,
} from 'react-stacked-center-carousel';
import { BlobImagesContext } from 'shared/contexts/BlobImagesContext';
import Image from 'next/image';

const ImageSlide = memo((props: StackedCarouselSlideProps) => {
  const { data, dataIndex } = props;
  const blob = data[dataIndex];
  const imageUrl = URL.createObjectURL(blob);

  return (
    <div>
      <Image
        height={'498px'}
        width={'280px'}
        style={{
          objectFit: 'cover',
          borderRadius: 5,
          userSelect: 'none',
        }}
        draggable={false}
        src={imageUrl}
      />
    </div>
  );
});

const ImageCarousel: FC = () => {
  const { blobImages } = useContext(BlobImagesContext);
  const ref = useRef();

  return (
    <div className="relative 6">
      <h2 className="text-center text-white text-xl font-semibold mb-6">
        {blobImages.length} Selected wallpapers
      </h2>

      <ResponsiveContainer
        key={blobImages.length}
        carouselRef={ref}
        render={(_, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={ImageSlide}
              slideWidth={315}
              carouselWidth={427}
              height={560}
              data={blobImages}
              maxVisibleSlide={blobImages.length >= 3 ? 3 : 1}
              transitionTime={250}
            />
          );
        }}
      />
    </div>
  );
};

export default ImageCarousel;
