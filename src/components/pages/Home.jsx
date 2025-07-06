import { useState, useEffect } from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';
import CtaSection from '@/components/organisms/CtaSection';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import contentService from '@/services/api/contentService';
const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const pageContent = await contentService.getPageContent('home');
      setContent(pageContent);
    } catch (err) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!content) return <Error message="Content not found" />;

  return (
    <div className="min-h-screen">
      <HeroSection content={content} />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Home;