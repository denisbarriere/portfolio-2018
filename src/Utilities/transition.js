export default ({
  property = "all",
  length = "0.5s",
  ease = "ease-in-out"
}) => `
  transition: ${property} ${length} ${ease}
`;
