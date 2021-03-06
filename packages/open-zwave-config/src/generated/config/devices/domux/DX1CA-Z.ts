import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "1", label: "LifeLine" },
              { index: "2", max_associations: "5", label: "Binary Sensor" },
              { index: "3", max_associations: "5", label: "Notification" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
