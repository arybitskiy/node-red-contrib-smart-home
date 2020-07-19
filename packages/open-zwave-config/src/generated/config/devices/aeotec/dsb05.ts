import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0005:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb05.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/771/",
            id: "0005",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "DSB05-ZWAU", id: "0005", name: "Identifier", type: "0002" },
          { text: "Multisensor", name: "Name" },
          {
            text:
              "Never before has one device made a single corner of your room so smart. Never before has it done it inside. Never before has it done it outside. And never before has it brought all that intelligence to your Z-Wave network. \n\nThe Aeotec by Aeon Labs MultiSensor looks like a motion sensor and acts like one too. But it’s also so much more. Placing this one piece of Z-Wave technology either in the corner of a room or outside is the same as placing 4 pieces of Z-Wave technology. But those 4 pieces of technology, those 4 pieces of intelligence that you can bring to your Z-Wave network, all live within a single, stunning sensor.",
            name: "Description",
          },
          { text: "http://aeotec.com/z-wave-sensor", name: "ProductPage" },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "0005",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/710/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/763/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/771/xml",
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
            index: "2",
            label: "Wake up 10 minutes when batteries are inserted",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Stay awake for 10 minutes after batteries are inserted",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "On time",
            max: "15300",
            min: "1",
            type: "short",
            units: "seconds",
            value: "240",
            Help:
              "How long should the device associated to multi sensor keep state On before sending it Off command (if the value is bigger than 255, the value would be rounded to next integer in minutes)",
          },
          {
            genre: "config",
            index: "4",
            label: "Enable Motion Sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable Motion Sensor",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Command Options",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Which commands to send when PIR motion sensor triggered",
            Item: [
              { label: "Basic Set (default)", value: "1" },
              { label: "Binary Sensor Report", value: "2" },
            ],
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Reset #101-103",
            type: "int",
            value: "0",
            write_only: "true",
            Help:
              "Reset to default parameters number 101-103. Any value other then 0 will initiate this reset.",
          },
          {
            genre: "config",
            index: "101",
            label: "Group 1 Reports",
            type: "int",
            units: "",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 1. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            genre: "config",
            index: "102",
            label: "Group 2 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 2. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            genre: "config",
            index: "103",
            label: "Group 3 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 3. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Reset #111-113",
            type: "int",
            value: "0",
            write_only: "true",
            Help:
              "Reset to default parameters number 111-113. Any value other then 0 will initiate this reset.",
          },
          {
            genre: "config",
            index: "111",
            label: "Group 1 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "720",
            Help:
              "The interval of sending report group 1. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "112",
            label: "Group 2 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "720",
            Help:
              "The interval of sending report group 2. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "113",
            label: "Group 3 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "720",
            Help:
              "The interval of sending report group 3. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset to default",
            type: "button",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults.",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "4" }],
          },
        ],
      },
    ],
  },
};

export default config;
