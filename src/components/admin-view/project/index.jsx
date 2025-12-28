"use client"
import { useState, useEffect } from "react";
import FormControls from "../form-controls"
import { handleDeleteItem } from "@/services"

const controls = [
    { name: 'name', placeholder: 'Project name', type: 'text', label: 'Project name' },
    { name: 'featured', placeholder: 'Featured details (what makes this project notable)', type: 'textarea', label: 'Featured Details', rows: 3 },
    { name: 'technologies', placeholder: 'Enter Technologies (comma separated)', type: 'text', label: 'Technologies' },
]

export default function AdminProjectView({formData,setFormData,handleSaveData,data,setAllData}){
    const [links, setLinks] = useState(formData?.links || []);
    // keep formData.links in sync when formData changes
    useEffect(() => {
        if (formData && Array.isArray(formData.links)) {
            setLinks(formData.links);
        } else {
            setLinks([]);
        }
    }, [formData]);

    function updateLink(index, field, value){
        const updated = [...links];
        updated[index] = {...(updated[index]||{}), [field]: value};
        setLinks(updated);
        setFormData({...formData, links: updated});
    }
    function addLink(){
        const updated = [...links, {label:'', url:''}];
        setLinks(updated);
        setFormData({...formData, links: updated});
    }
    function removeLink(i){
        const updated = links.filter((_,idx) => idx !== i);
        setLinks(updated);
        setFormData({...formData, links: updated});
    }

    return <div className="w-full">
    <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-10 space-y-6">
        {data && data.length ? (
            data.map((item,index) => (
                <div key={item._id || index} className="bg-[#ffffff] flex flex-col gap-2 p-6 rounded-lg shadow-md border border-green-600 hover:border-green-800 transition duration-300" >
                    <p className="text-lg font-semibold text-gray-700">Name: {item.name}</p>
                    {item.featured ? <p className="text-sm text-emerald-700 mt-1">{item.featured}</p> : null}
                    <p className="text-lg text-gray-700">Technologies: {item.technologies}</p>
                    <p className="text-lg text-gray-700"><a href={item.website} target="_blank" rel="noreferrer">Website</a></p>
                    {item.github ? <p className="text-lg text-gray-700"><a href={item.github} target="_blank" rel="noreferrer">Github</a></p> : null}
                    {item.links && item.links.length ? (
                        <div className="mt-2">
                            {item.links.map((l, i) => (
                                <p key={i} className="text-sm text-gray-700">{l.label}: <a href={l.url} target="_blank" rel="noreferrer">{l.url}</a></p>
                            ))}
                        </div>
                    ) : null}
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => setFormData(item)} className="bg-yellow-400 text-black p-2 rounded">Edit</button>
                        <button onClick={async ()=>{
                            const res = await handleDeleteItem('project', item._id);
                            if(res.success){
                                const updated = data.filter(d=>d._id !== item._id);
                                setAllData(prev=>({...prev, project: updated}));
                            }
                        }} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                </div>
            ))
        ) : 
        <p className="text-center text-gray-600"> No Projects available</p>
    }
    </div>

    <FormControls controls={controls}
     formData={formData}
     setFormData={setFormData}
    /> 

    <div className="mb-4">
        <label className='block text-gray-700 text-sm font-bold mb-2'>Links (name + url)</label>
        {links && links.length ? links.map((l, i) => (
            <div className="flex gap-2 mb-2" key={i}>
                <input value={l.label||''} onChange={(e)=>updateLink(i,'label',e.target.value)} placeholder="Link name" className="shadow border rounded w-1/3 py-2 px-3" />
                <input value={l.url||''} onChange={(e)=>updateLink(i,'url',e.target.value)} placeholder="https://..." className="shadow border rounded w-2/3 py-2 px-3" />
                <button onClick={()=>removeLink(i)} className="bg-red-500 text-white p-2 rounded">Remove</button>
            </div>
        )) : <p className="text-sm text-gray-600">No links added</p>}
        <button onClick={addLink} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Add Link</button>
    </div>

    <button onClick={() => handleSaveData('project')} className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md">
        Save Project
    </button>
    </div>
 </div>
} 