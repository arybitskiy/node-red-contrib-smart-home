import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:020C:0213",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/wv01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/178/",
            id: "020C",
            name: "ZWProductPage",
            type: "0213",
          },
          { text: "WV-01_1002", id: "020C", name: "Identifier", type: "0213" },
          {
            text:
              "Professional grade, electrically operated water shutoff valve that is Z-Wave Wireless compatible",
            name: "Description",
          },
          { text: "FortrezZ Wireless Water Valve", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "020C",
            name: "FrequencyName",
            type: "0213",
          },
          { text: "http://www.fortrezz.com/wv01.html", name: "ProductPage" },
          { text: "http://www.fortrezz.com/", name: "ProductSupport" },
          {
            text: "https://products.z-wavealliance.org/products/818/",
            id: "0216",
            name: "ZWProductPage",
            type: "0243",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0216",
            name: "FrequencyName",
            type: "0243",
          },
          {
            text: "Wireless Water Valve",
            id: "0216",
            name: "Identifier",
            type: "0243",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/178/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/817/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/818/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "0",
            label: "Mode",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Water Alarm", value: "0" },
              { label: "Water Level", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Water Level timeout",
            max: "32767",
            min: "0",
            type: "short",
            units: "minutes",
            value: "60",
            Help: "",
          },
        ],
      },
    ],
  },
};

export default config;
