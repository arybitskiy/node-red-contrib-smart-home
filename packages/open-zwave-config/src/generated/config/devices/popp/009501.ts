import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "0",
            label: "LED status",
            size: "1",
            value: "0",
            Help: "Status of the LED indicator during normal operation",
            Item: [
              { label: "LED always on", value: "0" },
              { label: "LED always off", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Controller behavior",
            size: "1",
            value: "0",
            Help:
              "Limit the operations that can be performed locally and/or over the Z-Wave network",
            Item: [
              { label: "Remote and manual open/close", value: "0" },
              { label: "Remote open/close only", value: "1" },
              { label: "Remote open, manual close only", value: "2" },
              { label: "Manual open, remote close only", value: "3" },
              { label: "Manual open/close only", value: "4" },
            ],
          },
        ],
      },
      { id: "38", action: "remove" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "10", label: "Lifeline" },
              {
                index: "2",
                max_associations: "10",
                label: "Local valve operation",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
