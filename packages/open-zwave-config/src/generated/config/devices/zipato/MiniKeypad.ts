import type { document } from "../../../github.com/OpenZWave/device_configuration";

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
            label: "Set to Default",
            type: "byte",
            value: "-1",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Feedback Time",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "To configure the time the beep is automatically turned off in seconds.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Endless", value: "-1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Feedback Timeout",
            type: "byte",
            value: "0",
            Help:
              "To configure the timeout to wait for a WAKEUP_NO_MORE_INFORMATION before the error beep is automatically sound. The error beeps are fixed 8 beeps shortly after each other.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Feedback Beeps per Second",
            type: "byte",
            value: "2",
            Help:
              "To configure the number of beeps per second. Every beep is fixed about 10ms.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "The Mode",
            type: "byte",
            value: "1",
            Help:
              "To configure the operating mode. If any mode other then 3, that value will be reported after a get but will be handled in SW as mode 1.",
            Item: [
              { label: "Mode 1: Normal operating mode.", value: "1" },
              {
                label:
                  "Mode 3: Z-Wave chip is always on to request e.g. version or manufacturer id.",
                value: "3",
              },
            ],
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group 1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
