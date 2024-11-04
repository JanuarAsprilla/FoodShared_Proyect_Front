const StyledSelect = styled.select`
  padding: ${(props) => props.padding || '0.5em'};
  margin: ${(props) => props.margin || '0.5em 0'};
  border: 1px solid ${(props) => props.borderColor || '#ccc'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => props.textColor || '#333'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  width: 100%;
`

export default StyledSelect