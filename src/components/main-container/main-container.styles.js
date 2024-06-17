import styled from 'styled-components';

const StyledContainer = styled.div`
	padding: 24px 24px;
	text-align: center;
`;

const StyledSubtitle = styled.h2`
	font-size: 16px;
	font-family: 'Barlow Condensed', sans-serif;
`;

const StyledTitle = styled.h1`
	font-size: 80px;
	font-family: 'Bellefair', serif;
	font-weight: normal;
	color: white;
	padding: 16px 0;
`;

const StyledText = styled.p`
	line-height: 25px;
`;

const StyledContainerCircle = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 150px;
	height: 150px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 81px;
`;
const StyledTextCircle = styled.p`
	padding-top: 68px;
	font-size: 20px;
	font-family: 'Bellefair', serif;
	letter-spacing: 1.25px;
	color: #0b0d17;
`;

export {
	StyledContainer,
	StyledSubtitle,
	StyledTitle,
	StyledText,
	StyledContainerCircle,
	StyledTextCircle
};
