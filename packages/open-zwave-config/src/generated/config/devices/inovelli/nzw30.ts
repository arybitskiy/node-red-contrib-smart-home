import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "3",
            label: "LED Indicator Control",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Choose if you want the LED indicator to turn on when switch is on or off or disable completely.",
            Item: [
              { label: "LED on when switch is off", value: "0" },
              { label: "LED on when switch is on", value: "1" },
              { label: "LED is disabled", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Orientation",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Controls the on/off orientation of the rocker switch",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Automatically turn switch off after interval",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Automatically turn the switch off after this many seconds. 0 is disabled",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic_Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
