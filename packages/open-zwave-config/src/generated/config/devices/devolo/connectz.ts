import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { action: "remove", id: "32" },
      { id: "67", Compatibility: [{ OverridePrecision: [2], Base: [0] }] },
    ],
  },
};

export default config;
