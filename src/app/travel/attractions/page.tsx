import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import AttractionCard from '@/components/sections/AttractionCard';
import { touristAttractions } from '@/data/attractions';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Tourist Attractions',
  description: 'Explore Odisha\'s magnificent heritage, nature, and culture while attending OAIC 2026.',
};

const cuisine = [
  { name: 'Dalma', desc: 'The quintessential Odishan comfort dish — lentils slow-cooked with seasonal vegetables.' },
  { name: 'Pakhala Bhata', desc: 'Fermented rice soaked in water, served with fried fish and pickle — a summer staple.' },
  { name: 'Chenna Poda', desc: 'Odisha\'s signature dessert — caramelized cottage cheese cake with a distinct smoky sweetness.' },
  { name: 'Chhena Gaja', desc: 'Fried cottage cheese soaked in sugar syrup, famous in Nimapara.' },
];

export default function AttractionsPage() {
  return (
    <>
      <PageBanner
        title="Tourist Attractions"
        subtitle="Bhubaneswar and Odisha offer a treasure trove of history, nature, and culture to explore."
        breadcrumbs={[{ label: 'Travel' }, { label: 'Tourist Attractions' }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Explore Odisha" subtitle="World-class heritage sites and natural wonders, all within reach of Bhubaneswar." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {touristAttractions.map((attraction) => (
              <AttractionCard key={attraction.name} attraction={attraction} />
            ))}
          </div>

          {/* Local cuisine */}
          <div className="border-l-4 border-l-[#C5A359] pl-8 mb-8">
            <h2 className="font-display text-2xl font-semibold text-earth-100 mb-2">Local Cuisine</h2>
            <p className="font-body text-earth-400 leading-relaxed">
              Odisha&apos;s cuisine is a hidden gem — simple, nutritious, and bursting with flavour. Don&apos;t leave without trying:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cuisine.map((dish) => (
              <div key={dish.name} className="bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] transition-colors">
                <h3 className="font-display font-semibold text-[#C5A359] mb-2">{dish.name}</h3>
                <p className="font-body text-earth-400 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
