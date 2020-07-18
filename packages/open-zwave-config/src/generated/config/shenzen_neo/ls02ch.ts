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
            label: "Back light Enable",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the back light state of the touch button. The back light led would be on when Light Switch is powered on if the parameter is set to '1'. Otherwise the back light led would be off.",
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
            label: "Relay On/Off indicate",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the relays state. The led will be turned on with pink color when the button is touched to tur on relay if this paramtere is set to '1'. Otherwise the ledstate is not changed.",
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
            label: "Relay On/Off States Saved Enable",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the on/off status of relay needs to be saved. The status will be saved when relay status is changed if this parameter is set to '1'. Otherwise the relay stataus is not saved. The Light Switch will restore the relay On/Off  status when powered again.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Root Device Mapped Setting",
            min: "0",
            max: "3",
            value: "0",
            size: "1",
            Help:
              "This parameter defines which endpoint is mapped to root device (Endpoint 0). 0 - No endpoint is mapped to root device. 1 - Endpoint 1 is mapped to root device. 2 - Endpoint 2 is mapped to root device. 3 - Both endpoint 1 and 2 are mapped to root device.",
            Item: [
              { label: "No endpoint is mapped to root device", value: "0" },
              { label: "Endpoint 1 is mapped to root device", value: "1" },
              { label: "Endpoint 2 is mapped to root device", value: "2" },
              {
                label: "Both endpoint 1 and 2 are mapped to root device",
                value: "3",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label: "Sending Report Endpoint 1",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Sending Report Endpoint 2",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
