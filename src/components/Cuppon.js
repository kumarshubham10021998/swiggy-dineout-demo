import Image from 'next/image';

const offers = [
  {
    id: 1,
    src: "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small",
    alt: "30% Off",
    width: 134,
    height: 180,
    link: "/",
  },
  {
    id: 2,
    src: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small",
    alt: "25% Off",
    width: 134,
    height: 180,
    link: "/",
  },
  {
    id: 3,
    src: "https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small",
    alt: "20% Off",
    width: 134,
    height: 180,
    link: "/",
  },
  {
    id: 4,
    src: "https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small",
    alt: "15% Off",
    width: 134,
    height: 180,
    link: "/",
  },
];

export default function BestOffersSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Offers</h2>
          <span className="text-gray-500"></span>
        </header>

        {/* Carousel */}
        <div className="overflow-hidden">
          <ul className="flex space-x-4 overflow-x-auto">
            {offers.map(offer => (
              <li key={offer.id} className="flex-none w-36">
                <div className="relative">
                  <a href={offer.link} aria-label={offer.alt}>
                    <Image
                      src={offer.src}
                      alt={offer.alt}
                      className="w-full h-auto"
                      width={offer.width}
                      height={offer.height}
                      priority // Optimize image loading
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
