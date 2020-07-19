import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0145:0004:0001",
            name: "OzwInfoPage",
          },
          { text: "images/buffalo/hw-100v15a-zw.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/802/",
            id: "0004",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "Buffalo HW-100V15A-ZW", name: "Name" },
          {
            text: "Smat Tap 100V/15A measure & monitor power",
            name: "Description",
          },
          { text: "Japan", id: "0004", name: "FrequencyName", type: "0001" },
          {
            text: "HW-100V15A-ZW",
            id: "0004",
            name: "Identifier",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/802/xml",
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
