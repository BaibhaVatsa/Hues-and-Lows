import React from 'react';
import { Button } from '@material-ui/core';

type FileInputProps = {
    handleFileUpload: (event: React.MouseEvent<HTMLInputElement>) => void;
}

// TODO add submission
const FileInputComponent: React.FC<FileInputProps> = (props: FileInputProps) => {
    return (
        <div>
            <Button
                variant='outlined'
                component='label'
                color='secondary'
                size='large'
            >
                <input type='file' style={{ display: 'none' }} />
            </Button>
        </div>
    );
}

FileInputComponent.propTypes = {
    // TODO add handleFileUpload
}

export default FileInputComponent;