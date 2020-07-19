import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0000:0007",
            name: "OzwInfoPage",
          },
          {
            text: "images/assa_abloy/KeyfreeConnected.png",
            name: "ProductPic",
          },
          {
            text: "https://products.z-wavealliance.org/products/1399/",
            id: "0000",
            name: "ZWProductPage",
            type: "0007",
          },
          { text: "Yale Keyless Connected YD-01-CON", name: "Name" },
          {
            text: "Keyless Connected with Z-Wave for Rim locks",
            name: "Description",
          },
          { text: "YD-01-CON", id: "0000", name: "Identifier", type: "0007" },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "0007",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1399/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
