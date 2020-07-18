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
            instance: "1",
            label: "Saving state before power failure",
            size: "1",
            type: "list",
            value: "1",
            Help: "Switch state saved or not when power down",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Button1",
                max_associations: "5",
              },
              { index: "2", label: "Button2", max_associations: "5" },
              { index: "3", label: "Button3", max_associations: "5" },
              { index: "4", label: "Button4", max_associations: "5" },
              {
                auto: "true",
                index: "5",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
