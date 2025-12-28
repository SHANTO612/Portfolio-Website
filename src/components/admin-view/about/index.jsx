"use client";
import { useEffect, useMemo, useState } from "react";
import FormControls from "../form-controls";

const controls = [
  {
    name: "skills",
    placeholder: "Skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
  formData,
  setFormData,
  handleSaveData,
  setAllData
}) {
  const [passionInput, setPassionInput] = useState("");
  const passions = useMemo(() => {
    const v = formData?.interest_and_passion;
    if (Array.isArray(v)) return v.map((s) => String(s).trim()).filter(Boolean);
    if (typeof v === "string") {
      return v
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return [];
  }, [formData?.interest_and_passion]);

  useEffect(() => {
    const v = formData?.interest_and_passion;
    if (typeof v === "string") {
      const normalized = v
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      setFormData({ ...formData, interest_and_passion: normalized });
    }
  }, [formData, setFormData]);

  function addPassion() {
    const value = passionInput.trim();
    if (!value) return;
    setFormData({
      ...formData,
      interest_and_passion: [...passions, value],
    });
    setPassionInput("");
  }

  function removePassion(indexToRemove) {
    setFormData({
      ...formData,
      interest_and_passion: passions.filter((_, idx) => idx !== indexToRemove),
    });
  }

  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Interest and Passion
          </label>
          <div className="flex gap-2">
            <input
              placeholder="Add one interest/passion"
              value={passionInput}
              onChange={(e) => setPassionInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addPassion();
                }
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={addPassion}
              className="border border-green-700 bg-green-700 text-white px-4 font-bold text-[16px] rounded-md"
            >
              Add
            </button>
          </div>

          {passions.length ? (
            <div className="mt-3 flex flex-col gap-2">
              {passions.map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="bg-white border border-green-600 rounded px-3 py-2 flex items-center justify-between gap-3"
                >
                  <span className="text-gray-800">{item}</span>
                  <button
                    type="button"
                    onClick={() => removePassion(idx)}
                    className="border border-red-600 bg-red-600 text-white px-3 py-1 font-bold text-[14px] rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="flex gap-2">
        <button
          onClick={() => handleSaveData("about")}
          className="mt-[5px] border border-blue-600 bg-blue-600 text-white p-3 font-bold text-[16px] focus:bg-green-800 rounded-md"
        >
          Save Changes
        </button>
        <button onClick={async ()=>{
          if(formData && formData._id){
            const { handleDeleteItem } = await import('@/services');
            const res = await handleDeleteItem('about', formData._id);
            if(res.success){
              setFormData({ interest_and_passion: [], skills: '' })
              setAllData(prev=> ({ ...prev, about: [] }))
            }
          }
        }} className="mt-[5px] border border-red-600 bg-red-600 text-white p-3 font-bold text-[16px] rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
}
