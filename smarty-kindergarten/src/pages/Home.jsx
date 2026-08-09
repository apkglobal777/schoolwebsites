import React from 'react';
import ProgramCard, { ClassCard } from '../components/ProgramCard';
import { WaveTop, WaveBottom } from '../components/WaveDivider';
import Doodles from '../components/Doodles';
import {
  ToddlerIcon,
  PreschoolIcon,
  KindergartenIcon,
  PrekIcon,
  SunIcon,
  KeyIcon,
  ClassesIcon,
  HeartIcon,
} from '../components/Icons';

const programCards = [
  {
    id: 1,
    title: 'Toddler',
    age: '(1.5 – 3 years)',
    desc: 'By creating a safe, consistent and welcoming environment, we help children transition.',
    Icon: ToddlerIcon,
  },
  {
    id: 2,
    title: 'Preschool',
    age: '(2 – 3 years)',
    desc: 'With a balance of self-directed play and thoughtful teacher guidance.',
    Icon: PreschoolIcon,
  },
  {
    id: 3,
    title: 'Kindergarten',
    age: '(3 – 4 years)',
    desc: 'A small class size and exceptional teachers enable Smarty to offer individual care.',
    Icon: KindergartenIcon,
  },
  {
    id: 4,
    title: 'Pre-K Program',
    age: '(4 – 5 years)',
    desc: 'Our school follows the guidelines of the local school district in order to prepare kids.',
    Icon: PrekIcon,
  },
];

const coreValues = [
  {
    id: 1,
    title: 'Learning & Fun',
    desc: 'Prissy expectant involuntarily limpet until cobra less dear so overabundant contagion',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Healthy Meals',
    desc: 'Prissy expectant involuntarily limpet until cobra less dear so overabundant contagion',
    img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=200&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Children Safety',
    desc: 'Prissy expectant involuntarily limpet until cobra less dear so overabundant contagion',
    img: 'https://images.unsplash.com/photo-1516627145497-ae4983d51e1a?w=200&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'Cute Environment',
    desc: 'Prissy expectant involuntarily limpet until cobra less dear so overabundant contagion',
    img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&auto=format&fit=crop&q=60',
  },
];

const eventsList = [
  {
    id: 1,
    date: '15 Apr 4:30 pm',
    title: "Father's Day Sundaes & Shaving!",
    desc: 'Discussion and community dialogue with school staff, parents and community members.',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    date: '13 Oct All day',
    title: 'Halloween Bash Lorem ipsum',
    desc: 'Year 6 pupils are invited to join us for a Taster Day on either Thursday 19th or Sunday 22nd.',
    img: 'https://images.unsplash.com/photo-1554583523-9dfd7ce33f5b?w=300&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    date: '16 Oct 8:00 am to 9:00 pm',
    title: 'Last Day of School end of Year Picnic',
    desc: 'The school PTFA would like to invite you to enjoy an evening of Pasta and Prosecco in November.',
    img: 'https://images.unsplash.com/photo-1516627145497-ae4983d51e1a?w=300&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    date: '17 Oct 8:00 am to 9:00 pm',
    title: 'Last Day of School end of Year Picnic',
    desc: 'Our activities will challenge and develop your child’s creativity, imagination and social skills.',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&auto=format&fit=crop&q=60',
  },
];

const classCards = [
  {
    id: 1,
    title: 'Color Matching Class',
    desc: 'The perfect class for your child with the best staff and best teachers.',
    img: 'https://images.unsplash.com/photo-1587616211892-b4a5e63a5b3d?w=500&auto=format&fit=crop&q=60',
    extraMeta: { age: '1–2 years', seats: '9 seats', price: '$25/hour' },
  },
  {
    id: 2,
    title: 'Alphabet Matching Class',
    desc: 'We provided 4 classes with 9 to 12 children each aged 12 months to 5.',
    img: 'https://images.unsplash.com/photo-1516627145497-ae4983d51e1a?w=500&auto=format&fit=crop&q=60',
    extraMeta: { age: '2–3 years', seats: '11 seats', price: '$25/hour' },
  },
  {
    id: 3,
    title: 'Letter Match Class',
    desc: 'Our preschool program has four dedicated classes.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60',
    extraMeta: { age: '3–4 years', seats: '15 seats', price: '$25/hour' },
  },
];

