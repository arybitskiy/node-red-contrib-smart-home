import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "96",
        Compatibility: [{ ForceVersion: [2], MapRootToEndpoint: [true] }],
      },
    ],
  },
};

export default config;
