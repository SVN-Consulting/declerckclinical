import { PageContentDisplay, ServiceCard } from '../feature/';
import { services } from '@/lib/services';

const ServicesPage = () => {
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
        <div>
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