const newsArticles = [
  {
    id: 1,
    date: '3',
    month: 'Apr',
    badgeColor: 'bg-sky-500',
    title: 'Our Kindergarten Anniversary',
    desc: 'The perfect class for your child with the best staff and best teachers.',
    img: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    date: '27',
    month: 'Mar',
    badgeColor: 'bg-sky-500',
    title: 'Why do aerobically fit children?',
    desc: 'We provided 4 classes with 9 to 12 children to 5 years of age.',
    img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    date: '19',
    month: 'Mar',
    badgeColor: 'bg-lime-500',
    title: 'How Kids make sense of Life Experiences',
    desc: 'Our preschool program has four dedicated classes.',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&auto=format&fit=crop&q=60',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Maria Bimmer',
    text: "Smarty Kindergarten is a great place for my daughter to start her schooling experience. It's welcoming and safe and my daughter loves being there! Her skill level is significantly better since attending Smarty!",
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Sven Bender',
    text: 'I am sure that my son is studying at Smarty Education, I really like their approach to children, I like their curriculum and really like their interesting teaching methods.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
  },
];

const features = [
  { Icon: SunIcon, title: 'Full Day Sessions' },
  { Icon: KeyIcon, title: 'Online Access' },
  { Icon: ClassesIcon, title: 'Varied Classes' },
  { Icon: HeartIcon, title: 'Friendly Place' },
];

