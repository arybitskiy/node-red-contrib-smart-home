export const startLightManager = (turnOnOrOff: (nextState: boolean) => void, delayInSeconds: number) => {
  let timeout;

  return [
    (nextState: boolean) => {
      clearTimeout(timeout);
      turnOnOrOff(nextState);
      if (!nextState) {
        setTimeout(() => {
          timeout = turnOnOrOff(nextState);
        }, delayInSeconds * 1000);
      }
    },
    () => {
      clearTimeout(timeout);
    },
  ] as [(nextState: boolean) => void, () => void];
};
