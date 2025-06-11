'use server';
import { HttpTypes } from '@medusajs/types';

import { sdk } from '@/lib/medusa/medusa-config';
import medusaError from '@/lib/medusa/util/medusa-error';

export const listRegionsHybrid = async () => {
  return sdk.client
    .fetch<{ regions: HttpTypes.StoreRegion[] }>(`/store/regions`, {
      method: 'GET'
    })
    .then(({ regions }) => regions)
    .catch(medusaError);
};

const regionMap = new Map<string, HttpTypes.StoreRegion>();

export const getRegionHybrid = async (countryCode: string) => {
  try {
    if (regionMap.has(countryCode)) {
      return regionMap.get(countryCode);
    }

    const regions = await listRegionsHybrid();

    if (!regions) {
      return null;
    }

    regions.forEach((region) => {
      region.countries?.forEach((c) => {
        regionMap.set(c?.iso_2 ?? '', region);
      });
    });

    const region = countryCode ? regionMap.get(countryCode) : regionMap.get('us');

    return region;
  } catch (e: unknown) {
    console.error(e);

    return null;
  }
};
