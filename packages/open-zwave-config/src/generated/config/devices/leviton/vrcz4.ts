import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                index: "1",
                max_associations: "232",
                label: "Basic - Button 1",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "232",
                label: "Basic - Button 2",
              },
              {
                index: "3",
                max_associations: "232",
                label: "Basic - Button 3",
              },
              {
                index: "4",
                max_associations: "232",
                label: "Basic - Button 4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
