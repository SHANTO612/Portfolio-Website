'use client'
import FormControls from "../form-controls"
const controls = [
    {
        name: 'heading',
        placeholder: 'Enter Heading Text',
        type: 'text',
        label: 'Enter Heading Text'
    },
    {
        name: 'summary',
        placeholder: 'Enter Carrier Summary',
        type: 'text',
        label: 'Enter Carrier Summary'
    }
] 
 
export default function AdminHomeView({formData,setFormData,handleSaveData}){
    console.log(formData);
    return <div className="w-full" >
            <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormControls controls={controls}
         formData={formData}
         setFormData={setFormData}
        /> 
                <div className="flex gap-2">
                <button onClick={() => handleSaveData('home')} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
                Save Changes
                </button>
                <button onClick={async ()=>{
                    if(formData && formData._id){
                        const { handleDeleteItem } = await import('@/services');
                        const res = await handleDeleteItem('home', formData._id);
                        if(res.success){
                            setFormData({ heading: '', summary: '' })
                        }
                    }
                }} className="mt-[5px] border border-red-600 bg-red-600 text-white p-3 font-bold text-[16px] rounded-md">Delete</button>
                </div>
            </div>
         </div>
}