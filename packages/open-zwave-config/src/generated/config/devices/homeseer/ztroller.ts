import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    Protocol: [{ APIcall: { function: "0x80", present: "true" } }],
  },
};

export default config;
