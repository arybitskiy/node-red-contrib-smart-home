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
            index: "10",
            label: "Typical click timeout",
            max: "100",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "50",
            Help:
              "Typical time used to differentiate click, hold, double and triple clicks Values: 1 to 100 in 10 ms units (default is 50, that is equivalent to 500 ms)",
          },
          {
            genre: "config",
            index: "11",
            label: "Invert buttons",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Action on button single press or hold",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Defines which command should be sent on button single press or hold. Basic commands are sent to Association group. Switch All commands are sent broadcast.",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "Switch On, Off and dim using Basic Set (default)",
                value: "1",
              },
              { label: "Switch All On/Off", value: "2" },
              { label: "Scene Activation", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Action on button double press or hold",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Defines which command should be sent on button double press or press-hold. Basic commands are sent to Association group. Switch All commands are sent broadcast. If not disabled, the device will wait for a click timeout to see if the second click would be pressed. This will introduce a small delay for single click commands.",
            Item: [
              {
                label: "Disabled (don't wait for double click, default)",
                value: "0",
              },
              { label: "Switch On, Off and dim using Basic Set", value: "1" },
              { label: "Switch All On/Off", value: "2" },
              { label: "Scene Activation", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Send the following Switch All commands",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Item: [
              { label: "Switch All Off only (default)", value: "1" },
              { label: "Switch All On only", value: "2" },
              { label: "Switch All On and Off", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Send battery report",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Send unsolicited battery report on wakeup.",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "To same node as wakeup notification", value: "1" },
              { label: "Broadcast", value: "2" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { action: "add", id: "43", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Single press",
                max_associations: "8",
              },
              { index: "2", label: "Double press", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
