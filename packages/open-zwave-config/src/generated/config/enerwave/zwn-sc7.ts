import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: { Revision: 1, CommandClass: [{ id: "32", action: "remove" }] },
};

export default config;
