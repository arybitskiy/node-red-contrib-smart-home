import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Set to Default",
            value: "-1",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Startup with last known socket status",
            size: "1",
            value: "0",
            Help: "The state in what the switch is when power is supplied.",
            Item: [
              { label: "Off", value: "0" },
              { label: "Previous state", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Relay delay time",
            value: "50",
            units: "ms",
            Help:
              "When the relay is switched it can't be switched again until the configured time has passed.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Led indicator",
            size: "1",
            value: "1",
            Help: "Show the led state compared to the relay state.",
            Item: [
              { label: "Led off", value: "0" },
              { label: "Led on / Relay on", value: "1" },
              { label: "Led on / Relay off", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                max_associations: "1",
                label: "Group 1",
                auto: "false",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
