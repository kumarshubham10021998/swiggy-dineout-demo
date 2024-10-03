import Image from 'next/image';
import Link from 'next/link';

const restaurants = [
  {
    href: "/",
    imgSrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/v/f/p31393-171569505266436dcc88e82.jpg?tr=tr:n-large",
    title: "The G.T. Road",
    location: "Connaught Place, Central Delhi",
    rating: 4.3,
  },
  {
    href: "/",
    imgSrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/d/f/p19636-16463919576221f295ae1f1.jpg?tr=tr:n-large",
    title: "My Bar Headquarters",
    location: "Connaught Place, Central Delhi",
    rating: 4.0,
  },
  {
    href: "/",
    imgSrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/8/x/k/p87447-161588804660507eaee6e94.jpg?tr=tr:n-large",
    title: "Ranisa",
    location: "Connaught Place, Central Delhi",
    rating: 4.3,
    offer: "10% OFF. Pay via Swiggy Dineout",
  },
  {
    href: "/",
    imgSrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/u/b/p919-150182627559840ce33f574.jpg?tr=tr:n-large",
    title: "Dhaba Estd 1986 Delhi",
    location: "Connaught Place, Central Delhi",
    rating: 4,
  },
  // Add more restaurants here as needed
];

const RestaurantsNearYou = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Restaurants Near You</h2>
          <Link href="/delhi-restaurants/welcome-back" title="Restaurants Near You" className="text-blue-600 hover:underline">
            See all
          </Link>
        </div>

        <div className="relative">
          <ul className="flex overflow-x-scroll space-x-4 scrollbar-hide">
            {restaurants.map((restaurant, index) => (
              <li key={index} className="flex-none w-72">
                <Link href={restaurant.href} className="block">
                  <div className="rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={restaurant.imgSrc}
                      alt={restaurant.title}
                      width={288} // specify width
                      height={160} // specify height
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className='flex items-center'>
                        <h4 className="font-semibold text-lg">{restaurant.title}</h4>
                        <span className="text-white-500 font-bold bg-green-500 rounded-lg p-1 mx-4">{restaurant.rating}</span>
                      </div>

                      <p className="text-gray-500">{restaurant.location}</p>
                      <div className="flex items-center justify-between mt-2">
                        {restaurant.offer && (
                          <span className="text-sm text-green-600 font-semibold">
                            {restaurant.offer}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* Uncomment this button if needed */}
          {/* <button
            aria-label="Go to next slide"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
          >
            &#8250;
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsNearYou;
