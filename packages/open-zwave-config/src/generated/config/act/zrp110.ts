import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "bool",
            index: "29",
            genre: "config",
            label: "Load Sense",
            units: "",
            min: "0",
            max: "1",
          },
        ],
      },
    ],
  },
};

export default config;
