import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
	${reset}

	*{
		box-sizing: border-box;
		font-family: 'Arial';
	}

	body{
		width: 100%;
		height: 100vh;

		background-color: #EFEFEF;
	}
`

export default GlobalStyled;
