export const getLabel = (
  label:
    | string
    | (
        | {
            lang?: string;
            text?: string;
            name?: string;
          }
        | string
      )[]
) => {
  if (typeof label === 'string') {
    return label;
  }

  const labelWithLang = label[0];
  if (typeof labelWithLang === 'string') {
    return labelWithLang;
  }

  if (typeof labelWithLang === 'object' && typeof labelWithLang.text === 'string') {
    return labelWithLang.text;
  }

  throw new Error('Unknown label');
};
