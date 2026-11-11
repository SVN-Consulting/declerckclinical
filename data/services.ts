import { Service } from '@/lib/types';
import { db } from '@/prisma/db';

export const getServices = async (): Promise<Service[]> => {
  try {
    const services = await db.orm.public.Service.orderBy((service) =>
      service.header.asc(),
    ).all();

    return services;
  } catch (error) {
    throw new Error(`Failed to fetch services: ${error}`);
  }
};
