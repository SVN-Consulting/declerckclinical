import { PageContentDisplay, ServiceCard } from '../feature/';
import { getServices } from '@/data/services';

const ServicesPage = async () => {
  const services = await getServices();

  return (
    <section className='flex flex-col gap-8 w-full h-full px-4 md:px-8 lg:px-16 py-8 mx-auto container'>
      <PageContentDisplay
        id='#'
        blockanimation='animate-fade-in-down'
        title={{
          tag: 'h2',
          text: 'Services',
          className: 'text-primary',
        }}>
        <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-center items-stretch'>
          {services.map((service) => (
            <ServiceCard key={service.header} {...service} />
          ))}
        </div>
      </PageContentDisplay>
      <PageContentDisplay
        id='therapeutic-expertise'
        blockanimation='animate-fade-in-down'
        title={{
          tag: 'h2',
          text: 'Therapeitic expertise',
          className: 'text-primary',
        }}>
        <p>Here you can describe your mission and vision.</p>
      </PageContentDisplay>
    </section>
  );
};

export default ServicesPage;
