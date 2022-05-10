// Fichero src/components/ImageReader.js
import { useRef, useState } from 'react';
import Avatar from '../images/cat.jpg';

const ImageReader = (props) => {
  const [fileSize, setFileSize] = useState(0);
  const [fileType, setFileType] = useState('desconocida');
  const fileElement = useRef();
  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];
    if (selectedFile) {
      setFileSize(selectedFile.size);
      setFileType(selectedFile.type);
      fileReader.readAsDataURL(selectedFile);
    }
  };
  const getImage = () => {
    const photo = fileReader.result;
    props.handleImage(photo);
  };

  fileReader.addEventListener('load', getImage);
  const photo = props.photo === '' ? Avatar : props.photo;
  return (
    <div className="filled-button">
      <label htmlFor="image" className="input-orange box-text">
        Añadir imagen
        <input
          id="image"
          className="hidden-input"
          ref={fileElement}
          type="file"
          name="image-reader"
          onChange={handleFile}
        />
      </label>

      <span
        className="box-image"
        style={{ backgroundImage: `url(${photo})` }}
      ></span>
    </div>
  );
};

export default ImageReader;