export default function Home() {
  return (
    <div className="w-full bg-white text-gray-600 overflow-hidden font-sans">
  
      {/* --- HERO SECTION --- */}
      <section className="bg-[#ff9b26] text-white relative pt-8 pb-16 px-6 md:px-16">
        <Doodles variant="hero" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              When should I begin to look at schools?
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
              Preschoolers for the application, testing and enrollment process for public and
              private schools in the city of Palo Alto.
            </p>
            <button className="bg-[#0088ff] hover:bg-blue-600 text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center gap-2">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-80 h-72 md:w-96 md:h-80 rounded-[45%_55%_65%_35%/40%_50%_60%_50%] overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                alt="Teacher and kids sharing a snack"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 m-auto w-14 h-14 bg-[#0088ff] hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-xl shadow-lg transition-transform hover:scale-110">
                ▶
              </button>
            </div>
          </div>
        </div>
      </section>
      <WaveBottom color="#ff9b26" variant="single" />

      {/* --- SMARTY PROGRAMS --- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="font-display text-3xl font-bold text-center text-gray-800 mb-12">Smarty Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {programCards.map((card) => (
            <ProgramCard
              key={card.id}
              Icon={card.Icon}
              title={card.title}
              age={card.age}
              desc={card.desc}
            />
          ))}
        </div>
      </section>

      {/* --- OUR CORE VALUES --- */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="font-display text-3xl font-bold text-center text-gray-800 mb-12">Our core values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {coreValues.map((val) => (
            <div key={val.id} className="flex items-start gap-5">
              <img
                src={val.img}
                alt={val.title}
                className="w-20 h-20 rounded-2xl object-cover shadow-sm shrink-0"
              />
              <div>
                <h3 className="font-sans font-bold text-gray-800 text-base pb-1 border-b-2 border-orange-400 inline-block mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EVENTS SECTION --- */}
      <WaveTop color="#0088ff" />
      <section className="relative bg-[#0088ff] text-white py-16 px-6">
        <Doodles variant="events" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {eventsList.map((evt) => (
              <div key={evt.id} className="flex gap-4 items-start">
                <img src={evt.img} alt={evt.title} className="w-28 h-28 rounded-2xl object-cover shrink-0 shadow-md" />
                <div className="space-y-1.5">
                  <span className="inline-block bg-[#ff9b26] text-xs text-white font-semibold px-3 py-1 rounded-full">
                    {evt.date}
                  </span>
                  <h3 className="font-display font-bold text-base text-white leading-snug">{evt.title}</h3>
                  <p className="text-xs text-white/85 leading-relaxed">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveBottom color="#0088ff" />

      {/* --- CLASSES SECTION --- */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="font-display text-3xl font-bold text-center text-gray-800 mb-12">Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classCards.map((cls) => (
            <ClassCard key={cls.id} title={cls.title} desc={cls.desc} img={cls.img} extraMeta={cls.extraMeta} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0088ff] cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 cursor-pointer"></span>
        </div>
      </section>

      {/* --- SMARTY KINDERGARTEN FEATURES --- */}
      <section className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="font-display text-3xl font-bold text-gray-800">Smarty Kindergarten</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our philosophy is learning through play as we offer a stimulating environment for
            children. Our philosophy is learning through play as we offer a stimulating environment
            for children.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Slow-carb meh whatever, succulents dreamcatcher health goth bushwick schlitz woke. Cred
            3 wolf moon tattooed four loko, hashtag tote bag pabst messenger bag single-origin
            coffee activated charcoal kale chips vape tousled crucifix kitsch.
          </p>
          <button className="bg-[#ff9b26] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full text-xs shadow transition-all inline-flex items-center gap-2">
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#0088ff] flex items-center justify-center mb-3 text-[#0088ff]">
                <item.Icon className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-xs text-gray-800">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR NEWS SECTION --- */}
      <WaveTop color="#ff9b26" />
      <section className="relative bg-[#ff9b26] text-white py-16 px-6">
        <Doodles variant="news" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-transparent">
                <div className="relative">
                  <img src={article.img} alt={article.title} className="w-full h-44 object-cover rounded-2xl shadow-md" />
                  <div
                    className={`absolute -bottom-4 left-4 ${article.badgeColor} text-white rounded-full w-11 h-11 flex flex-col items-center justify-center text-xs font-bold shadow-md leading-tight`}
                  >
                    <span>{article.date}</span>
                    <span className="text-[8px] font-medium uppercase">{article.month}</span>
                  </div>
                </div>
                <div className="pt-6 space-y-2">
                  <h3 className="font-display font-bold text-base text-white leading-snug">{article.title}</h3>
                  <p className="text-xs text-white/90 leading-relaxed">{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveBottom color="#ff9b26" />

      {/* --- OUR HAPPY PARENTS TESTIMONIALS --- */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-gray-800 mb-12">Our happy parents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {testimonials.map((t) => (
            <div key={t.id} className="flex gap-4 items-start">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm" />
              <div>
                <h4 className="font-display font-bold text-sm text-gray-800">{t.name}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0088ff] cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 cursor-pointer"></span>
        </div>
      </section>

      {/* --- SIGN UP FOR OPEN DAY --- */}
      <section className=" mx-auto my-8 ">
        <div className="relative bg-[#0088ff] text-white px-8 py-24 text-center shadow-xl overflow-hidden">
          <Doodles variant="signup" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-3">Sign up for open day</h2>
            <p className="text-xs text-white/85 mb-8 leading-relaxed">
              Cred 3 wolf moon tattooed four loko, hashtag tote bag pabst messenger bag
              single-origin coffee activated charcoal kale chips vape tousled crucifix kitsch.
            </p>
            <div className="flex items-center bg-white rounded-full p-1.5 shadow-inner max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your E-mail"
                className="flex-1 px-4 py-2 text-xs text-gray-700 outline-none bg-transparent min-w-0"
              />
              <button className="bg-[#ff9b26] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full text-xs transition-all whitespace-nowrap inline-flex items-center gap-2 shrink-0">
                Submit <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}