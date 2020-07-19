import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "10",
            Group: [
              { index: "1", max_associations: "232", label: "Channel 1 Basic" },
              {
                index: "2",
                max_associations: "232",
                label: "Channel 1 Multilevel",
              },
              { index: "3", max_associations: "232", label: "Channel 2 Basic" },
              {
                index: "4",
                max_associations: "232",
                label: "Channel 2 Multilevel",
              },
              { index: "5", max_associations: "232", label: "Channel 3 Basic" },
              {
                index: "6",
                max_associations: "232",
                label: "Channel 3 Multilevel",
              },
              { index: "7", max_associations: "232", label: "Channel 4 Basic" },
              {
                index: "8",
                max_associations: "232",
                label: "Channel 4 Multilevel",
              },
              { index: "9", max_associations: "232", label: "Channel 5 Basic" },
              {
                index: "10",
                max_associations: "232",
                label: "Channel 5 Multilevel",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
