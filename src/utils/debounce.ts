const createDebounce = () => {
  let timeout: number | undefined = 0;

  return function (fnc: () => void, delayMs: number = 300) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs);
  };
};

export default createDebounce
