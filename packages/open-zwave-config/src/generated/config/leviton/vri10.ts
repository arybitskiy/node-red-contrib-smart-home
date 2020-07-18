import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0334:0602",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/vri10.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/810/",
            id: "0334",
            name: "ZWProductPage",
            type: "0602",
          },
          { text: "Magnetic Low Voltage Dimmer", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0334",
            name: "FrequencyName",
            type: "0602",
          },
          {
            text:
              "Vizia RF + 1000VA Magnetic Low Voltage, 1000W Incandescent and Mark 10 Scene Capable Dimmer for single pole, 3-way or more applications, with LED locator and brightness display.",
            name: "Description",
          },
          { text: "VRMX1", id: "0334", name: "Identifier", type: "0602" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/810/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "134", Compatibility: [{ ClassGetVersionSupported: [false] }] },
    ],
  },
};

export default config;
