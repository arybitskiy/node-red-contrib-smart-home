import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/007A:0004:0003",
            name: "OzwInfoPage",
          },
          { text: "images/merten/506004.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/211/",
            id: "0004",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "http://www.merten.com/Radio-transmitter-and-radio-receiver.148.0.html?&L=3%3Fq%3Dplus%20lin",
            name: "ProductPage",
          },
          {
            text:
              "506004 4-Channel Binary Sensor.CONNECT radio transmitter flush-mounted, 4-gang\n\nFor integration into any conventional switch range in the radio system\n \nJust place the radio pellet behind the push-button or switch inserts in the flush-mounted socket",
            name: "Description",
          },
          {
            text: "http://www.merten.com/Info-Centre.59.0.html",
            name: "ProductSupport",
          },
          {
            text: "506004 Radio Transmitter flush-mounted CONNECT, 4-gang",
            name: "Name",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/211/xml",
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
