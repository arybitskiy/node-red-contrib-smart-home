import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0803:2008",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zl7101us.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/877/",
            id: "0803",
            name: "ZWProductPage",
            type: "2008",
          },
          {
            text:
              "ZL 7101 Z-Wave Plug-in Dimmer Module\n\nFeatures:\n*Plug-In Module\n*Z-wave control & AC power output\n*Suitable for most bulb type appliance\n*Adjusting the light via the middle button\n*Protection function via the middle button \n*Max load output: 300W, 60Hz\n*Input: 120VAC\n*Dimensions: 100*60*37mm",
            name: "Description",
          },
          { text: "Dimmer Module ZL7101US", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0803",
            name: "FrequencyName",
            type: "2008",
          },
          { text: "ZL7101US", id: "0803", name: "Identifier", type: "2008" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/877/xml",
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
