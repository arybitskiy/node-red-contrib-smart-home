import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "133",
        Instance: [{ index: "1" }],
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Group 1",
                max_associations: "5",
                Node: [{ id: "1" }],
              },
            ],
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "23",
            label: "Autosend enable",
            max: "",
            min: "",
            type: "short",
            units: "",
          },
        ],
      },
    ],
  },
};

export default config;
