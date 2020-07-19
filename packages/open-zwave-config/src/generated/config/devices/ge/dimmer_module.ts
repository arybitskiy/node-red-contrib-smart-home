import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3030:4450",
            name: "OzwInfoPage",
          },
          { text: "images/ge/dimmer_module.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1209/",
            id: "3030",
            name: "ZWProductPage",
            type: "4450",
          },
          { text: "http://www.ezzwave.com", name: "ProductPage" },
          {
            text: "45702/ZW3103",
            id: "3030",
            name: "Identifier",
            type: "4450",
          },
          {
            text:
              "http://nexiahome.com/SupportCenter/Pages/supportcenter.aspx?page=suppor",
            name: "ProductSupport",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3030",
            name: "FrequencyName",
            type: "4450",
          },
          { text: "RF controlled, plug-in dimmer", name: "Description" },
          { text: "Jasco lamp module 45702", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/1191/",
            id: "3031",
            name: "ZWProductPage",
            type: "5044",
          },
          {
            text: "12718/ZW3101",
            id: "3031",
            name: "Identifier",
            type: "5044",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3031",
            name: "FrequencyName",
            type: "5044",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/672/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/726/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/888/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1191/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1209/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
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
            index: "29",
            label: "Load Sensing",
            size: "1",
            type: "list",
            value: "0",
            Help: "Turn on the module when the attached load is connected",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            type: "list",
            value: "1",
            Help: "This dimmer will start dimming from its current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "On/Off Command Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "8",
            label: "On/Off Command Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "9",
            label: "Local Control Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "10",
            label: "Local Control Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "11",
            label: "ALL ON/ALL OFF Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "12",
            label: "ALL ON/ALL OFF Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
        ],
      },
    ],
  },
};

export default config;
