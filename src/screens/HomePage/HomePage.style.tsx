import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Subtitle1 } from 'components/Typography';
import { mobileBreakpoint, materialSMBreakpoint } from 'assets/theme/sizes';
import {
  StyledLink as RegionItemWrappingLink,
  SkeletonWrapper as RegionItemSkeletonWrapper,
} from 'components/RegionItem/RegionItem.style';

export const ColumnCentered = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: auto auto 3rem;
`;

export const HomePageBlock = styled.div`
  margin: 3.5rem 1rem;

  @media (min-width: ${materialSMBreakpoint}) {
    margin: 2.75rem 1rem 4.75rem;
  }
`;

export const HomePageBlockHeader = styled.h2`
  ${props => props.theme.fonts.regularBookBold};
  font-size: 26px;
  margin-top: 16px;
  text-align: center;

  @media (min-width: ${materialSMBreakpoint}) {
    font-size: 36px;
  }
`;

export const HomePageBlockSubtitle = styled.div`
  ${props => props.theme.fonts.regularBook};
  font-size: 16px;
  margin-top: 20px;
  text-align: center;

  @media (min-width: ${materialSMBreakpoint}) {
    margin-top: 24px;
  }
`;

// zero right margin so that it's full bleed on mobile when overflowing
export const RegionItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;
  margin-left: 1rem;
  margin-right: 0;
  flex: 1;
  overflow-x: auto;

  ${RegionItemWrappingLink},${RegionItemSkeletonWrapper} {
    &:first-of-type{
      margin-right: .75rem;
    }
  }

  @media (min-width: ${materialSMBreakpoint}) {
    flex-direction: row;
    margin: auto;
    margin-top: 0.75rem;
  }
`;

export const SearchBarThermometerWrapper = styled(Box)`
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    margin: 0 1rem -3.5rem;
  }
`;

export const BannerContainer = styled.div`
  margin: 0 auto;

  @media (min-width: ${mobileBreakpoint}) {
    margin-top: 2rem;
    max-width: 710px;
  }
`;

export const ElectionCountdownContainer = styled.div`
  margin: 1rem auto 0;

  @media (min-width: ${mobileBreakpoint}) {
    margin-top: 2rem;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 1000px;
  margin: auto 1rem;
  padding: 2.5rem 0;
  border-top: 1px solid ${props => props.theme.palette.lightGray};
`;

export const SectionHeader = styled(Subtitle1)`
  text-align: center;
  margin-bottom: 1.25rem;
`;

export const ToggleWrapper = styled.div`
  margin: 1.25rem auto 1rem;

  @media (min-width: ${materialSMBreakpoint}) {
    margin: 1.6rem auto 0;
  }
`;

export const VaccinationsThermometerHeading = styled.div`
  ${props => props.theme.fonts.regularBook};
  font-size: 14px;
  margin-bottom: 8px;
`;
