import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "LED Light",
            min: "0",
            max: "2",
            value: "0",
            size: "1",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off (default)", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            min: "0",
            max: "1",
            size: "1",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
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
