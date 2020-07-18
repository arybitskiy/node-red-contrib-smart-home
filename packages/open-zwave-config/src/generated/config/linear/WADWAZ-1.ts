import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "External Switch",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "External Switch Status",
            Item: [
              { label: "On", value: "255" },
              { label: "Off", value: "0" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              { index: "1", label: "All Reports", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
