import React from 'react';

export default function ClassDetails() {
  return (
    <div className="bg-white min-h-screen text-gray-600 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-sky-500 mb-3">Color Matching Class</h1>
            <p className="text-xs text-gray-500 leading-relaxed">
              Game in early childhood is the best foundation for success in school. Our activities will challenge and develop your child's creativity, imagination, thinking skills, and social skills.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-[#0088ff] text-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs">
              <span className="block text-white/70 text-[10px]">Teacher</span>
              <span className="font-bold">Mrs. Katherine Miner</span>
            </div>
            <div className="text-xs">
              <span className="block text-white/70 text-[10px]">Size</span>
              <span className="font-bold">9 seats</span>
            </div>
            <div className="text-xs">
              <span className="block text-white/70 text-[10px]">Age</span>
              <span className="font-bold">1–2 years</span>
            </div>
            <div className="text-xs">
              <span className="block text-white/70 text-[10px]">Duration</span>
              <span className="font-bold">20 hours</span>
            </div>
            <div className="text-xs">
              <span className="block text-white/70 text-[10px]">Price</span>
              <span className="font-bold">$25/hour</span>
            </div>
            <button className="bg-[#ff9b26] hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm">
              Enroll Your Child
            </button>
          </div>

          {/* Body & Testimonial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-500 leading-relaxed">
            <p>
              Our center provides many educational activities to keep your kids engaged. Our activities will challenge and develop your child's creativity, imagination, thinking skills, and social skills. Game in early childhood is the best foundation for success in school. It develops all necessary learning skills. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="border-l-4 border-orange-400 pl-4 space-y-2 italic">
              <p>
                “Smarty Kindergarten is a great place for my son to start his schooling experience. He loves being there, especially loves Spanish classes with Mrs. Strickland!”
              </p>
              <p className="not-italic font-bold text-gray-800">— Tasha Castagna</p>
            </div>
          </div>

          {/* Banner Image */}
          <img
            src="https://images.unsplash.com/photo-1587616211892-b4a5e63a5b3d?w=800&auto=format&fit=crop&q=80"
            alt="Color matching class child"
            className="w-full h-72 object-cover rounded-3xl shadow-sm"
          />

          {/* Tabs Section */}
          <div className="space-y-4 pt-4">
            <div className="flex bg-orange-400 rounded-xl overflow-hidden text-white font-bold text-xs">
              <button className="bg-orange-500 px-6 py-3">Overview</button>
              <button className="px-6 py-3 hover:bg-orange-500/50">Structure</button>
              <button className="px-6 py-3 hover:bg-orange-500/50">Requirements</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-500 leading-relaxed">
              <p>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas.
              </p>
              <div className="space-y-2">
                <div className="border border-orange-200 rounded-lg p-3">
                  <div className="flex justify-between font-bold text-orange-500">
                    <span>Jack Petchey Awards Evening?</span>
                    <span>×</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Private yet affordable elementary school offering a stimulating curriculum and a supportive environment.
                  </p>
                </div>
                <div className="border border-orange-200 rounded-lg p-3 flex justify-between font-bold text-sky-500">
                  <span>Holocaust Survivor visits our school?</span>
                  <span>+</span>
                </div>
                <div className="border border-orange-200 rounded-lg p-3 flex justify-between font-bold text-sky-500">
                  <span>Children In Need Armistice Day?</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-orange-200 rounded-2xl p-5 space-y-3 text-xs font-bold text-orange-400">
            <h3 className="text-sky-500 tracking-wider uppercase">Categories</h3>
            <ul className="space-y-2 text-[11px] font-semibold text-orange-400">
              <li>&gt; TODDLER</li>
              <li>&gt; PRESCHOOL</li>
              <li>&gt; KINDERGARTEN</li>
              <li>&gt; PRE-K PROGRAM</li>
              <li>&gt; BEFORE/AFTER SCHOOL</li>
            </ul>
          </div>

          <div className="border border-orange-200 rounded-full p-3 text-center text-xs">
            <span className="font-bold text-sky-500 block">Class Program</span>
            <span className="text-[10px] text-gray-400">Adobe Acrobat File, 123 KB</span>
          </div>

          <div className="border border-sky-300 rounded-full p-3 text-center text-xs">
            <span className="text-gray-400 block text-[10px]">Have a question?</span>
            <span className="font-bold text-sky-500">Write us on Skype</span>
          </div>

          {/* Calendar Widget */}
          <div>
            <h3 className="font-bold text-sky-500 text-sm mb-3">Calendar</h3>
            <div className="border border-orange-200 rounded-2xl p-4 text-xs">
              <div className="grid grid-cols-7 text-center font-bold text-orange-400 mb-2 text-[11px]">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
              </div>
              <div className="grid grid-cols-7 text-center gap-y-2 text-[11px] text-gray-500">
                <span className="col-start-6">1</span><span>2</span>
                <span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span className="bg-orange-400 text-white rounded-full">9</span>
                <span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
                <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
                <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
                <span>31</span>
              </div>
              <div className="mt-3 text-[10px] text-sky-500 font-semibold">« Apr</div>
            </div>
          </div>

          {/* Latest News Widget */}
          <div>
            <h3 className="font-bold text-sky-500 text-sm mb-3">Latest News</h3>
            <div className="space-y-3">
              {[
                { title: 'Our Kindergarten Anniversary', date: 'April 03, 2016', img: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=100&auto=format&fit=crop&q=60' },
                { title: 'Why do aerobically fit children?', date: 'March 27, 2016', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=100&auto=format&fit=crop&q=60' },
                { title: 'How Kids make sense of Life Experiences', date: 'March 19, 2016', img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=100&auto=format&fit=crop&q=60' },
              ].map((news, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <img src={news.img} alt={news.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block">{news.date}</span>
                    <h4 className="font-bold text-xs text-sky-500 leading-tight">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}