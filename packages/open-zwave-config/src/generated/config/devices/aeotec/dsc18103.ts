import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0012:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc18103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/775/",
            id: "0012",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "0012",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Micro Smart Energy Switch G2", name: "Name" },
          {
            text:
              "It has long been thought that a house becomes a home when we make it reflect who we are, when we personalise it, when we fill it with objects we treasure. And all of that remains true, but it no longer needs to be just the objects we put in our home that personalises it. Like the music that gently fills the background of your favourite restaurant, Aeotec’s Micro Switches create the perfect ambiance for your home, and then some. They also give you the perfect control and the perfect, intelligent automation. \n\nAcross three different Micro controllers, each one letting you perfect everything from your home’s lights to its appliances and to its motorised doors and curtains, you’ll find that the same magic has been built right into the tiny body of each switch.",
            name: "Description",
          },
          {
            text: "DSC18103-ZWAU",
            id: "0012",
            name: "Identifier",
            type: "0003",
          },
          {
            text: "http://aeotec.com/z-wave-in-wall-switches",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/708/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/767/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/775/xml",
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
            index: "1",
            label: "Report type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the contents of Multilevel Sensor Report after Multilevel Sensor Get received.\n      ",
            Item: [
              { label: "Power", value: "0" },
              { label: "Voltage", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Blinking behavior",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tThis is actually a double byte value. The LSB defines the total time the device needs to blink in seconds. The MSB defines the on/off interval of the blink in tenths of seconds.\n      ",
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\tEnables automatic notifications to associated devices whenever there is a state change.\n      ",
            Item: [
              { label: "None", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "90",
            label: "Enable Wattage Reports",
            type: "bool",
            units: "",
            value: "0",
            Help: "\n\tEnable/disable Wattage threshold and percent.\n      ",
          },
          {
            genre: "config",
            index: "91",
            label: "Wattage threshold",
            max: "32000",
            min: "0",
            type: "short",
            units: "watts",
            value: "50",
            Help:
              "\n\tThe minimum change in wattage for a report to be sent.\n      ",
          },
          {
            genre: "config",
            index: "92",
            label: "Wattage threshold percent",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tMinimum change in percent of wattage to send a report.\n      ",
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Default Group Reports",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tSet report types for groups 1, 2 and 3 to default. Reverts to 0\n\tafter set.\n      ",
          },
          {
            genre: "config",
            index: "101",
            label: "Report type G1",
            type: "int",
            units: "",
            value: "8",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type G2",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 2. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type G3",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 3. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Default Group Time",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tSet time interval for sending reports for groups 1, 2 and 3 to default.\n      ",
          },
          {
            genre: "config",
            index: "111",
            label: "Send interval G1",
            max: "65535",
            min: "0",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 1 is sent.\n      ",
          },
          {
            genre: "config",
            index: "112",
            label: "Send interval G2",
            max: "65535",
            min: "0",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 2 is sent.\n      ",
          },
          {
            genre: "config",
            index: "113",
            label: "Send interval G3",
            max: "65535",
            min: "0",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 3 is sent.\n      ",
          },
          {
            genre: "config",
            index: "254",
            label: "Device tag",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "\n\tDevice tag.\n      ",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset device",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help: "\n\tReset to the default configuration.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
