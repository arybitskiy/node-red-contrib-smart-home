import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 9,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/lptdm1u.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1140/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "CEPT (Europe) / Hong Kong / U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe) / Russia / U.S. / Canada / Mexico / U.S. / Canada / Mexico / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "AD145-1/ Everspring", name: "Name" },
          {
            text:
              "The AD145 is a lamp holder to receive the Command from the Controller or Routing Slave and through Controller or Routing Slave controls the ON/OFF status of the plug-in lighting fixtures, of which power loading cannot exceed 20W.",
            name: "Description",
          },
          { text: "AD145-1", id: "0001", name: "Identifier", type: "0003" },
          { text: "http://www.everspring.com/AD142.aspx", name: "ProductPage" },
          {
            text: "http://www.everspring.com/AD126.aspx",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/30/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/32/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/208/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/275/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/277/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/870/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/978/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/992/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1140/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 9,
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
