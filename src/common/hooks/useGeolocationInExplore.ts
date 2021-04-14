/**
 * Used to get preset regions for homepage explore chart
 *
 * If user has been geolocated -> returns an array of user's region fips
 * Else -> returns an array of largest metro areas' fips (by population)
 *
 * Note: geolocation only works on prod + main staging (won't work locally or in preview links)
 * To test, hardcode zip/state/county in useGeolocation.ts
 */

import { useEffect, useState } from 'react';
import isNull from 'lodash/isNull';
import values from 'lodash/values';
import {
  getGeolocatedRegions,
  filterUndefinedRegions,
  FipsCode,
  Region,
} from 'common/regions';
import { getLargestMetroFipsForExplore } from 'screens/HomePage/utils';
import { GeolocationInfo } from './useGeolocation';
import useCountyToZipMap from './useCountyToZipMap';

export default function useGeolocationInExplore(
  geolocation?: GeolocationInfo,
): FipsCode[] {
  const [initialExploreFips, setInitialExploreFips] = useState(
    getLargestMetroFipsForExplore(),
  );

  const { result: countyToZipMap } = useCountyToZipMap();

  useEffect(() => {
    if (geolocation && countyToZipMap) {
      const userRegions = getGeolocatedRegions(geolocation, countyToZipMap);
      if (!isNull(userRegions)) {
        const regionValues = values(userRegions);
        const filteredUserRegions = filterUndefinedRegions(regionValues);
        const userRegionsFips = (filteredUserRegions as []).map(
          (region: Region) => region.fipsCode,
        );
        if (userRegionsFips.length) {
          setInitialExploreFips(userRegionsFips);
        }
      }
    }
  }, [geolocation, countyToZipMap]);

  return initialExploreFips;
}
