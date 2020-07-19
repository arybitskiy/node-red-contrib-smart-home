import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0001:000D",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/ses301.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/676/",
            id: "0001",
            name: "ZWProductPage",
            type: "000D",
          },
          { text: "http://www.securetogether.eu/", name: "ProductPage" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "000D",
          },
          { text: "SES301", id: "0001", name: "Identifier", type: "000D" },
          { text: "Secure SES301 Temperature Sensor", name: "Name" },
          {
            text:
              "Z-wave Temperature sensor is a battery operated device which is able to measure temperature and deliver the information to associates device in a Z-Wave networks.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/676/xml",
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
