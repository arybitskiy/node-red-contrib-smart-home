import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0002:0011",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/han02-1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/696/",
            id: "0002",
            name: "ZWProductPage",
            type: "0011",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0011",
          },
          { text: "http://www.everspring.com/HAN02.aspx", name: "ProductPage" },
          { text: "HAN02-1", id: "0002", name: "Identifier", type: "0011" },
          {
            text: "Small Z-Wave In-Wall Switch Module With Two Relay",
            name: "Name",
          },
          {
            text:
              "This in-wall switch module is a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks. Remote On/Off control of the connected load is possible with other manufacturer’s Wireless Controller. \n\nThis in-wall switch module is able to detect overload wattage of connected non-dimmable lights or appliances. When detecting overload state, the Module will be disabled and its On/Off button will be lockout of which LED will flash quickly.  However, disconnect and re-connect the wiring of the Module will reset its overload condition to normal status.\nTwo additional digital inputs allow user to manual switch on/off the module for normal operation and can manual execute inclusion/exclusion/association at the first 3 minute when the first power is applied, this can let installer easy to configure even the module already install inside the wall box.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/696/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
