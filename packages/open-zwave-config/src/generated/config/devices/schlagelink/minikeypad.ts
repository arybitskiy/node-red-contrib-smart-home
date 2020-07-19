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
            value: "0",
            Help:
              "Set all configuration values to default values (factory settings) if set to 0xff.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Feedback Time",
            type: "byte",
            value: "16",
            Help:
              "To configure the time the beep is automatically turned off in seconds. 0 means disabled. 255 is endless",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Feedback Timeout",
            type: "byte",
            value: "0",
            Help:
              "To configure the timeout to wait for a WAKEUP_NO_MORE_INFORMATION before the error beep is automatically sound. The error beeps are fixed 8 beeps shortly after each other. 0 means disabled",
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
            size: "1",
            type: "list",
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
      { id: "99", Compatibility: [{ ExposeRawUserCodes: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Report", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
