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
            genre: "config",
            instance: "1",
            index: "1",
            label: "Condition after power failure",
            size: "1",
            value: "0",
            Help:
              "Defines if the switch should restore switch state to the last prior to device power off (power cycle).",
            Item: [
              { label: "Always Off", value: "0" },
              { label: "Always On", value: "1" },
              { label: "Last status", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "1", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
