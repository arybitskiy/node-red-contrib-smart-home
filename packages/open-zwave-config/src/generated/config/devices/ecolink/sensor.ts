import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/sensor.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/791/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "PIRZWAVE1", id: "0001", name: "Identifier", type: "0001" },
          { text: "Ecolink Motion Sensor", name: "Name" },
          {
            text:
              "The PIR Motion Sensor transmits to a Z-Wave gateway/controller when it detects movement within its field of view.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/791/xml",
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
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "991",
            instance: "1",
            label: "Fault restore",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/Disable Basic Sets of 0x00 on a fault restore to nodes in Group 2",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
