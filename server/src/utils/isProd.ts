const isProd = (): boolean => {
  const env: string = process.argv[2];

  return env === "--prod";
};

export default isProd;
