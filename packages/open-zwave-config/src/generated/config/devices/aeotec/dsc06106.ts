import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0006:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc06106.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/133/",
            id: "0006",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0006",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Smart Energy SwitchThe Aeon Labs Smart Energy Switch is a low-cost Z-Wave appliance switch which can report immediate wattage energy usage or kWh energy usage over a period of time. It can also be controlled by other Z-Wave devices to turn on/off to save electricity when appropriate.\n\nWith an unobtrusive small form factor, the Aeon Labs Smart Energy Switch will not block other nearby Ac outlets. It is available in both matte white and matte black colors..",
            name: "Description",
          },
          {
            text: "http://www.aeon-labs.com/site/support/",
            name: "ProductSupport",
          },
          {
            text: "DSB06xxx-ZWUS",
            id: "0006",
            name: "Identifier",
            type: "0003",
          },
          {
            text: "http://www.aeon-labs.com/site/products/view/5/",
            name: "ProductPage",
          },
          { text: "Aeon Labs Smart Energy Switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/133/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
