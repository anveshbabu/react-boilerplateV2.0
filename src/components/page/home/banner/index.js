import { useState } from 'react';
import { NormalInput, FillUpload, NormalButton } from '../../../common';
import { MEDIA_RATIO } from '../../../../services/constants'
import { homeBannerFormObj,storageObj } from '../../../../model';
import {storageImageUpload} from '../../../../services/api'
export const BannerDashboard = () => {

    const [bannerForm, setBannerForm] = useState({ ...homeBannerFormObj })
    const [storageObjForm, setStorageObjForm] = useState({ ...storageObj })


    const handleChangeForm = (event) => {
        const target = event.target;
        const name = target.name;
        const value = name !== 'img'? target.type === 'checkbox' ? target.checked : target.value:target.file;
        
        console.log('bannerForm-------------->',value)
        setBannerForm({
            ...bannerForm,
            [name]: value
        })
    }

const handleFormSubmit=()=>{

    const storageObj={
        fileType:bannerForm.img.type,
        file:bannerForm.img,
        name:bannerForm.img.name,
        path:"home"
    }

    storageImageUpload(storageObj)

}


    return (

        <div className="row">
            <div className="col-md-6 mb-5">

                <NormalInput label='Enter Title' value={bannerForm.title} name='title' onChange={handleChangeForm} />
                <NormalInput label='Enter Description' multiline
                    maxRows={4} value={bannerForm.desc} name='desc' onChange={handleChangeForm}  />

                <NormalButton label='Submit' onClick={handleFormSubmit} />

            </div>
            <div className="col-md-6">
                <FillUpload mediaRatio={MEDIA_RATIO["1:1"]} value={bannerForm.img} name='img' onChange={handleChangeForm} />
            </div>
        </div>
    )
}