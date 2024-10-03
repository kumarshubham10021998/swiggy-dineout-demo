import { Banner } from '@/components/Banner';
import Header from '@/components/Header';
import Cuppon from '@/components/Cuppon';
import RestaurantsNearYou from '@/components/Restaurants';
import { CategoryListSection } from '@/components/CategoryListSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Cuppon />
        </section>
        <section>
          <RestaurantsNearYou />
        </section>
        <section>
          <CategoryListSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
