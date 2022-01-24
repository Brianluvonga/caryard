import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 100px;
background: orange;
position: absolute;
margin-top: 200px;
text-align: center;
width: 100%;
@media (max-width: 960px) {
	padding: 70px 5px;
}
`;


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;


export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: justify;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 60px;
padding-left: 1px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;
cursor: pointer;

&:hover {
	color: white;
	transition: 200ms ease-in;
	text-decoration: none;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #0B4759;
margin-bottom: 40px;
font-weight: bold;

`;
