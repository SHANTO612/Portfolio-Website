"use client"
import FormControls from "../form-controls"
import { handleDeleteItem } from '@/services'

const controls = [
    { name: 'title', placeholder: 'Research / Paper Title', type: 'text', label: 'Title' },
    { name: 'year', placeholder: 'Year (or range)', type: 'text', label: 'Year' },
    { name: 'affiliation', placeholder: 'Venue (Conference / Journal) or Status', type: 'text', label: 'Venue / Status' },
    { name: 'details', placeholder: 'Details (one per line)', type: 'textarea', label: 'Details', rows: 6 },
]

export default function AdminExperienceView({formData,setFormData,handleSaveData,data,setAllData}){
    return <div className="w-full">
    <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div className="mb-10 space-y-6">
        {data && data.length ? (
            data.map((item,index) => (
                <div key={item._id || index} className="bg-white flex flex-col gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300" >
                    <p className="text-lg font-semibold text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.year} — {item.affiliation}</p>
                    {/* summary removed; using details only */}
                    {Array.isArray(item.details) && item.details.length ? (
                        <ul className="list-disc pl-6 text-gray-700 mt-2">
                            {item.details.map((d,i) => <li key={i}>{d}</li>)}
                        </ul>
                    ) : null}
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => {
                            const detailsValue = Array.isArray(item.details) ? item.details.join('\n') : (item.details || '');
                            setFormData({...item, details: detailsValue});
                        }} className="bg-yellow-400 text-black p-2 rounded">Edit</button>
                        <button onClick={async ()=>{
                            const res = await handleDeleteItem('experience', item._id);
                            if(res.success){
                                const updated = data.filter(d=>d._id !== item._id);
                                setAllData(prev=>({...prev, experience: updated}));
                            }
                        }} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-600">No Research / Papers data available</p>
        )}
    </div>

    <FormControls controls={controls}
     formData={formData}
     setFormData={setFormData}
    />
    <button onClick={() => handleSaveData()} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
        Save Research / Paper
    </button>
    </div>
 </div>
}
