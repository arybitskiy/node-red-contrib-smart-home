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
            genre: "config",
            instance: "1",
            index: "1",
            label: "Save On/Off status",
            value: "0",
            size: "1",
            Help:
              "This parameter defines the on/off status of relay needs saving or not. The status will be saved when relay status is changed if this parameter is set to '1'. Otherwise the relay status is not saved. The Light Switch will restore the relay On/Off status when it's powered again.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Backlight",
            value: "0",
            size: "1",
            Help:
              "This parameter defines the back light state of the touch button.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Relay On/Off Indicate",
            value: "0",
            size: "1",
            Help:
              "This Parameter defines the relay state. The led will be turned on with pink color when the button is touched to turn on relay if this parameter is set to '1'. Otherwise the LED is off.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              {
                index: "2",
                max_associations: "5",
                label: "Sending Report Endpoint 1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
