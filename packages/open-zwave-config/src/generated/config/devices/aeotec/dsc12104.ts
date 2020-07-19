import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "short",
            index: "2",
            genre: "config",
            label: "Blinking behavior",
            units: "",
            min: "0",
            max: "65535",
            write_only: "true",
            value: "0",
            Help:
              "\n\tThis is actually a double byte value. The LSB defines the total time the device needs to blink in seconds. The MSB defines the on/off interval of the blink in tenths of seconds.\n      ",
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "Current Overload Protection",
            units: "",
            size: "1",
            value: "0",
            Help: "Current Overload Protection",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            index: "80",
            genre: "config",
            label: "Notification status",
            units: "",
            size: "1",
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
            type: "bool",
            index: "90",
            genre: "config",
            label: "Enable Wattage Reports",
            units: "",
            value: "0",
            Help: "\n\tEnable/disable Wattage threshold and percent.\n      ",
          },
          {
            type: "short",
            index: "91",
            genre: "config",
            label: "Wattage threshold",
            units: "watts",
            min: "0",
            max: "32000",
            value: "50",
            Help:
              "\n\tThe minimum change in wattage for a report to be sent.\n      ",
          },
          {
            type: "byte",
            index: "92",
            genre: "config",
            label: "Wattage threshold percent",
            units: "%",
            min: "0",
            max: "99",
            value: "10",
            Help:
              "\n\tMinimum change in percent of wattage to send a report.\n      ",
          },
          {
            type: "button",
            index: "100",
            genre: "config",
            label: "Default Group Reports",
            units: "",
            write_only: "true",
            value: "0",
            affects: "101,102,103",
            Help:
              "\n\tSet report types for groups 1, 2 and 3 to default. Reverts to 0\n\tafter set.\n      ",
          },
          {
            type: "int",
            index: "101",
            genre: "config",
            label: "Report type G1",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "int",
            index: "102",
            genre: "config",
            label: "Report type G2",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 2. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "int",
            index: "103",
            genre: "config",
            label: "Report type G3",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 3. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC(KWH)\n\t\t     bit 2 MRC(watt)\n\t\t     bit 1 MSRC\n\t\t     bit 0 reserved\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            type: "button",
            index: "110",
            genre: "config",
            label: "Default Group Time",
            units: "",
            write_only: "true",
            value: "0",
            affects: "111,112,113",
            Help:
              "\n\tSet time interval for sending reports for groups 1, 2 and 3 to default.\n      ",
          },
          {
            type: "int",
            index: "111",
            genre: "config",
            label: "Send interval G1",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 1 is sent.\n      ",
          },
          {
            type: "int",
            index: "112",
            genre: "config",
            label: "Send interval G2",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 2 is sent.\n      ",
          },
          {
            type: "int",
            index: "113",
            genre: "config",
            label: "Send interval G3",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "600",
            Help:
              "\n\tDefines the time interval when the defined report for group 3 is sent.\n      ",
          },
          {
            type: "list",
            index: "120",
            genre: "config",
            label: "Set External Switch/Button Control mode",
            units: "",
            size: "1",
            value: "1",
            Help: "Set External Switch/Button Control mode",
            Item: [
              { label: "Momentary button", value: "0" },
              { label: "2 state switch", value: "1" },
            ],
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
            value: "0",
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
