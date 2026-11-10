import { PageContextDisplay } from '../feature';

const AboutMePage = () => {
  return (
    <section className='flex flex-col gap-8 w-full h-full px-4 md:px-8 lg:px-16 py-8 mx-auto container'>
      <PageContextDisplay
        id='missionandvision'
        blockanimation='animate-fade-in-down'
        title={{
          tag: 'h2',
          text: 'Mission & Vision',
          className: 'text-primary',
        }}>
        <p>Here you can describe your mission and vision.</p>
      </PageContextDisplay>
      <PageContextDisplay
        id='senior-cra'
        blockanimation='animate-fade-in-top-left'
        title={{
          tag: 'h2',
          text: 'Senior CRA',
          className: 'text-primary',
        }}>
        <p>Here you can describe your role as a Senior CRA.</p>
      </PageContextDisplay>
      <PageContextDisplay
        id='experience'
        blockanimation='animate-fade-in-top-right'
        title={{
          tag: 'h2',
          text: 'Experience',
          className: 'text-primary',
        }}>
        <p>Here you can describe your experience.</p>
      </PageContextDisplay>
      <PageContextDisplay
        id='ourapproche'
        blockanimation='animate-fade-in-up'
        title={{
          tag: 'h2',
          text: 'Our Approach',
          className: 'text-primary',
        }}>
        <p>Here you can describe your approach.</p>
      </PageContextDisplay>
    </section>
  );
};

export default AboutMePage;
