import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:000A:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc10.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/704/",
            id: "000A",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Heavy-Duty Smart Energy Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "000A",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "http://aeotec.com/z-wave-plug-in-switch/1014-high-power-z-wave-switch.html",
            name: "ProductPage",
          },
          { text: "DSC10-ZWUS", id: "000A", name: "Identifier", type: "0003" },
          {
            text:
              "Control, automate and record the electricity consumption of a premise’s heavy-duty appliances. Works in and outdoors with appliances up to 30 amps.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/704/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    Protocol: [{ refreshonnodeinfoframe: "false" }],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "3",
            label: "Current Overload Protection",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n      Current Overload Protection. Load will be closed when\n      the Current more than 39.5A and the time more than 5\n      seconds\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "LED Mode",
            size: "1",
            type: "list",
            value: "0",
            Help: "LED status after power on",
            Item: [
              { label: "Last Status", value: "0" },
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
            ],
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
            value: "1",
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
            value: "4",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC (KWH)\n\t\t     bit 2 MRC (watt)\n\t\t     bit 1 MSRC (Current)\n\t\t     bit 0 MRC (Voltage)\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type G2",
            type: "int",
            units: "",
            value: "8",
            Help:
              "\n\tDefines the type of report sent for reporting group 2. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC (KWH)\n\t\t     bit 2 MRC (watt)\n\t\t     bit 1 MSRC (Current)\n\t\t     bit 0 MRC (Voltage)\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type G3",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 3. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 MRC (KWH)\n\t\t     bit 2 MRC (watt)\n\t\t     bit 1 MSRC (Current)\n\t\t     bit 0 MRC (Voltage)\n\n\tThe MRC(KWH) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(KWh) automatically.\n\n\tThe MRC(Watt) flag signals that Report Group 1 send(1) or don't send(0)\n\tMeter Report Command(wattage) automatically.\n\n\tThe MSRC flag signals that Report Group 1 send(1) or don't send(0)\n\tMultilevel Sensor Report Command(wattage) automatically.\n      ",
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
            value: "5",
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
            value: "120",
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
            value: "120",
            Help:
              "\n\tDefines the time interval when the defined report for group 3 is sent.\n      ",
          },
          {
            genre: "config",
            index: "200",
            label: "Partner ID",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Item: [
              { label: "Aeon Labs Standard Product", value: "0" },
              { label: "Other", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
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
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                index: "2",
                label: "Retransmit Switch CC",
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
