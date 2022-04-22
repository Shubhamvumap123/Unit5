import "./Button.css";
import styled from "styled-components";
// export const Button = ({children,onClick}) =>{
//     return (

//     <button onClick={onClick} className="button-33">s:{children}</button>
    
//     )
// } 
const Button = styled.button`
margin-left: 10px;
background-color: rgb(36,144,253);
border-radius: 10px;
color: black;
cursor: pointer;
display: inline-block;
font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
padding: 7px 20px;
text-align: center;
text-decoration: none;
border: 1px solid black;
font-size: 16px;
`;

export {Button}