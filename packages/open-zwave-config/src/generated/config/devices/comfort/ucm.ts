import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0030:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/comfort/ucm.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/833/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "The UCM/Zwave is a gateway to Z-Wave which allows users to control Z-Wave modules from the telephone, keypads, touchscreens and any user interface used with Comfortintegrated Intruder Alarm and Home Automation system",
            name: "Description",
          },
          { text: "UCM/Zwave", id: "0001", name: "Identifier", type: "0001" },
          { text: "Cytech UCM/ZWave", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "http://www.cytech.biz/zwave_interface_eu.html?category_id=74",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/833/xml",
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
