import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Control Command when trip",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
