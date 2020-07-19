import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            index: "1",
            label: "Auto Report Timing",
            size: "1",
            min: "60",
            max: "255",
            value: "60",
            units: "seconds",
            Help:
              "Choose how often you want to send automatic reports, in seconds.\n                Defaults to 60 seconds.",
          },
          {
            type: "int",
            genre: "config",
            index: "2",
            label: "Wattage Threshold",
            min: "5",
            max: "3600",
            value: "50",
            units: "watts",
            Help:
              "Minimum change in wattage to induce an automatic report.\n                Defaults to 50 watts.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "5", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
