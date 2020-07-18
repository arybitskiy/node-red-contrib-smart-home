import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:000C",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/se812.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/735/",
            id: "0001",
            name: "ZWProductPage",
            type: "000C",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "000C",
          },
          {
            text: "http://www.everspring.com/SE812.aspx",
            name: "ProductSupport",
          },
          { text: "TSE07-1", id: "0001", name: "Identifier", type: "000C" },
          { text: "Everspring TSE07-1 Indoor Siren", name: "Name" },
          { text: "http://www.everspring.com/SE812.aspx", name: "ProductPage" },
          { text: "Z-WAVE INDOOR SIREN (US)  300 SERIES", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/273/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/584/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/616/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/735/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
