export const escapeSVG = (svg: string, escapeTags: boolean = false) => {
  let newSvg = svg.replaceAll("#", "%23");
  if (escapeTags) {
    newSvg = svg.replaceAll("<", "%3C").replaceAll(">", "%3E");
  }
  return `data:image/svg+xml;charset=UTF-8,${newSvg}`;
};
