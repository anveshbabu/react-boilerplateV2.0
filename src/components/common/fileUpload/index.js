import { useEffect, useRef, useState } from 'react'
import { ICON } from '../../../services/icons'
import { MEDIA_RATIO } from '../../../services/constants'
import './fileUpload.scss'

const FillUpload = (props) => {
    const inputFile = useRef(null);
    const [file, setFile] = useState('')
    const [fileType, setFileType] = useState('')

    let {
        ratioClass = "ratio-16x9",
        className = "",
        mediaRatio = MEDIA_RATIO['16:9'],
        accept = "image/*",
        name="",
        onChange=()=>{},
        value=''
    } = props;

    const handleTrigerFileClick = () => {
        try {
            if (!file) {
                inputFile.current.click();
            }
        } catch (e) {

        }

    };


    useEffect(()=>{
        if(onChange){
            onChange({
                target:{
                    value:file,
                    name,
                }
                
            })
        }

    },[file, name, onChange])

    useEffect(()=>{
        if(value){
            setFile(value)
        }

    },[value])


    const handleFileChange = (event) => {
        try {
            let input = event.target;
            if (input.files && input.files[0]) {
                if (input.files[0].type.includes('image')) {
                    setFileType('image')
                } else if (input.files[0].type.includes('audio')) {
                    setFileType('audio')
                } else if (input.files[0].type.includes('video')) {
                    setFileType('video')
                }
                var reader = new FileReader();
                console.log('reader------------>',reader)
                reader.onloadstart = function(event) {
                    console.log('event.start---------------->')
                };
                reader.onprogress = function(event) {
                    if (event.lengthComputable) {
                       console.log('event.lengthComputable---------------->',event.lengthComputable)
                    }
                };
             
                reader.onload = async (e) => {
                   
    
                    if (input.files[0].type.includes('image')) {
                        var image = new Image();
                        image.src = e.target.result;
                        image.onload = function () {
                            var height = this.height;
                            var width = this.width;
                            var r = gcd(width, height);
                            const overAllRatio = `${(width / r)} : ${(height / r)}`;
                            if (mediaRatio.replace(/\s/g, "") === overAllRatio.replace(/\s/g, "") && !input.files[0].type.includes('video')) {
                                setFile(e.target.result)
                                // return;
                            } else if (input.files[0].type.includes('video')) {

                            } else {
                                alert('Recommended ratio 16:9');
                                return;
                            }

                        }
                    } else {
                        if (input.files[0].type.includes('video')) {
                            const duration = await getVideoDuration(input.files[0]);
                            console.log('----------------->', {
                                duration: duration,

                            })
                        }
                        setFile(e.target.result)
                    }


                };

                reader.onloadstart = function(event) {
                    console.log('event.start---------------->')
                };
                reader.onprogress = function(event) {
                    if (event.lengthComputable) {
                       console.log('event.lengthComputable---------------->',event.lengthComputable)
                    }
                };

                reader.readAsDataURL(input.files[0]);
            }
        } catch (e) {
            console.log('errrrr-------->', e)

        }

    };

    const handleSetMediaDom = (file) => {
        if (fileType == 'image') {
            return (<img src={file} className='img-fluid h-100' />)
        } else if (fileType == 'audio') {
            setFileType('audio')
        } else if (fileType == 'video') {
            return (<video controls className='img-fluid h-100'>
                <source src={file} />
            </video>)
        }
    };


    const handleRemoveMedia = () => {
        setFile('')
    };

    const gcd = (a, b) => {
        return (b == 0) ? a : gcd(b, a % b);
    };


    const getVideoDuration = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const media = new Audio(reader.result);
                media.onloadedmetadata = () => resolve(media.duration);
            };
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
        });

    const handleChange = async (e) => {
        const duration = await getVideoDuration(e.target.files[0]);
        document.querySelector("#duration").innerText = `Duration: ${duration}`;
    };


    return (
        <div className='img-wrape'>
            <div className={`ratio ${ratioClass} ${className}`}>
                <div className={`img-continer d-flex justify-content-center align-items-center `} onClick={handleTrigerFileClick}>
                    {file ? <>
                        {handleSetMediaDom(file)}

                        <label className='media-close' onClick={handleRemoveMedia}>
                            {ICON.FILL_CANCEL}
                        </label>


                    </>
                        : ICON.ADD_IMAGE_Video}

                </div>

            </div>

            <input ref={inputFile} type='file' accept={accept} className='d-none' onChange={handleFileChange} />
        </div>

    )

};


export default FillUpload;