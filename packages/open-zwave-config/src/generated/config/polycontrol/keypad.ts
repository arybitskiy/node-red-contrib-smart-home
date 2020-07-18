import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "98", Compatibility: [{ GetSupported: [false] }] },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      { action: "remove", id: "115" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Group 1",
                max_associations: "1",
                write_only: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
