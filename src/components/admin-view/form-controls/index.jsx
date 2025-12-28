'use client'
export default function FormControls({controls,formData,setFormData}){
    return controls.map(controlItem => {
        const value = formData?.[controlItem.name] ?? '';
        return (
            <div key={controlItem.name} className="mb-4" >
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    {controlItem.label}
                </label>
                {controlItem.type === 'textarea' ? (
                    <textarea
                        placeholder={controlItem.placeholder}
                        name={controlItem.name}
                        value={value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [controlItem.name] : e.target.value
                            })
                        }}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
                        rows={controlItem.rows || 4}
                    />
                ) : controlItem.type === 'checkbox' ? (
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name={controlItem.name}
                            checked={!!formData?.[controlItem.name]}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [controlItem.name]: e.target.checked,
                                });
                            }}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{controlItem.placeholder}</span>
                    </div>
                ) : (
                    <input
                        placeholder={controlItem.placeholder}
                        type={controlItem.type}
                        name={controlItem.name}
                        value={value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [controlItem.name] : e.target.value
                            })
                        }}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
                    />
                )}
            </div>
        )
    })
}