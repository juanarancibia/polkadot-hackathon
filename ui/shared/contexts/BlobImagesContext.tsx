import React, { Dispatch, SetStateAction, useState } from 'react';

interface BlobImagesContextInterface {
  blobImages: Blob[];
  setBlobImages: Dispatch<SetStateAction<Blob[]>>;
}

export const BlobImagesContext =
  React.createContext<BlobImagesContextInterface | null>(null);

export const BlobImagesContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [blobImages, setBlobImages] = useState<Blob[]>([]);

  return (
    <BlobImagesContext.Provider value={{ blobImages, setBlobImages }}>
      {children}
    </BlobImagesContext.Provider>
  );
};
