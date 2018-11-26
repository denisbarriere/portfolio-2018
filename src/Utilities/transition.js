export default ({ property = "all", length = ".2s", ease = "ease-in-out" }) => `
  transition: ${property} ${length} ${ease}
`;
