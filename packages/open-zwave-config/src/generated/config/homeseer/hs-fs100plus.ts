import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Sets light sensitivity",
            min: "0",
            max: "2",
            size: "1",
            value: "2",
            Help: "Operation with the Light Sensor cable on USB power.",
            Item: [
              { label: "High Sensitivity", value: "0" },
              { label: "Medium Sensitivity", value: "1" },
              { label: "Low Sensitivity", value: "2" },
            ],
          },
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Water detection beep frequency",
            min: "0",
            max: "2",
            size: "1",
            value: "0",
            Help:
              "Beep interval when on battery power and on USB power during the time water is detected.",
            Item: [
              { label: "10 minutes", value: "0" },
              { label: "5 minutes", value: "1" },
              { label: "30 minutes", value: "2" },
            ],
          },
          {
            type: "byte",
            index: "3",
            genre: "config",
            label: "Temperature report interval",
            units: "seconds",
            min: "30",
            max: "255",
            size: "1",
            value: "60",
            Help: "Temperature report interval on USB power, seconds.",
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Notification buzzer",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "The buzzer may be disabled when detecting water on line power or battery, the default value is set to enabled.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "5",
            genre: "config",
            label: "Light detection delay",
            units: "seconds",
            min: "0",
            max: "20",
            size: "1",
            value: "0",
            Help:
              "Set delay to avoid continuous notifications when detecting flashing LEDs. Flex Sensor will not send notification until flashing LED status changes. Note: Use only when detecting flashing LEDs.",
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
