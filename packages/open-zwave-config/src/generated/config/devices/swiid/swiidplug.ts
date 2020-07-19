import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Switch All",
            min: "0",
            max: "255",
            value: "255",
            size: "1",
            Help: "Enable/Disable ALL ON/OFF",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "5", label: "Long press" },
              {
                index: "2",
                max_associations: "5",
                label: "Status",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
