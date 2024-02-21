// TODO: maybe we don't need it? useId
export const getDescriptionId = (id: string): string => {
  return `${id}Description`;
};

// TODO: maybe we don't need it? useId
export const getErrorId = (id: string): string => {
  return `${id}Error`;
};

export const getAriaDescribedBy = (
  id: string,
  hasDescription: boolean = false,
  hasError: boolean = false,
): string | undefined => {
  const errorId = getErrorId(id);
  const descrId = getDescriptionId(id);

  return hasError
    ? hasDescription
      ? `${errorId} ${descrId}`
      : errorId
    : hasDescription
      ? descrId
      : undefined;
};
