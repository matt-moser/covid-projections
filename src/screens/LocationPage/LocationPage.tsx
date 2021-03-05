import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { MAP_FILTERS } from './Enums/MapFilterEnums';
import SearchHeader from 'components/Header/SearchHeader';
import AppMetaTags from 'components/AppMetaTags/AppMetaTags';

import EnsureSharingIdInUrl from 'components/EnsureSharingIdInUrl';
import ChartsHolder from 'components/LocationPage/ChartsHolder';
import { LoadingScreen } from './LocationPage.style';
import { useProjectionsFromRegion } from 'common/utils/model';
import { getPageTitle, getPageDescription } from './utils';
import { getStateCode, MetroArea, Region } from 'common/regions';
import { SuspenseFallback } from 'components/LazyLoading';

const MiniMap = lazy(() => import('components/MiniMap'));

interface LocationPageProps {
  region: Region;
}

function LocationPage({ region }: LocationPageProps) {
  let { chartId } = useParams<{ chartId: string }>();

  const defaultMapOption = getDefaultMapOption(region);
  const [mapOption, setMapOption] = useState(defaultMapOption);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const projections = useProjectionsFromRegion(region);

  useEffect(() => {
    setMapOption(defaultMapOption);
    // Close the map on mobile on any change to a region.
    setMobileMenuOpen(false);
  }, [defaultMapOption, region]);

  return (
    <div>
      <EnsureSharingIdInUrl />
      <AppMetaTags
        canonicalUrl={region.canonicalUrl}
        pageTitle={getPageTitle(region)}
        pageDescription={getPageDescription(region)}
      />
      <div>
        <SearchHeader
          setMapOption={setMapOption}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          region={region}
        />
        {/* Shows a loading screen if projections are not loaded yet, or
         * if a new location has been selected */}
        {!projections || projections.fips !== region.fipsCode ? (
          <LoadingScreen />
        ) : (
          <ChartsHolder
            projections={projections}
            chartId={chartId}
            region={region}
          />
        )}
        <Suspense fallback={<SuspenseFallback />}>
          <MiniMap
            region={region}
            mobileMenuOpen={mobileMenuOpen}
            mapOption={mapOption}
            setMapOption={setMapOption}
          />
        </Suspense>
      </div>
    </div>
  );
}

function getDefaultMapOption(region: Region) {
  const stateCode = getStateCode(region);
  if (stateCode === MAP_FILTERS.DC) {
    return MAP_FILTERS.NATIONAL;
  }
  if (region instanceof MetroArea) {
    return MAP_FILTERS.MSA;
  }
  return MAP_FILTERS.STATE;
}

export default LocationPage;
