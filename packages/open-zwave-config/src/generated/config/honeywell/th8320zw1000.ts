import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0039:0001:0011",
            name: "OzwInfoPage",
          },
          { text: "images/honeywell/th8320zw1000.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/44/",
            id: "0001",
            name: "ZWProductPage",
            type: "0011",
          },
          {
            text:
              "http://yourhome.honeywell.com/home/Products/Thermostats/7-Day-Programmable/VisionPRO+8000.htm",
            name: "ProductPage",
          },
          {
            text:
              "Integrate comfort control into your automated home with Honeywell's most popular programmable thermostat, designed for Z-Wave systems! VisionPRO Z-Wave offers you top-of-the-line features like touchscreen interaction, a real-time clock, and a large, easy-to-read backlit display.",
            name: "Description",
          },
          { text: "Vision PRO Z-Wave Thermostat", name: "Name" },
          {
            text: "TH8320ZW1000",
            id: "0001",
            name: "Identifier",
            type: "0011",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0011",
          },
          {
            text:
              "http://honeywell.com/Products-Services/Pages/consumer-home.aspx",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/44/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "67", Compatibility: [{ Base: [0] }] }],
  },
};

export default config;
