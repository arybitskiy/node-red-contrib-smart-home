import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            index: "1",
            genre: "config",
            label: "Toggle LED mode",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help: "Set to 1 for LED to be in sync with switch.",
            Item: [
              { label: "0: LED is on when switch is off", value: "0" },
              { label: "1: LED is on when switch is on", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "2",
            genre: "config",
            label: "Toggle button reverse",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help: 'Set to 1 for "up" to turn the load off.',
            Item: [
              { label: "0: Load is on when switch is up", value: "0" },
              { label: "1: Load is on when switch is down", value: "1" },
            ],
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
