import styled from "styled-components";

export const RowDiv = styled.div`
	display: flex;
	justify-content: center;
	background-color: blue;
	& + & {
		margin-top: 20px;
	}
`;
