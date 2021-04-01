import React from 'react';
import { MarkdownContent, Paragraph } from 'components/Markdown';
import { footerContent } from 'cms-content/learn';
import styled from 'styled-components';
import { anchorStyles } from 'components/Markdown';

const Wrapper = styled.div`
  margin: 2.5rem 0 1rem;
  font-style: italic;

  ${anchorStyles};
`;

const Footer: React.FC<{ pageSpecificCopy?: React.ReactElement }> = ({
  pageSpecificCopy,
}) => {
  return (
    <Wrapper>
      {pageSpecificCopy && <Paragraph>{pageSpecificCopy}</Paragraph>}
      <MarkdownContent source={footerContent.body} />
    </Wrapper>
  );
};

export default Footer;
