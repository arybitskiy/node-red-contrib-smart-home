import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an157.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/895/",
            id: "0001",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "Malaysia / Hong Kong / U.S. / Canada / Mexico / U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe) / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "http://www.everspring.com/AN145.aspx",
            name: "ProductSupport",
          },
          { text: "http://www.everspring.com/AN145.aspx", name: "ProductPage" },
          {
            text:
              "he AN145-1 Screw-in On/OFF Module is a transceiver which is a Z-Wave TM enabled device and is fully compatiable with any Z-WAVE TM enabled network. The Plug type of AN145-1 is E26",
            name: "Description",
          },
          { text: "Lamp Holder", name: "Name" },
          {
            text: "AN145-1_Ever_0910",
            id: "0001",
            name: "Identifier",
            type: "0004",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/33/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/34/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/207/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/214/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/215/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/274/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/276/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/895/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
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
