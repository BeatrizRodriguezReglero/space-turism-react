import styled from 'styled-components';

const StyledContainer = styled.div`
	background-image: url(${({ $bgImage }) => $bgImage});
	background-repeat: no-repeat;
	background-size: cover;
`;

export { StyledContainer };
