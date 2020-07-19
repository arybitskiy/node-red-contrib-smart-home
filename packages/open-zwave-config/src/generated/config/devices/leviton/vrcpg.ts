import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "134", Compatibility: [{ ClassGetVersionSupported: [false] }] },
    ],
  },
};

export default config;
