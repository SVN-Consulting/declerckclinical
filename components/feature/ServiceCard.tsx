import { Monitor } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ServiceCard as ServiceCardType } from '@/lib/types';

const ServiceCard = ({ header, content, cta }: ServiceCardType) => {
  return (
    <Card className='w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <CardHeader>
        <CardTitle className='text-lg font-bold text-center text-primary mb-2 px-2 border-b'>
          {header}
        </CardTitle>
        <CardContent className='flex flex-col gap-2 mt-2'>
          {content.map((item, index) => (
            <p
              key={index}
              className='text-gray-700 mb-1 flex items-center gap-2'>
              <span>
                <Monitor className='w-4 h-4' />
              </span>
              {item}
            </p>
          ))}
        </CardContent>
        {cta && <CardFooter className='text-center'>{cta}</CardFooter>}
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;
