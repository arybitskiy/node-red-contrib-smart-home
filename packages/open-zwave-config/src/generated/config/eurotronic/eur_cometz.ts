import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0148:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/eurotronic/eur_cometz.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2202/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "LIZY001", id: "0001", name: "Identifier", type: "0002" },
          { text: "Comap LIZY001", name: "Description" },
          { text: "LIZY001", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1601/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2200/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2201/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2202/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "11",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Heat Econ", value: "11" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "11", label: "Heat Econ" },
            ],
          },
        ],
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Comfort setpoint",
            type: "decimal",
            units: "C",
            value: "0",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy saving setpoint",
            type: "decimal",
            units: "C",
            value: "0",
          },
        ],
        Compatibility: [{ Base: [0] }],
      },
    ],
  },
};

export default config;
