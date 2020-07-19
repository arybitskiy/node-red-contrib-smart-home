import type { document } from "../../../github.com/OpenZWave/device_configuration";

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
            label: "Load Sensing",
            size: "1",
            value: "False",
            Help: "Turn on the module when the attached load is connected.",
          },
          {
            type: "bool",
            index: "5",
            genre: "config",
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            value: "True",
            Help:
              "This dimmer will always start dimming from its current level, ignoring any commanded start level.",
          },
        ],
      },
      {
        id: "38",
        Value: [
          {
            type: "byte",
            genre: "user",
            instance: "1",
            index: "0",
            label: "Level",
            units: "",
            min: "0",
            max: "99",
            value: "0",
          },
        ],
      },
    ],
  },
};

export default config;
