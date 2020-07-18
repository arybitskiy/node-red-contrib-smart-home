import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Multilevel Sensor Report Command",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              'The content of "Multilevel Sensor Report Command" after SEI receives "Multilevel Sensor Get Command".',
            Item: [
              { label: "Power", value: "0" },
              { label: "Voltage", value: "1" },
            ],
          },
          {
            type: "short",
            index: "2",
            genre: "config",
            label: "Make SEI blink",
            size: "2",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "\n\t  Configuration Value 1 is to Specify the time that SEI need blink (0-255), the unit is second;\n\t  Configuration Value 2 is to Specify the Cycle of on/off (0-255), the unit of it is 0.1 second.",
          },
          {
            type: "button",
            index: "100",
            genre: "config",
            label: "Default Group Reports",
            units: "",
            write_only: "true",
            affects: "101,102,103",
            Help: "Set report types for groups 1, 2 and 3 to default.",
          },
          {
            type: "int",
            index: "101",
            genre: "config",
            label: "Report type sent in Reporting Group 1",
            size: "4",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4(lsb) \n\t\t\tbits 7-4 reserved\n            bit 3 MRC(KWH)\n\t\t    bit 2 MRC(watt)\n\t\t    bit 1 MSRC\n\t\t    bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "int",
            index: "102",
            genre: "config",
            label: "Report type sent in Reporting Group 2",
            size: "4",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 2. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 lsb) \n\t        bits 7-4 reserved\n            bit 3 MRC(KWH)\n\t\t    bit 2 MRC(watt)\n\t\t    bit 1 MSRC\n\t\t    bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "int",
            index: "103",
            genre: "config",
            label: "Report type sent in Reporting Group 3",
            size: "4",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 3. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) \n\t\t\tbits 7-4 reserved\n            bit 3 MRC(KWH)\n\t\t    bit 2 MRC(watt)\n\t\t    bit 1 MSRC\n\t\t    bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "button",
            index: "110",
            genre: "config",
            label: "Set 111-113 to default",
            units: "",
            write_only: "true",
            value: "0",
            affects: "111,112,113",
            Help:
              "Set time interval for sending reports for groups 1, 2 and 3 to default.",
          },
          {
            type: "int",
            index: "111",
            genre: "config",
            label: "Send Interval for Reporting Group 1",
            units: "seconds",
            size: "4",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "Defines the time interval when the defined report for group 1 is sent.",
          },
          {
            type: "int",
            index: "112",
            genre: "config",
            label: "Send Interval for Reporting Group 2",
            units: "seconds",
            size: "4",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "Defines the time interval when the defined report for group 2 is sent.",
          },
          {
            type: "int",
            index: "113",
            genre: "config",
            label: "Send Interval for Reporting Group 3",
            units: "seconds",
            size: "4",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "Defines the time interval when the defined report for group 3 is sent.",
          },
          {
            type: "short",
            index: "254",
            genre: "config",
            label: "Device tag",
            units: "",
            min: "0",
            max: "65535",
            value: "0",
            Help: "Device tag.",
          },
          {
            type: "button",
            index: "255",
            genre: "config",
            label: "Reset device",
            units: "",
            write_only: "true",
            Help: "Reset to the default configuration.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "5", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
