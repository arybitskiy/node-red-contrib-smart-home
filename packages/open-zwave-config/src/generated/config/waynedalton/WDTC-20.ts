import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [{ id: "67", Compatibility: [{ Base: [0] }] }],
  },
};

export default config;
