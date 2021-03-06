import type { document } from "../../../github.com/OpenZWave/device_configuration";

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
            index: "12",
            label: "PIR Sensitivity",
            size: "1",
            min: "1",
            max: "8",
            value: "4",
            Help:
              "Adjust PIR sensor sensitivity.  1-8; 1 is low sensitivity, 8 is high sensitivity  Defaults to 4.",
          },
          {
            type: "list",
            genre: "config",
            index: "14",
            label: "Enable BASIC SET reports",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable or Disable BASIC SET reports when motion is triggered for Group 2 of associated devices.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "15",
            label: "Reverse values BASIC SET reports",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Use it to reverse values sent in BASIC SET reports when motion is triggered for Group 2 of associated devices. Defaults to Disabled, which will send value 255 when motion is triggered and send value 0 when motion times out.  Enabled will send value 0 when motion is triggered, and send value 255 when motion times out",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "18",
            label: "Trigger ON Duration",
            size: "2",
            min: "3",
            max: "65535",
            value: "27",
            units: "seconds",
            Help:
              "Use it to set trigger interval - the time when motion is reported again after initial trigger.  Values are between 3 and 65535 seconds, with a +3 second offset.  Example; value of 3 actually means 6 seconds.  Value of 27 actually means 30 seconds.  Value of 65535 actually means 65538 seconds.  Defaults to 27, so 30 seconds. NOTE: Small interval will increase activity and decrease battery life.",
          },
          {
            type: "list",
            genre: "config",
            index: "17",
            label: "Vibration Sensor",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "Enable or Disable vibration sensor.  Enabled by default.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "32",
            label: "Low Battery Alert",
            size: "1",
            min: "10",
            max: "50",
            value: "10",
            Help:
              "Use this to set battery level for low battery reports.  value of 10 means 10% battery remaining, while value 50 means 50% battery remaining.  Defaults to 10.",
          },
          {
            type: "list",
            genre: "config",
            index: "20",
            label: "LED Indicator",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "Enable or Disable LED indicator.  Enabled by default.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Control Command" },
              {
                index: "3",
                max_associations: "5",
                label: "Notification report",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Binary sensor report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
