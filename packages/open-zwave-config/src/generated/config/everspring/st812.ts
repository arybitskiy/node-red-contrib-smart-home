import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:000B",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/st812.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/736/",
            id: "0001",
            name: "ZWProductPage",
            type: "000B",
          },
          { text: "Z-Wave Flood Sensor (US) 300 Series", name: "Description" },
          { text: "TST01-1", id: "0001", name: "Identifier", type: "000B" },
          { text: "Everspring TST01-1 Flood Detector", name: "Name" },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "000B",
          },
          { text: "http://www.everspring.com/ST812.aspx", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/217/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/585/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/736/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
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
            index: "1",
            label: "Basic Set Level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "\n\t\t\t\tDefines the level in the Basic Set event sent to group 2 when the sensor is triggered.  Default is 99 (full brightness for a Z-Wave dimmer). 0 disables.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "3" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
