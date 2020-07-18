import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "LED Mode",
            size: "1",
            value: "0",
            Help:
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF, instead of following the state of the load.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Night-light", value: "1" },
            ],
          },
          {
            type: "bool",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            size: "1",
            value: "False",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group 1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
