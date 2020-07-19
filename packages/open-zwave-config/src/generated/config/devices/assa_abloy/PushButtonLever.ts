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
            size: "1",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Audio Mode",
            value: "3",
            Help: "Disable the door sensor alarm function.",
            Item: [
              { label: "Off", value: "1" },
              { label: "On", value: "3" },
            ],
          },
          {
            type: "list",
            size: "1",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Auto Relock",
            value: "0",
            Help: "",
            Item: [
              { label: "On", value: "0" },
              { label: "Off", value: "255" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Re-lock Time",
            size: "1",
            min: "5",
            max: "255",
            units: "seconds",
            value: "30",
            Help:
              "seconds; after successful code entry and unit unlocks, it will automatically re-lock after specified time (30 = default value)",
          },
          {
            type: "list",
            size: "1",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Wrong Code Entry Limit",
            min: "1",
            max: "7",
            value: "5",
            Help:
              "\n\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
            Item: [
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Shutdown Time",
            size: "1",
            min: "5",
            max: "255",
            units: "seconds",
            value: "30",
            Help:
              "number of seconds unit will be inoperable after number of wrong code entries is exceeded (30 = default)",
          },
          {
            type: "list",
            size: "1",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Operating Mode",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "\n\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Vacation", value: "1" },
              { label: "Privacy", value: "2" },
            ],
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                RequestFlags: "0",
                Index: "1",
                Instance: "1",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "5", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
