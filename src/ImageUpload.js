import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './ImageUpload.css';
import { storage, db } from './firebase';
import firebase from 'firebase';


function ImageUpload({ username }) {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                //progress function...a
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //Error function..
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function...
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        //post the image inside db
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            username: username,
                            imageUrl: url,
                        });
                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    });
            }
        );
    };

    return (
        <div>
            <progress className='imageupload_progress' value={progress} max="100" />
            <input
                type="text"
                placeholder="Enter a caption.."
                onChange={(event) => setCaption(event.target.value)}
            />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload