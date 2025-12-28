'use client'
import FormControls from "../form-controls";
const controls = [
  { name: 'title', placeholder: 'Achievement Title', type: 'text', label: 'Title' },
  { name: 'description', placeholder: 'Description', type: 'text', label: 'Description' },
  { name: 'year', placeholder: 'Year', type: 'text', label: 'Year' },
];

import { handleDeleteItem } from "@/services";

export default function AdminAchievementsView({ formData, setFormData, handleSaveData, data, setAllData }){
  return (
    <div className="w-full">
      <div className="mb-10 space-y-6">
        {data && data.length ? (
          data.map((item, idx) => (
            <div key={item._id || idx} className="bg-white p-6 rounded-lg shadow-md border border-green-600">
              <p className="font-bold">{item.title}</p>
              <p className="text-sm">{item.year}</p>
              <p className="mt-2">{item.description}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setFormData(item)} className="bg-yellow-400 text-black p-2 rounded">Edit</button>
                <button onClick={async () => {
                  const res = await handleDeleteItem('achievement', item._id);
                  if (res.success) {
                    const updated = data.filter(d => d._id !== item._id);
                    setAllData(prev => ({ ...prev, achievement: updated }));
                  }
                }} className="bg-red-500 text-white p-2 rounded">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600"> No Achievements Available</p>
        )}
      </div>
      <FormControls controls={controls} formData={formData} setFormData={setFormData} />
      <button onClick={() => handleSaveData('achievement')} className="mt-4 border border-blue-600 bg-blue-600 text-white p-3 font-bold rounded-md">Add Achievement</button>
    </div>
  )
}
