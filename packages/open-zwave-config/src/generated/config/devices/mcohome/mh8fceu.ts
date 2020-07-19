import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "68",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Fan Mode",
            size: "1",
            type: "list",
            units: "",
            Item: [
              { label: "On Low", value: "1" },
              { label: "On High", value: "3" },
              { label: "On Medium", value: "5" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "1", label: "On Low" },
              { index: "3", label: "On High" },
              { index: "5", label: "Unknown 5" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
