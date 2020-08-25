export const startLightManager = (turnOnOrOff: (nextState: boolean) => void, delayInSeconds: number) => {
  let timeout;

  return [
    (nextState: boolean) => {
      clearTimeout(timeout);
      if (!nextState) {
        setTimeout(() => {
          timeout = turnOnOrOff(nextState);
        }, delayInSeconds * 1000);
      } else {
        turnOnOrOff(nextState);
      }
    },
    () => {
      clearTimeout(timeout);
    },
  ] as [(nextState: boolean) => void, () => void];
};
