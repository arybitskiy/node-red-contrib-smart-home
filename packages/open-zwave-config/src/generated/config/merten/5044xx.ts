import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/007A:0001:4002",
            name: "OzwInfoPage",
          },
          { text: "images/merten/5044xx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/321/",
            id: "0001",
            name: "ZWProductPage",
            type: "4002",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "4002",
          },
          { text: "5044xx", id: "0001", name: "Identifier", type: "4002" },
          {
            text: "5044xx - Radio sensor cover for in-wall switch",
            name: "Name",
          },
          {
            text:
              "http://www.merten.com/Radio-transmitter-and-radio-receiver.148.0.html?&L=3%3Fq%3Dplus%20lin",
            name: "ProductPage",
          },
          {
            text: "http://www.merten.com/Info-Centre.59.0.html",
            name: "ProductSupport",
          },
          {
            text:
              "Binary Switch + Sensor Plate.CONNECT radio push-button, 1-gang\n\nTo control the radio receiver\n \nExtremely flat design\nThe ideal solution for retrofitting\nCan be secured with screws or adhesive\nCan be snapped into existing switch ranges",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/321/xml",
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
