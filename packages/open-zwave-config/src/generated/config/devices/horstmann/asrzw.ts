import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/asrzw.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/126/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "http://www.securetogether.eu/", name: "ProductPage" },
          { text: "SSR301", id: "0001", name: "Identifier", type: "0003" },
          { text: "Secure SSR301 1ch Zwave Relay box (Rx)", name: "Name" },
          {
            text:
              "ASR-RF is a mains powered receiver for connecting where a mains supply is readily available.AS2-RF thermostat transmits via Z Wave mesh radio technology and is capable of operation in most domestic houses with an operating range of approximately 30 metres. Ideal for controlling combi boilers, it can be mounted in any suitable location without the need to disturb existing wiring or décor. Operates from 3 standard AA batteries, with 2 years+ life and separate clock battery.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/125/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/126/xml",
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
      {
        id: "64",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "37",
                Index: "0",
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
