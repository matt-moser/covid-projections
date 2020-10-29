/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

/**
 * Date of timeseries data point
 */
export type Date = string;
/**
 * 2-letter ISO-3166 Country code.
 */
export type Country = string;
/**
 * 2-letter ANSI state code.
 */
export type State = string;
/**
 * County name
 */
export type County = string | null;
/**
 * Fips Code.  For state level data, 2 characters, for county level data, 5 characters.
 */
export type Fips = string;
/**
 * Latitude of point within the state or county
 */
export type Lat = number;
/**
 * Longitude of point within the state or county
 */
export type Long = number;
/**
 * Location ID as defined here: https://github.com/covidatlas/li/blob/master/docs/reports-v1.md#general-notes
 */
export type Locationid = string;
/**
 * Actuals for given day
 */
export type Actuals1 = Actuals;
/**
 * Cumulative number of confirmed or suspected cases
 */
export type Cases = number | null;
/**
 * Cumulative number of deaths that are suspected or confirmed to have been caused by COVID-19
 */
export type Deaths = number | null;
/**
 * Cumulative positive test results to date
 */
export type Positivetests = number | null;
/**
 * Cumulative negative test results to date
 */
export type Negativetests = number | null;
/**
 * Number of Contact Tracers
 */
export type Contacttracers = number | null;
/**
 * Information about hospital bed utilization
 */
export type Hospitalbeds = HospitalResourceUtilization;
/**
 * Total capacity for resource.
 */
export type Capacity = number | null;
/**
 * Currently used capacity for resource by all patients (COVID + Non-COVID)
 */
export type Currentusagetotal = number | null;
/**
 * Currently used capacity for resource by COVID
 */
export type Currentusagecovid = number | null;
/**
 * Typical used capacity rate for resource. This excludes any COVID usage.
 */
export type Typicalusagerate = number | null;
/**
 * Information about ICU bed utilization
 */
export type Icubeds = HospitalResourceUtilization;
/**
 *
 * New confirmed or suspected cases.
 *
 * New cases are a processed timeseries of cases - summing new cases may not equal
 * the cumulative case count.
 *
 * Notable exceptions:
 *  1. If a region does not report cases for a period of time, the first day
 *     cases start reporting again will not be included. This day likely includes
 *     multiple days worth of cases and can be misleading to the overall series.
 *
 */
export type Newcases = number | null;
/**
 * Metrics for given day
 */
export type Metrics1 = Metrics;
/**
 * Ratio of people who test positive calculated using a 7-day rolling average.
 */
export type Testpositivityratio = number | null;
/**
 * The number of cases per 100k population calculated using a 7-day rolling average.
 */
export type Casedensity = number | null;
/**
 * Ratio of currently hired tracers to estimated tracers needed based on 7-day daily case average.
 */
export type Contacttracercapacityratio = number | null;
/**
 * R_t, or the estimated number of infections arising from a typical case.
 */
export type Infectionrate = number | null;
/**
 * 90th percentile confidence interval upper endpoint of the infection rate.
 */
export type Infectionrateci90 = number | null;
export type Icuheadroomratio = number | null;
/**
 * Current number of covid patients in icu.
 */
export type Currenticucovid = number;
/**
 * Method used to determine number of current ICU patients with covid.
 */
export type CovidPatientsMethod = 'actual' | 'estimated';
/**
 * Current number of covid patients in icu.
 */
export type Currenticunoncovid = number;
/**
 * Method used to determine number of current ICU patients without covid.
 */
export type NonCovidPatientsMethod =
  | 'actual'
  | 'estimated_from_typical_utilization'
  | 'estimated_from_total_icu_actual';
/**
 * Flattened timeseries data for multiple regions.
 */
export type AggregateFlattenedTimeseries = RegionTimeseriesRowWithHeader[];

/**
 * Prediction timeseries row with location information.
 */
export interface RegionTimeseriesRowWithHeader {
  date: Date;
  country: Country;
  state: State;
  county: County;
  fips: Fips;
  lat?: Lat;
  long?: Long;
  locationId: Locationid;
  actuals: Actuals1;
  metrics: Metrics1;
}
/**
 * Known actuals data.
 */
export interface Actuals {
  cases: Cases;
  deaths: Deaths;
  positiveTests: Positivetests;
  negativeTests: Negativetests;
  contactTracers: Contacttracers;
  hospitalBeds: Hospitalbeds;
  icuBeds: Icubeds;
  newCases: Newcases;
}
/**
 * Base model for API output.
 */
export interface HospitalResourceUtilization {
  capacity: Capacity;
  currentUsageTotal: Currentusagetotal;
  currentUsageCovid: Currentusagecovid;
  typicalUsageRate: Typicalusagerate;
}
/**
 * Calculated metrics data based on known actuals.
 */
export interface Metrics {
  testPositivityRatio: Testpositivityratio;
  caseDensity: Casedensity;
  contactTracerCapacityRatio: Contacttracercapacityratio;
  infectionRate: Infectionrate;
  infectionRateCI90: Infectionrateci90;
  icuHeadroomRatio: Icuheadroomratio;
  icuHeadroomDetails?: ICUHeadroomMetricDetails;
}
/**
 * Details about how the ICU Headroom Metric was calculated.
 */
export interface ICUHeadroomMetricDetails {
  currentIcuCovid: Currenticucovid;
  currentIcuCovidMethod: CovidPatientsMethod;
  currentIcuNonCovid: Currenticunoncovid;
  currentIcuNonCovidMethod: NonCovidPatientsMethod;
}
