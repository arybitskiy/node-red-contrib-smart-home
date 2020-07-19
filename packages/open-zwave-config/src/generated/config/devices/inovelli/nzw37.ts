import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            value: "0",
            label: "LED Indicator Control",
            units: "",
            size: "1",
            min: "0",
            max: "255",
            type: "list",
            Help:
              "Choose if you want the LED indicator to turn on when switch is on or off or disable completely.",
            Item: [
              { value: "0", label: "LED on when switch is off" },
              { value: "1", label: "LED on when switch is on" },
              { value: "2", label: "LED is disabled" },
            ],
          },
          {
            genre: "config",
            index: "2",
            value: "0",
            label: "Automatically turn channel 1 off after interval",
            units: "seconds",
            size: "2",
            min: "0",
            max: "32767",
            type: "short",
            Help:
              "Automatically turn channel 1 off after this many seconds. 0 is disabled",
          },
          {
            genre: "config",
            index: "3",
            value: "0",
            label: "Automatically turn channel 2 off after interval",
            units: "seconds",
            size: "2",
            min: "0",
            max: "32767",
            type: "short",
            Help:
              "Automatically turn channel 2 off after this many seconds. 0 is disabled",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
