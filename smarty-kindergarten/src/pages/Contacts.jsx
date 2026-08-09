import React from 'react';

export default function Contacts() {
  return (
    <div className="bg-white min-h-screen text-gray-600 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-gray-400">
        Home &gt; Contacts
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-4xl font-bold text-sky-500 text-center mb-10">Contacts</h1>

        {/* Contact Information & Room Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-6">
            <h2 className="font-bold text-xl text-sky-500">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📱</span>
                <div>
                  <span className="block text-gray-400 text-[10px]">Call Free:</span>
                  <span className="font-semibold text-gray-700">+1 376-236-2336</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">💬</span>
                <div>
                  <span className="font-semibold text-sky-500">stylemixthemes</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">✉️</span>
                <div>
                  <span className="font-semibold text-sky-500">info@stylemixthemes.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">🌐</span>
                <div>
                  <span className="font-semibold text-sky-500">www.stylemixthemes.net</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">☎️</span>
                <div>
                  <span className="font-semibold text-gray-700">+1 376-236-2346</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">🕒</span>
                <div>
                  <span className="font-semibold text-gray-700">Mon — Fri: 8:00 AM — 18.00</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <span className="text-orange-400">📍</span>
              <p className="text-gray-600 font-medium">1644 Platte Street, Palo Alto, CA 90202, USA</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&auto=format&fit=crop&q=80"
              alt="Kindergarten room"
              className="w-full h-64 object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Map Background with Overlaid Form */}
      <div className="relative w-full h-[420px] bg-sky-100 overflow-hidden">
        <iframe
          title="location-map"
          src="https://maps.google.com/maps?q=Palo%20Alto&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 opacity-80"
          loading="lazy"
        />

        {/* Floating Contact Form Overlay */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex items-center pointer-events-none">
          <div className="bg-[#0088ff] text-white p-6 rounded-3xl w-full max-w-sm shadow-xl pointer-events-auto space-y-3">
            <textarea
              rows={3}
              placeholder="Message *"
              className="w-full bg-white rounded-2xl px-4 py-2.5 text-xs text-gray-700 outline-none resize-none"
            />
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-white rounded-full px-4 py-2 text-xs text-gray-700 outline-none"
            />
            <input
              type="email"
              placeholder="E-mail *"
              className="w-full bg-white rounded-full px-4 py-2 text-xs text-gray-700 outline-none"
            />
            <button className="bg-[#ff9b26] hover:bg-orange-600 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-md inline-flex items-center gap-2">
              ✈ Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}