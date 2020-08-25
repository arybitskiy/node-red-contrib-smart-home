export const startLightManager = (turnOnOrOff: (nextState: boolean) => void, delayInSeconds: number) => {
  let timeout: number;

  return [
    (nextState: boolean) => {
      clearTimeout(timeout);
      if (nextState) {
        console.log('turn on');
        turnOnOrOff(nextState);
      } else {
        timeout = setTimeout(() => {
          console.log('turn off');
          turnOnOrOff(nextState);
        }, delayInSeconds * 1000);
      }
    },
    () => {
      clearTimeout(timeout);
    },
  ] as [(nextState: boolean) => void, () => void];
};
