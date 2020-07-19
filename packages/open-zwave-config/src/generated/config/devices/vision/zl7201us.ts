import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0703:2007",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zl7201us.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/876/",
            id: "0703",
            name: "ZWProductPage",
            type: "2007",
          },
          { text: "ZL7201US", id: "0703", name: "Identifier", type: "2007" },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_196.html",
            name: "ProductPage",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0703",
            name: "FrequencyName",
            type: "2007",
          },
          {
            text:
              "ZL7201 Z-Wave Plug-in ON/OFF\n\nFeatures:\n*Basic functions are similar to ZL7101\n*Suitable for most of Appliance\n*Max Load output: 600W, 60Hz\n*Input: 120VAC\n*Motor load: 1/2 HP\n*Resistive load: 15A",
            name: "Description",
          },
          { text: "Appliance Module ZL7201US", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/876/xml",
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
