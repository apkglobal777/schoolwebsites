import React from 'react';

export default function ProgramCard({ Icon, title, age, desc }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
      <div className="w-14 h-14 rounded-full border-2 border-[#0088ff] flex items-center justify-center mb-4 text-[#0088ff]">
        {Icon ? <Icon className="w-7 h-7" /> : <span className="text-xl">🎓</span>}
      </div>
      <h3 className="font-bold text-gray-800 text-base">{title}</h3>
      <span className="text-xs text-gray-400 mb-3 block">{age}</span>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export function ClassCard({ title, desc, img, extraMeta }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <img src={img} alt={title} className="w-full h-44 object-cover" />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-800 text-base mb-2">{title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-6">{desc}</p>
        </div>
        {extraMeta && (
          <div className="grid grid-cols-3 text-center border-t border-gray-100 pt-3 text-[11px] text-gray-400">
            <div>
              <span className="block text-gray-300 text-[10px]">Age</span>
              <span className="font-semibold text-gray-600">{extraMeta.age}</span>
            </div>
            <div>
              <span className="block text-gray-300 text-[10px]">Seats</span>
              <span className="font-semibold text-gray-600">{extraMeta.seats}</span>
            </div>
            <div>
              <span className="block text-gray-300 text-[10px]">Price</span>
              <span className="font-semibold text-orange-500">{extraMeta.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}