import styled from 'styled-components';

const CustomDivider = styled.div`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '1px'};

  min-width: ${(props) => props.$minWidth || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  
  background-color: ${(props) => props.$backgroundColor || '#D9D9D9'};
  border-radius: ${(props) => props.$borderRadius || '0.5rem'};
  opacity: ${props => props.$opacity || '100'};
`;

export default CustomDivider;