import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Sensor Binary Report Toggle",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Toggle the sensor binary report value when the Water Sensor is Triggered",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverse", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Wake Up on Power On",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable wake up 10 minutes when the power is switched on.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Basic Set Toggle",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Toggle the basic set value when the Water Sensor is Triggered",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverse", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "121",
            label: "Report Type to Send",
            max: "4369",
            min: "0",
            type: "int",
            value: "256",
            Help:
              "To set which command will be sent to the associated nodes when the Water Sensor is triggered.\n\t            \tBitsets:\n\t         \t1 -> Battery\n\t                4 -> Sensor Binary\n\t                8 -> Basic Set\n\t                12 -> Alarm\n\t              \tDefault setting: 0x100 (Basic Set)\n              \t\tOZW Ideal Setting: 0x1011 (Battery, Sensor Binary Report, Alarm)\n            \t    ",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset to default",
            type: "button",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults.",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "4" }],
          },
        ],
      },
    ],
  },
};

export default config;
