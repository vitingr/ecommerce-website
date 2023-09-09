import { CldUploadButton } from 'next-cloudinary';
import { IoCamera } from 'react-icons/io5'

interface uploadThing {
  file: any,
  value: any
}

const UploadPhoto = ({ file, value }: uploadThing) => {
  const handleUpload = async (e: any) => {
    try {
      await file(e.info.secure_url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset='ftq5qxom' className='w-full h-[200px] p-10 border border-zinc-400 border-dashed flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <IoCamera size={30} />
        <h3 className='text-zinc-500'>Selecionar Foto</h3>
      </div>
    </CldUploadButton>
  )
}

export default UploadPhoto