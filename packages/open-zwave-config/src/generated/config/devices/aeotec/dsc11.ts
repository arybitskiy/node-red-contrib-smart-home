import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:000B:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc11.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1015/",
            id: "000B",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Aeon Labs Smart Strip DSC11-ZWUS", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "000B",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "DSC11-ZWUS", id: "000B", name: "Identifier", type: "0003" },
          { text: "Smart Strip", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1015/xml",
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
            index: "4",
            label: "Report threshold",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Enable selective reporting only when power change reaches a certain threshold or percentage set in 4.11 below.\n\t  This is used to reduce network traffic.",
            Item: [
              { label: "Disable,", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Whole Smart Strip Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Whole Smart Strip).",
          },
          {
            genre: "config",
            index: "6",
            label: "Socket 1 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 1).",
          },
          {
            genre: "config",
            index: "7",
            label: "Socket 2 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 2).",
          },
          {
            genre: "config",
            index: "8",
            label: "Socket 3 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 3).",
          },
          {
            genre: "config",
            index: "9",
            label: "Socket 4 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 4).",
          },
          {
            genre: "config",
            index: "10",
            label: "Socket 5 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 5).",
          },
          {
            genre: "config",
            index: "11",
            label: "Socket 6 Minimum Change to send Report (Watt) ",
            max: "60000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "Threshold change in wattage to induce an automatic report (Socket 6).",
          },
          {
            genre: "config",
            index: "12",
            label: "Whole Smart Strip Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Whole Smart Strip).",
          },
          {
            genre: "config",
            index: "13",
            label: "Socket 1 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 1).",
          },
          {
            genre: "config",
            index: "14",
            label: "Socket 2 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 2).",
          },
          {
            genre: "config",
            index: "15",
            label: "Socket 3 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 3).",
          },
          {
            genre: "config",
            index: "16",
            label: "Socket 4 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 4).",
          },
          {
            genre: "config",
            index: "17",
            label: "Socket 5 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 5).",
          },
          {
            genre: "config",
            index: "18",
            label: "Socket 6 Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "Percentage change in wattage to induce an automatic report (Socket 6).",
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Defines the automated status notification of an associated device when status changes",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "90",
            label: "Temperature of Smart Strip",
            read_only: "true",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help: "Get temperature of Smart Strip",
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Default Group Reports",
            type: "button",
            units: "",
            write_only: "true",
            Help:
              "\n\tSet report types for groups 1, 2 and 3 to default.\n      ",
          },
          {
            genre: "config",
            index: "101",
            label: "Report type sent in Reporting Group 1",
            size: "4",
            type: "int",
            units: "",
            value: "0",
            Help:
              "Configure auto report which information as Group 1.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power level with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power level with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power level with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power level with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power level with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power level with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power level with specified time interval\n\tValue 4 (lsb) \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power consumption with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power consumption with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power consumption with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power consumption with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power consumption with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power consumption with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power consumption with specified time interval\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type sent in Reporting Group 2",
            size: "4",
            type: "int",
            units: "",
            value: "0",
            Help:
              "Configure auto report which information as Group 2.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power level with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power level with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power level with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power level with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power level with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power level with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power level with specified time interval\n\tValue 4 (lsb) \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power consumption with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power consumption with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power consumption with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power consumption with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power consumption with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power consumption with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power consumption with specified time interval\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type sent in Reporting Group 3",
            size: "4",
            type: "int",
            units: "",
            value: "0",
            Help:
              "Configure auto report which information as Group 3.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power level with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power level with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power level with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power level with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power level with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power level with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power level with specified time interval\n\tValue 4 (lsb) \n\t\t\tbit 7 reserved\n\t\t\tbit 6 Auto report power consumption with specified time interval (channel 6)\n\t\t\tbit 5 Auto report power consumption with specified time interval (channel 5)\n\t\t\tbit 4 Auto report power consumption with specified time interval (channel 4)\n\t\t\tbit 3 Auto report power consumption with specified time interval (channel 3)\n\t\t\tbit 2 Auto report power consumption with specified time interval (channel 2)\n\t\t\tbit 1 Auto report power consumption with specified time interval (channel 1)\n\t\t\tbit 0 Auto report the total power consumption with specified time interval\n      ",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Set 111-113 to default",
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
            label: "Send Interval for Reporting Group 1",
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
            label: "Send Interval for Reporting Group 2",
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
            label: "Send Interval for Reporting Group 3",
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
            index: "252",
            label: "Configuration Locked",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/disable Configuration Locked",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "253",
            label: "Enter Meter Calibration Mode",
            max: "1",
            min: "0",
            size: "4",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Enter Meter Calibration Mode",
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
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;