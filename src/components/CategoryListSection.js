const categories = [
    { name: 'Buffet', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png', href: '/' },
    { name: 'Pocket Friendly', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png', href: '/' },
    { name: 'Pet Friendly', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png', href: '/' },
    { name: 'Must Visit', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/must_visit.png', href: '/' },
    { name: 'Family Time', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/family_time.png', href: '/' },
    { name: 'Pure Veg', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png', href: '/' },
    { name: 'New On Dineout', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png', href: '/' },
    { name: 'Happiest Hours', imgSrc: 'https://im1.dineout.co.in/images/uploads/misc/2020/May/8/happiest_hour.png', href: '/' },
  ];
  
  export const CategoryListSection = () => {
    return (
      <section className="py-4 md:py-6 lg:py-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
              {categories.map(({ name, imgSrc, href }, index) => (
                <li key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <a href={href} className="flex items-center">
                    <img
                      src={imgSrc}
                      alt={`Category: ${name}`}
                      className="w-10 h-10 object-cover"
                    />
                    <span className="text-sm md:text-md lg:text-lg mt-2 mx-3">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  