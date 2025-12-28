'use client'
import { handleDeleteItem } from '@/services'

export default function AdminContactView({ data, setAllData }){
    return (
        <div className="flex flex-col gap-5">
            {data && data.length ?
            data.map((item, idx) => (
                <div key={item._id || idx} className="p-5 border">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.message}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={async ()=>{
                        const res = await handleDeleteItem('contact', item._id);
                        if(res.success){
                          const updated = data.filter(d => d._id !== item._id);
                          setAllData(prev => ({ ...prev, contact: updated }));
                        }
                      }} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                </div>

            )) : null }
        </div>
    )
}