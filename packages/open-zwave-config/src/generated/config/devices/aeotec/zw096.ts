import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0060:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw096.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3093/",
            id: "0060",
            name: "ZWProductPage",
            type: "0103",
          },
          { text: "Smart Switch 6", name: "Name" },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Aeotec Smart Switch 6 is a low-cost Z-Wave Switch plug-in module specifically used to enable Z-Wave command and control (on/off) of any plug-in tool. It can report immediate wattage consumption or kWh energy usage over a period of time. In the event of power failure, non-volatile memory retains all programmed information relating to the unit’s operating status.\nIts surface has a Smart RGB LED, which can be used for indicating the output load status or strength of the wireless signal. You can configure its indication colour according to your favour.\nThe Plug is also a security Z-wave device and supports Over The Air (OTA) feature for the products firmware upgrade.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3119/Instructions - Aeon Labs Smart Switch 6 (2).pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0060",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          { text: "ZW096-A02", id: "0060", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/3119/",
            id: "0060",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text: "Australia / New Zealand",
            id: "0060",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "ZW096-B09", id: "0060", name: "Identifier", type: "0203" },
          {
            text: "https://products.z-wavealliance.org/products/3104/",
            id: "0060",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0060",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZW096-C16", id: "0060", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1312/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1331/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1425/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3093/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3104/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3119/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 8,
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
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Load will be closed when the Current overruns (US 15.5A, Others 16.2) for more than 2 minutes",
            Item: [
              { label: "Deactivate Overload Protection", value: "0" },
              { label: "Active Overload Protection (Default)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Output Load Status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Configure the output load status after re-power on.",
            Item: [
              { label: "Last status (Default)", value: "0" },
              { label: "Always on", value: "1" },
              { label: "Always off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "RGB Led Color for Testing",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Configure the RGB Led Color for Testing",
            Item: [
              { label: "Reserved", value: "1" },
              { label: "Red", value: "2" },
              { label: "Green", value: "3" },
              { label: "Blue", value: "4" },
            ],
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
              { label: "Nothing (Default)", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Configure the state of the LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Item: [
              {
                label:
                  "The LED will follow the status (on/off) of its load. (Default)",
                value: "0",
              },
              {
                label:
                  "When the state of the Switch changes, the LED will follow the status (on/off) of its load, but the LED will turn off after 5 seconds.",
                value: "1",
              },
              { label: "Night Light Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "83",
            label: "Night Light Color",
            max: "16777215",
            min: "0",
            read_only: "true",
            size: "4",
            type: "int",
            units: "",
            value: "14524637",
            Help:
              "Configure the RGB Value when in Night Light Mode.\n    \tByte 1: Red Color\n    \tByte 2: Green Color\n    \tByte 3: Blue Color\n    \t",
          },
          {
            genre: "config",
            index: "84",
            label: "RGB Brightness in Energy Mode",
            max: "16777215",
            min: "0",
            read_only: "true",
            size: "4",
            type: "int",
            units: "",
            value: "5263440",
            Help:
              "Configure the brightness level of RGB LED (0%-100%) when it is in Energy Mode/momentary indicate mode.\n    \tByte 1: Red Color\n    \tByte 2: Green Color\n    \tByte 3: Blue Color\n    \t",
          },
          {
            genre: "config",
            index: "90",
            label: "Enables/disables parameter 91/92",
            type: "bool",
            units: "",
            value: "0",
            Help: "\n\tEnable/disable Wattage threshold and percent.\n      ",
          },
          {
            genre: "config",
            index: "91",
            label: "Minimum Change to send Report (Watt)",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "25",
            Help:
              "The value represents the minimum change in wattage for a Report to be sent (default 25 W)",
          },
          {
            genre: "config",
            index: "92",
            label: "Minimum Change to send Report (%)",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "The value represents the minimum percentage change in wattage for a Report to be sent (Default 5)",
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
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 KWH\n\t\t     bit 2 Watt\n\t\t     bit 1 Current\n\t\t     bit 0 Voltage\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type sent in Reporting Group 2",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 KWH\n\t\t     bit 2 Watt\n\t\t     bit 1 Current\n\t\t     bit 0 Voltage\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type sent in Reporting Group 3",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n\tDefines the type of report sent for reporting group 1. 2 is multisensor report. 4 is meter report for watts. 8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n                     bit 3 KWH\n\t\t     bit 2 Watt\n\t\t     bit 1 Current\n\t\t     bit 0 Voltage\n      ",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Set 111 to 113 to default",
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
            max: "4294967295",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "3",
            Help:
              "\n\tDefines the time interval when the defined report for group 1 is sent.\n      ",
          },
          {
            genre: "config",
            index: "112",
            label: "Send Interval for Reporting Group 2",
            max: "4294967295",
            min: "0",
            size: "4",
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
            max: "4294967295",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "600",
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
            Help: "Partner ID",
            Item: [
              { label: "Aeon Labs Standard (Default)", value: "0" },
              { label: "Others", value: "1" },
            ],
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
            Help: "\n\tReset to the default configuration.\n      ",
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
