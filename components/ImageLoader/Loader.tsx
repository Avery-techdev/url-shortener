type Loader = {
  src: string;
  width?: number;
  quality?: number;
};

export const Loader = ({ src, width, quality }: Loader) =>
  `${src}?w=${width}&q=${quality || 75}`;
