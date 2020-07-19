import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", max_associations: "5", label: "LifeLine" },
              { index: "2", max_associations: "5", label: "Binary Sensor" },
              {
                index: "3",
                max_associations: "5",
                label: "Binary Sensor tamper",
              },
              { index: "4", max_associations: "5", label: "Notification" },
              {
                index: "5",
                max_associations: "5",
                label: "Notification tamper",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
