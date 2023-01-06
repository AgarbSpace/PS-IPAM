import styled from 'styled-components';

export const Div = styled.div`
	width: 70%;
	height: 180px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20px;
	margin-bottom: 10px;
	gap: 5px;

	border: 1px solid #000000;
	border-radius: 15px;
`

export const PageHeader = styled.header`
	width: 100%;
	height: 100px;

	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;

	background-color: #144728;

	div{
		width: 182px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	span{
		&:first-child{
			font-size: 60px;
			font-weight: bold;
		}
		&:nth-child(2){
			font-size: 15px;
			color: #FFFFFF;
		}
	}
`

export const Strong = styled.strong`
	font-weight: bold;
`
export const Input = styled.input`
	width: 200px;
	height: 30px;
	margin-bottom: 20px;

	::placeholder{
		font-size: 15px;
	}

`

export const Results = styled.span`
	font-size: 13px;
	margin-bottom: 20px;
`
