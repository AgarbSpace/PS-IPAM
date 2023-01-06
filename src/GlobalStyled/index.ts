import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
	${reset}

	*{
		box-sizing: border-box;
		font-family: 'Candara';
	}

	body{
		width: 100%;
		height: 100vh;

		background-color: #ABDFB1;
	}

	.root{
		width: 100%;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export default GlobalStyled;
