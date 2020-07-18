import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0403:2004",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zs610eu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/860/",
            id: "0403",
            name: "ZWProductPage",
            type: "2004",
          },
          { text: "Smoke Detector", name: "Name" },
          { text: "ZS610EU", id: "0403", name: "Identifier", type: "2004" },
          {
            text:
              "ZS 6101 Smoke Detector\n \nFeatures:\n*Photoelectron Smoke Detect\n*Smoke sensitivity: 0.5%/ft~4.0%/ft\n*Low battery detection\n*LED Status Indicator\n*100ft Line of Sight\n*Z-Wave 5.02 SDK\n*100ft line of sight\n*Operating temp: -10oC~60oC\n*Working Voltage: 3V\n*Dimensions: 120*120*48.2mm",
            name: "Description",
          },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_191.html",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "0403",
            name: "FrequencyName",
            type: "2004",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/860/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
