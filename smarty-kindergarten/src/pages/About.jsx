import React from 'react';

const coreValues = [
  {
    title: 'Learning & Fun',
    desc: 'Prosy expectant involuntarily limped until coterie less dear so overabundant contagio',
    img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=200&auto=format&fit=crop&q=80',
  },
  {
    title: 'Healthy Meals',
    desc: 'Prosy expectant involuntarily limped until coterie less dear so overabundant contagio',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=200&auto=format&fit=crop&q=80',
  },
  {
    title: 'Children Safety',
    desc: 'Prosy expectant involuntarily limped until coterie less dear so overabundant contagio',
    img: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=200&auto=format&fit=crop&q=80',
  },
  {
    title: 'Cute Environment',
    desc: 'Prosy expectant involuntarily limped until coterie less dear so overabundant contagio',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&auto=format&fit=crop&q=80',
  },
];

const stats = [
  { icon: '🎠', value: '864', label: 'teaching hours' },
  { icon: '🍼', value: '928', label: 'meals per year' },
  { icon: '🧱', value: '46', label: 'morning sessions' },
  { icon: '🪁', value: '65', label: 'full daycare' },
  { icon: '👧', value: '54', label: 'full daycare' },
];

const staffMembers = [
  {
    name: 'Mrs. Simone Payne',
    role: 'Toddler Lead Teacher',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Miss Michelle MacGil...',
    role: 'Preschool Lead Teacher',
    img: 'https://images.unsplash.com/photo-1580894732413-80b19280971b?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Miss Jill Ross',
    role: 'Kindergarten Lead Teacher',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
  },
  {
    name: 'Mrs. Luisa Richie',
    role: 'Pre-K Lead Teacher',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80',
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen text-gray-600 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-gray-400">
        Home &gt; About
      </div>

      {/* Hero Section: Play as you learn */}
      <section className="bg-amber-50/40 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-sky-500">Play as you learn</h1>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our philosophy is learning through play, as we offer a stimulating environment for children. Our philosophy is learning through play, as we offer a stimulating environment for children.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center text-lg shadow-sm">
                  ☀️
                </div>
                <span className="text-xs font-semibold text-gray-700">Full Day Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-400 text-white flex items-center justify-center text-lg shadow-sm">
                  🚗
                </div>
                <span className="text-xs font-semibold text-gray-700">Online Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center text-lg shadow-sm">
                  🎁
                </div>
                <span className="text-xs font-semibold text-gray-700">Varied Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-400 text-white flex items-center justify-center text-lg shadow-sm">
                  🤖
                </div>
                <span className="text-xs font-semibold text-gray-700">Friendly Place</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80"
              alt="Kids playing with blocks"
              className="rounded-3xl shadow-md w-full max-w-md h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-sky-500 text-center mb-10">Our core values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <img
                src={value.img}
                alt={value.title}
                className="w-16 h-16 rounded-2xl object-cover shrink-0 shadow-sm"
              />
              <div>
                <h3 className="font-bold text-sm text-gray-800 mb-1">{value.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter Section with Overlay */}
      <section className="relative bg-purple-900 text-white py-14 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=80')` }} />
        <div className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold tracking-tight">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-wider text-purple-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Staff */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-sky-500 mb-2">Meet our Staff</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
          All staff have access to professional opportunities that include international placement, training and professional development programmes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {staffMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover shadow-sm mb-2"
              />
              <h3 className="font-bold text-xs text-sky-500">{member.name}</h3>
              <p className="text-[11px] text-gray-400">{member.role}</p>
              <div className="flex gap-1.5 pt-1 text-gray-400 text-xs">
                <span className="cursor-pointer hover:text-sky-500">🔵</span>
                <span className="cursor-pointer hover:text-sky-400">🐦</span>
                <span className="cursor-pointer hover:text-rose-400">📌</span>
                <span className="cursor-pointer hover:text-amber-500">📷</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Carousel Section */}
      <section className="bg-amber-50/40 py-14 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold text-sky-500">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                <div className="border-4 border-amber-100 p-4 rounded-lg bg-stone-50">
                  <div className="border border-amber-200 p-3 text-center space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-amber-600 block font-bold">Certificate of Honor</span>
                    <h4 className="font-serif italic font-bold text-xs text-gray-700">John Smith</h4>
                    <p className="text-[8px] text-gray-400">For outstanding achievement and commitment in early childhood education excellence.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block cursor-pointer" />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-200 inline-block cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-yellow-400 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs font-semibold text-gray-800">
            Nothing is more important than your child's well-being. Join our seminars and trainings and learn how to keep it.
          </p>
          <button className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold px-6 py-2.5 rounded-full shadow-sm shrink-0">
            👋 Get Involved
          </button>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 opacity-60 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <span className="hover:opacity-100 transition-opacity">🎓 MasterStudy</span>
          <span className="hover:opacity-100 transition-opacity text-rose-400">happychild</span>
          <span className="hover:opacity-100 transition-opacity text-orange-500">motors</span>
          <span className="hover:opacity-100 transition-opacity text-emerald-500">HEALTHCOACH ✔</span>
          <span className="hover:opacity-100 transition-opacity text-sky-500">🦷 Dent All</span>
        </div>
      </section>
    </div>
  );
}