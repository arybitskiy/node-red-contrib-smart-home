import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0111:0513",
            name: "OzwInfoPage",
          },
          {
            text: "images/fortrezz/gdc1_fortrezz_1501.png",
            name: "ProductPic",
          },
          {
            text: "https://products.z-wavealliance.org/products/1242/",
            id: "0111",
            name: "ZWProductPage",
            type: "0513",
          },
          {
            text: "GDC1_FortrezZ_1501",
            id: "0111",
            name: "Identifier",
            type: "0513",
          },
          { text: "FortrezZ GDC1", name: "Name" },
          {
            text:
              "The GDC1 Module is an interface / bridge / siren strobe combination module with On/Off Switch outputs.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0111",
            name: "FrequencyName",
            type: "0513",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1242/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
