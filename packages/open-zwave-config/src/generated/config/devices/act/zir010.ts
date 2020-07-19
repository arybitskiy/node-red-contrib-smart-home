import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3330:4952",
            name: "OzwInfoPage",
          },
          { text: "images/act/zir010.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/549/",
            id: "3330",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3330",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          { text: "ZIR000", name: "Name" },
          { text: "PIR Sensor", name: "Description" },
          {
            text: "https://products.z-wavealliance.org/products/550/",
            id: "3030",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3030",
            name: "FrequencyName",
            type: "4952",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/549/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/550/xml",
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
            index: "17",
            label: "Mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThe ZIR010 can be configured to operate in 1 of 3 modes.\n\t\t\t\tThose modes are:\n\t\t\t\tLighting Mode (factory default)\n\t\t\t\tAlarm Mode\n\t\t\t\tSensor Mode\n\t\t\t\tTo change the mode of operation:\n\t\t\t\tFor Lighting Mode: Send a value of 0 to Configuration Parameter #17.\n\t\t\t\tFor Alarm Mode: Send a value of 1 to Configuration Parameter #17.\n\t\t\t\tFor Sensor Mode: Send a value of 2 to Configuration Parameter # 17.\n\t\t\t",
            Item: [
              { label: "Lighting", value: "0" },
              { label: "Alarm", value: "1" },
              { label: "Sensor", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "18",
            label: "Off/Idle Delay",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "1",
            Help:
              "\n\t\t\t\tThe configuration parameter that can be used to adjust the amount of delay before the OFF or IDLE command is transmitted is Configuration Parameter # 18.\n\t\t\t\tThis parameter can be configured with the value of 0 through 255.\n\t\t\t\tWhere 0 means no delay and 255 means 255 minutes of delay.\n\t\t\t\tDefault appears to be 1 min.\n\t\t\t",
          },
          {
            genre: "config",
            index: "19",
            label: "Unsolicited Commands",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tThe ZIR010 can be disabled from sending commands unsolicited without removing associated devices by\n\t\t\t\tsetting Configuration Parameter # 19 to 0 (when asked for number of bytes, select 1).\n\t\t\t\tSetting it back to 1 will re-enable the ZIR010.\n\t\t\t",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Awake Time",
            max: "45",
            min: "15",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "\n\t\t\t\tThe time the ZIR010 stays awake can be adjusted from 15 seconds to 45 seconds by sending a value of 15\n\t\t\t\tto 45 to the ZIR010 using Configuration Parameter # 22 (when asked for the number of bytes, select 1).\n\t\t\t\tThis awake time period starts over every time the ZIR010 receives a command or request.\n\t\t\t\tDefaults to 30 seconds.\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Motion", max_associations: "5" },
              {
                auto: "true",
                index: "2",
                label: "Tamper",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "3",
                label: "Battery",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
