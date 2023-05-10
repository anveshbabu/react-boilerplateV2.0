import { getStorage, ref, uploadBytes,getDownloadURL  } from "firebase/storage";
import { Toast } from '../../toast';

export const storageImageUpload = (file) => {
    return new Promise(async (resolve, reject) => {
        if (!(!!file.path && !!file.fileType && !!file.name)) {
            Toast({ type: 'danger', message: 'File config missing', title: 'Error' });
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `${file.path}/${file.name}`);

        // Create file metadata including the content type
        /** @type {any} */
        const metadata = {
            contentType: file.fileType,
        };

        // Upload the file and metadata
        uploadBytes(storageRef, file, metadata).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                resolve(downloadURL)
              });
           
        }).catch((e) => {
            Toast({ type: 'danger', message: 'Internal Server Error', title: 'Error' })
            reject(e)
        });
    })
}