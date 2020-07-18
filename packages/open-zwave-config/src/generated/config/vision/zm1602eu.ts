import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "0",
            label: "Siren Strobe Mode",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Defines the reaction of the siren: [0] Strobe and Siren, [1] Siren, [2] Strobe (Default setting: 0)",
          },
          {
            genre: "config",
            index: "1",
            label: "Alarm auto stop",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Defines the auto time out of the alarm indication: [0] 30 seconds, [1] 60 seconds, [2] 120 seconds, [3] Continuous (Default setting: 0)",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "37", Compatibility: [{ SetAsReport: [true] }] },
      { id: "128", Compatibility: [{ SetAsReport: [true] }] },
    ],
  },
};

export default config;
