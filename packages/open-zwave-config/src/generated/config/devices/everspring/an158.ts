import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0002:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an158.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/871/",
            id: "0002",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "ON/OFF Plug with power metering", name: "Name" },
          {
            text: "CEPT (Europe) / Russia",
            id: "0002",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "http://www.everspring.com/AN158.aspx", name: "ProductPage" },
          {
            text:
              "This wireless plug-in ON/OFF Module is a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks. Remote On/Off control of the connected load is possible with other manufacturer’s Wireless Controller. Each module is designed to act as a repeater.  Repeaters will re-transmit the RF signal to ensure that the signal is received by its intended destination by routing the signal around obstacles and radio dead spots. The plug-in ON/OFF Module is compatible with Everspring’s Motion Detectors SP814 and Door/Window Detectors SM103.",
            name: "Description",
          },
          { text: "AN158-A", id: "0002", name: "Identifier", type: "0004" },
          {
            text: "http://www.everspring.com.tw/contact-us/index.asp",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/213/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/639/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/871/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
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
            type: "short",
            units: "100ms",
            value: "10",
            Help:
              "\n\tThis is the time the switching status needs to remain\nunchanged after a change to cause the device to send out a status\nmessage. 0 is Disabled.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Send Out Basic Command",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\tEnable or Disable Send Basic Command to Group 2 when the local\nbutton press changes the switching state.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Meter Report Period",
            max: "3240",
            min: "0",
            type: "short",
            units: "10s",
            value: "3",
            Help:
              "\n\tThe device will report its meter value within the interval\nset. Set to 0 will disable the autoreporting function.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
