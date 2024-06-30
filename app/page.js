// app/page.js
import HomePage from '../components/home/homepage';
import FeaturesPage from '../components/features/featurespage';
import AllFeatures from '../components/allfeatures/allfeatures';
import Testimonials from '../components/testimonials/testimonials';
import Plans from '../components/plans/plans';
import FAQ from '../components/faq/faq';
import Footer from '../components/footer/footer';
import 'tailwindcss/tailwind.css'; // Include Tailwind CSS
import '../styles/globals.css'

export default function Page() {
  return (
    <div>
      <HomePage />
      <FeaturesPage />
      <AllFeatures />
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />
    </div>
  );
}
