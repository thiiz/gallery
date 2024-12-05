'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react'; 
import useDrivePicker from 'react-google-drive-picker'

export const Upload = () => {
  const [images, setImages] = useState([]);  
  const [imageError, setImageError] = useState(false);  
  const [openPicker, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: '841323749227-ipk4eqfu6vjkrrvta6h2rqht91qho4eg.apps.googleusercontent.com', 
      developerKey: 'AIzaSyB2imbPujyCmH5NZpq5tFerjGKweVKP_0E', 
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: false,
      showUploadFolders: false,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        if(data.docs)
          setImages(data.docs.map((doc) => doc.id))
      },
    })
  }
  useEffect(() => {

  }, [])
  return (
    <>
        {images && images.length > 0 && (
        <div className='w-screen h-screen bg-black/40 z-40 left-0'>
          {images.map((image, index) => (
            <div className='relative w-40 h-40'>
              <Image src={`
                https://drive.usercontent.google.com/download?id=${image}&export=view`} alt={`Imagem ${index + 1}`} fill onError={() => setImageError(true)} />
                </div>
          ))}
          {imageError && <p>imagem privada</p>}
        </div>
      )}
    <div className="flex justify-center my-8">
      <div className="rounded-lg shadow-xl bg-gray-950 lg:w-1/2">
        <div className="m-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed border-gray-500 hover:bg-gray-800 hover:border-gray-400">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-600 group-hover:text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd" />
                </svg>
                <button onClick={() => handleOpenPicker()} className="pt-1 text-sm tracking-wider text-gray-600 group-hover:text-gray-600">
                  Select a photo</button>
              </div>      
            </label>
          </div>
        </div>
      </div>
    </div>
                  </>
  )
}