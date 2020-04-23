/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

export type Countryname = string;
/**
 * Fips for State + County. Five character code
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
 * Date of latest data
 */
export type Lastupdateddate = string;
/**
 * Projection about total hospital bed utilization
 */
export type Totalhospitalbeds = _ResourceUsageProjection;
/**
 * Shortfall of resource needed at the peek utilization
 */
export type Peakshortfall = number;
/**
 * Date of peak resource utilization
 */
export type Peakdate = string;
/**
 * Date when resource shortage begins
 */
export type Shortagestartdate = string;
/**
 * Projection about ICU hospital bed utilization
 */
export type Icubeds = _ResourceUsageProjection;
/**
 * Historical or Inferred Rt
 */
export type Rt = number;
/**
 * Rt standard deviation
 */
export type Rtci90 = number;
/**
 * Total population in geographic area
 */
export type Population = number;
/**
 * Name of high-level intervention in-place
 */
export type Intervention = string;
/**
 * Number of confirmed cases so far
 */
export type Cumulativeconfirmedcases = number;
/**
 * Number of deaths so far
 */
export type Cumulativedeaths = number;
/**
 * Total capacity for resource
 */
export type Capacity = number;
/**
 * Currently used capacity for resource
 */
export type Currentusage = number;
/**
 * The state name
 */
export type Statename = string;
/**
 * The county name
 */
export type Countyname = string;
export type CovidActNowStatesSummary = CovidActNowStateSummary[];

export interface CovidActNowStateSummary {
  countryName?: Countryname;
  fips: Fips;
  lat: Lat;
  long: Long;
  lastUpdatedDate: Lastupdateddate;
  projections: _Projections;
  actuals: _Actuals;
  stateName: Statename;
  countyName?: Countyname;
}
export interface _Projections {
  totalHospitalBeds: Totalhospitalbeds;
  ICUBeds: Icubeds;
  Rt: Rt;
  RtCI90: Rtci90;
}
export interface _ResourceUsageProjection {
  peakShortfall: Peakshortfall;
  peakDate: Peakdate;
  shortageStartDate: Shortagestartdate;
}
export interface _Actuals {
  population: Population;
  intervention: Intervention;
  cumulativeConfirmedCases: Cumulativeconfirmedcases;
  cumulativeDeaths: Cumulativedeaths;
  hospitalBeds: _ResourceUtilization;
  ICUBeds: _ResourceUtilization;
}
export interface _ResourceUtilization {
  capacity: Capacity;
  currentUsage: Currentusage;
}
