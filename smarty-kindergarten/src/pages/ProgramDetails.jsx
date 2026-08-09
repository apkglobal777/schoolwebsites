import React from 'react';

const schedule = [
  { group: 'Pre-algebra Review', items: [
    { name: 'Integers', date: 'January 4, 2016', hours: 10 },
    { name: 'Algebraic Expressions', date: 'January 5, 2016', hours: 24 },
    { name: 'Order of Operations', date: 'January 6, 2016', hours: 32 },
    { name: 'Like Terms and Distributive Property', date: 'January 7, 2016', hours: 46 },
    { name: 'Distributive Property', date: 'January 8, 2016', hours: 18 },
    { name: 'Intro to Matrices', date: 'January 9, 2016', hours: 20 },
    { name: 'Using Formulas', date: 'January 11, 2016', hours: 34 },
  ]},
  { group: 'Sport & Athletics', items: [
    { name: 'Speed & acceleration', date: 'January 12, 2016', hours: 40 },
    { name: 'Average, instantaneous speed', date: 'January 13, 2016', hours: 10 },
    { name: 'Newton playing football', date: 'January 18, 2016', hours: 12 },
    { name: 'Estimating the flight path of a football', date: 'February 18, 2016', hours: 10 },
    { name: 'The concept of basketball bounce', date: 'March 18, 2016', hours: 14 },
    { name: 'The principle of momentum', date: 'January 19, 2016', hours: 22 },
    { name: 'Two-Step Equations', date: 'March 19, 2016', hours: 36 },
    { name: 'Distributive Property Equations', date: 'January 27, 2016', hours: 40 },
    { name: 'Equations with Fractions', date: 'January 28, 2016', hours: 10 },
  ]}
];

export default function ProgramDetails() {
  return (
    <div className="bg-white min-h-screen text-gray-600 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-gray-400">
        Home &gt; Program
      </div>

      {/* Hero / Banner */}
      <section className="bg-orange-50/50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧸</span>
              <h1 className="text-3xl font-bold text-indigo-900">
                Preschool (2 - 3 years)
              </h1>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our Preschool Program is designed so that the students spend their days participating in a structured, yet fun curriculum. Some of the daily activities are reading, writing, math, motor skill development, language development, social skill development and physical activities. Children will learn the basic skills that will provide them with the foundation for entry into the Pre-K program. The Teacher creates weekly lesson plans with different themes that will engage the children in a wide variety of subjects.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
                alt="Miss Michelle MacGilpin"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-sky-500 text-xs">Miss Michelle MacGilpin</h4>
                <p className="text-[11px] text-gray-400">Preschool Lead Teacher</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80"
              alt="Preschool kids"
              className="rounded-3xl shadow-sm max-w-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Schedule Table */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden border border-gray-100 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#ff9b26] text-white font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3">Unit Name</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Hours</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-white">
                      <td colSpan={3} className="px-3 pt-4 pb-2 font-bold text-sky-500">
                        {section.group}
                      </td>
                    </tr>
                    {section.items.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? 'bg-orange-50/30' : 'bg-white'}
                      >
                        <td className="p-3 text-gray-600">{row.name}</td>
                        <td className="p-3 text-gray-500">{row.date}</td>
                        <td className="p-3 text-right text-gray-500">{row.hours}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-sky-500 text-base mb-4">Important Dates</h3>
            <div className="flex gap-3 items-start">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=150&auto=format&fit=crop&q=60"
                alt="Event"
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1">
                <span className="bg-[#ff9b26] text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                  15 Apr 4:30 pm
                </span>
                <h4 className="font-bold text-xs text-gray-800 leading-tight">Father's Day Sundaes & Shaving!</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Discussion and community dialogue with school staff, parents and community members.
                </p>
              </div>
            </div>
            <button className="mt-4 border border-orange-400 text-sky-500 hover:bg-orange-50 text-xs px-4 py-2 rounded-full w-full font-medium">
              See Full Calendar
            </button>
          </div>

          {/* Related Info Card */}
          <div className="bg-lime-500 text-white rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-lg">Related Information</h3>
            <ul className="space-y-2 text-xs">
              <li>✦ Semester start and end dates, holidays</li>
              <li>✦ Accreditation</li>
              <li>✦ Bear Facts</li>
              <li>✦ Graduate Division</li>
              <li>✦ Research at Our School</li>
              <li>✦ Textbooks: Cal Student Store</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}