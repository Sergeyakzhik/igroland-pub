import React from 'react';
import Dropzone from 'react-dropzone';
 
const DropZone = ({ isSquare, isError, field: { value }, placeholder, setFieldValue, setFieldTouched, setFieldError }) => {

    const handleDrop = file => {
        const reader = new FileReader();

        reader.onerror = () => console.log('file reading has failed');

        reader.onload = () => {
            if (isSquare) {
                const img = new Image();

                img.onload = () => {
                    if (img.width === img.height) {
                        setFieldValue('image', { file, preview: reader.result });
                    } else {
                        setFieldError('image', 'Image should be square');
                    }
                }

                img.src = reader.result;
            } else {
                setFieldValue('image', { file, preview: reader.result });
            }

            setFieldTouched('image');
        };

        reader.readAsDataURL(file);
    };

    return (
        <Dropzone onDrop={acceptedFiles => handleDrop(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
                <div className={`drop-container ${isSquare ? 'square' : ''} ${isError ? 'dropzone-error' : ''}`}>
                    <div { ...getRootProps({ className: "dropzone" }) }>
                        <input { ...getInputProps() } />
                        {!value && (<p>{placeholder}</p> || <p>Drag'n'drop some files here, or click to select them</p>)}
                    </div>
                    {value && (
                        <div className='thumb'>
                            <img
                                src={value.preview}
                                className='thumb-image'
                                alt="img"
                            />
                        </div>
                    )}
                </div>
            )}
        </Dropzone>
    );
};

export default DropZone;