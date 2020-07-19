import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0148:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/eurotronic/eur_stellaz.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/826/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Stella Z Thermostat", name: "Name" },
          { text: "Stella Z", id: "0001", name: "Identifier", type: "0001" },
          { text: "Radiator Controller", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/826/xml",
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
        id: "64",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            type: "list",
            Item: [
              { label: "Frost Protection", value: "0" },
              { label: "Comfort", value: "1" },
              { label: "Energy Saving", value: "11" },
              { label: "Direct Valve Control", value: "31" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Frost Protection" },
              { index: "1", label: "Comfort" },
              { index: "11", label: "Energy Saving" },
              { index: "31", label: "Direct Valve Control" },
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
            index: "0",
            instance: "1",
            label: "Frost protection setpoint",
            type: "decimal",
            units: "C",
          },
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Comfort setpoint",
            type: "decimal",
            units: "C",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy saving setpoint",
            type: "decimal",
            units: "C",
          },
        ],
        Compatibility: [{ Base: [0] }],
      },
    ],
  },
};

export default config;
