import { useState } from 'react';
import { NormalInput, FillUpload, NormalButton } from '../../../common';
import { MEDIA_RATIO } from '../../../../services/constants'
import { homeBannerFormObj } from '../../../../model'
export const BannerDashboard = () => {

    const [bannerForm, setBannerForm] = useState({ ...homeBannerFormObj })


    const handleChangeForm = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setBannerForm({
            ...bannerForm,
            [name]: value
        })
    }

const handleFormSubmit=()=>{

    console.log('bannerForm-------------->',bannerForm)

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