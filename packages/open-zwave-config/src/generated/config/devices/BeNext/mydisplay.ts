import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0100:0002",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/mydisplay.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/39/",
            id: "0100",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "Remote Display", name: "Name" },
          {
            text:
              "The Remote Display is a controlling device for changing automated lifestyles, selecting a scene or controlling individual products. The blue illuminated display provides comfortable readability during dark hours.\nTwo hotkey buttons are available which can be configured to your own wishes within the free of charge online manager.\nThe Remote Display runs on two AAA batteries, with an expected lifetime of four years.\n\nFeatures:\nControl and manage different scenes easily from one controller\nEasy to configure \nControl individual products\n\nSpecifications:\nZ Cert Prod Pkg ExcpLogo W max Converted Remote Display\nProduct dimensions: 170 x 45 x 22 millimeter (L x W x H)\nNormal operating voltage: 2x AAA 1,5V batteries. From 2,3Vdc to 4,0Vdc. Do not use rechargeable batteries\nStorage temperature: -5°C to +65°C\nStorage humidity: 10% to 70%\nOperating temperature: 0°C to 50°C\nOperating humidity:\t30% to 80%\nFrequency range: 868.42 MHz (Z-Wave)\nMaximum wireless range: 100 meters in line of sight\nAverage wireless range: 30 meter\nMesh-network wireless range: 150 to 300 meters (maximum of 4 hops)",
            name: "Description",
          },
          { text: "info@benext.eu", name: "ProductSupport" },
          {
            text: "BeNext myDisplay",
            id: "0100",
            name: "Identifier",
            type: "0002",
          },
          {
            text: "http://www.benext.eu/en/products/remote-display/",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/39/xml",
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
