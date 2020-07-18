import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            index: "1",
            genre: "config",
            label: "Internal buld temperature",
            units: "celsius",
            value: "0",
            read_only: "true",
            Help: "",
          },
          {
            type: "list",
            index: "255",
            genre: "config",
            label: "Reset bulb to factory settings",
            size: "4",
            value: "1",
            write_only: "true",
            Help: "\n      ",
            Item: [
              { label: "Normal", value: "1" },
              { label: "Perform Reset", value: "2290649224" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "5", label: "Report" }],
          },
        ],
      },
    ],
  },
};

export default config;
