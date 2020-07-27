const timeToSeconds = (time) => {
  const a = time.split(':');
  const seconds = +a[0] * 60 * 60 + +a[1] * 60;
  return seconds;
};

export default timeToSeconds;
