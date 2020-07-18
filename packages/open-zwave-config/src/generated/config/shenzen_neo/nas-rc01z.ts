import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Basic Set Level",
            min: "1",
            max: "100",
            size: "1",
            value: "100",
            Help:
              "\n                Basic Set Command will be sent where contains a value when SOS is triggered if group 2 have associated a device such as siren, the receiver will take it for consideration; for instance, if associated siren is received the Basic Set Command (0xFF), the siren will take alarm on.\n                0-99 are mapping to Basic Set value (0 - 99). 100 is mapping to Basic Set Value 0xFF.\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "2",
            label: "SOS Event Clear Time",
            min: "0",
            max: "32767",
            units: "seconds",
            size: "2",
            value: "60",
            Help:
              "\n                This parameter defines the time to clear emergency event after emergency event is triggered when parameter #3 is set to 2.\n                This parameter is set to 0, the clearing emergency event will not occurred always.\n                The default value of this parameter is set to 60, means that the emergency event will be cleared after 60 seconds when emergency event is triggered.\n            ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "SOS Configuration",
            min: "1",
            max: "2",
            size: "1",
            value: "2",
            Help:
              "\n                This parameter defines the SOS key function, the SOS key can be configured as emergency event key or central scene notification key.\n            ",
            Item: [
              { label: "Central Scene", value: "1" },
              { label: "Emergency event", value: "2" },
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
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Basic Set" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
