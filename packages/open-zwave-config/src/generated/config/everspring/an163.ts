import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0005:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an163.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/979/",
            id: "0005",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "On/Off Plug with metering", name: "Name" },
          { text: "AN163-1", id: "0005", name: "Identifier", type: "0004" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0005",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "This plug-in ON/OFF Module is able to detect current wattage (5~1440W) and overload wattage (1460~1580W) of connected non-dimmable lights or appliances.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/979/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "True Period",
            max: "120",
            min: "0",
            type: "byte",
            units: "100ms",
            value: "10",
            Help:
              "\n\t      This is the time the switching status needs to remain unchanged after a change to cause the device to send out a status message. 0 is Disabled.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Send Out Basic Command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t      Enable or Disable Send Basic Command to Group 2 when the local button press changes the switching state.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Meter Report Period (W)",
            max: "3240",
            min: "0",
            type: "short",
            units: "10s",
            value: "3",
            Help:
              "\n\t      The device will report its meter value within the interval set. \n\t      Set to 0 will disable the autoreporting function.\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Meter Report Period (kWh)",
            max: "3240",
            min: "0",
            type: "short",
            units: "10s",
            value: "1440",
            Help:
              "\n\t      The device will report its meter value within the interval set. \n\t      Set to 0 will disable the autoreporting function.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
