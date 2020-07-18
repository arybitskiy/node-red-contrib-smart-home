import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                max_associations: "5",
                label: "Notification",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "5",
                label: "LifeLine",
                auto: "true",
              },
              { index: "3", max_associations: "5", label: "Binary Sensor" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
