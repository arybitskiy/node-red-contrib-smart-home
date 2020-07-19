import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Control Mode",
            size: "1",
            value: "0",
            Help:
              "Set the switch to control other devices or issue various scene activation commands to a central controller.",
            Item: [
              { label: "Scenes and groups", value: "0" },
              { label: "Scenes", value: "1" },
              { label: "Groups", value: "2" },
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
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label: "Top/bottom button click and holding down",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Top/bottom button double-click and holding down",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
