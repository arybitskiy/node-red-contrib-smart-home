import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Invert Switch",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Should the switch be inverted. Pressing down on the switch turns the load ON.",
            Item: [
              { label: "Inverted", value: "1" },
              { label: "Default", value: "0" },
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
