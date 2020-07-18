import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0007",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/st815.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/975/",
            id: "0001",
            name: "ZWProductPage",
            type: "0007",
          },
          { text: "Illumination Sensor", name: "Name" },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0007",
          },
          { text: "http://www.everspring.com/ST815.aspx", name: "ProductPage" },
          {
            text:
              "The Illumination Sensor is designed to monitor the current illumination of ambient environment. The reading of illumination can be reported to you on a regular base at your disposal. If illumination reaches set points, the sensor will send alerts to associated devices for further execution (such as trigger on connected lightings or remote curtain control). The Illumination Sensor is suitable for use in darkness and outdoor.",
            name: "Description",
          },
          { text: "ST815-2", id: "0001", name: "Identifier", type: "0007" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/210/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/975/xml",
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
          {
            genre: "config",
            index: "2",
            label: "Lux On Trigger",
            max: "1000",
            min: "0",
            type: "short",
            units: "LUX",
            value: "300",
            Help:
              "\n\t\t\t\tLux level to trigger when a ON command is sent out. 0 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Lux Off Trigger",
            max: "1000",
            min: "0",
            type: "short",
            units: "LUX",
            value: "500",
            Help:
              "\n\t\t\t\tLux level to trigger when an OFF command is sent out. 0 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Lux Timer Off Trigger",
            max: "480",
            min: "1",
            type: "short",
            units: "minutes",
            value: "240",
            Help:
              "\n\t\t\t\tSet Lux timer trigger to send an OFF command. 0 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Auto Report Time",
            max: "1439",
            min: "0",
            type: "short",
            units: "minutes",
            value: "0",
            Help:
              "\n\t\t\t\tSets the auto report time interval. 0 disables.\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Auto Report Lux",
            max: "1000",
            min: "30",
            type: "short",
            units: "LUX",
            value: "0",
            Help:
              "\n\t\t\t\tSets the auto report Lux interval. 0 disabled.\n\t\t\t",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
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
    ],
  },
};

export default config;
