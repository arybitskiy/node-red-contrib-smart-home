import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:004B:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw075.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1045/",
            id: "004B",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "004B",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Smart Switch Gen5", name: "Name" },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Aeon Labs Smart Switch Gen5 is a Z-Wave device that can report the wattage energy usage and KWH usage to a Z-Wave Controller (especially a gateway), it can be controlled by other Z-Wave devices to turn on/off loads, it can bear up to 16A current of resistive loads. It also acts as a repeater that forwards Z-Wave command messages to destination nodes if the originating controller is out of range from the destination node.\nBy taking advantage of the Z-Wave mesh network, commands can be routed to their destination via intermediary “listening” Z-Wave products. Products that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.\nAlso a tool that can be programmed, scheduled, controlled and communicated with from anywhere in the world.",
            name: "Description",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          { text: "ZW075-C16", id: "004B", name: "Identifier", type: "0003" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1056/Aeon Labs Smart Switch Gen5_Update 2.pdf",
            name: "ProductManual",
          },
          {
            text: "https://products.z-wavealliance.org/products/1053/",
            id: "004B",
            name: "ZWProductPage",
            type: "0103",
          },
          { text: "ZW075-A02", id: "004B", name: "Identifier", type: "0103" },
          {
            text: "U.S. / Canada / Mexico",
            id: "004B",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text: "https://products.z-wavealliance.org/products/1056/",
            id: "004B",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text: "Australia / New Zealand",
            id: "004B",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "ZW075-B09", id: "004B", name: "Identifier", type: "0203" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1045/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1053/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1056/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
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
            index: "2",
            label: "Blinking behavior",
            max: "65535",
            min: "257",
            size: "2",
            type: "short",
            units: "",
            value: "3850",
            Help:
              "\n      Configuration Value 1: 1-255\n      Configuration Value 1  is to Specify the time that Smart Switch need blink, The unit is Second;\n      Configuration Value 2: 1-255\n      Configuration Value 2  is to Specify the Cycle of on/off, the unit of it is 0.1 second.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Current Overload Protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Load will be closed when the Current overruns (EU 16.2A) for more than 2 minutes",
            Item: [
              { label: "Deactivate Overload Protection (Default)", value: "0" },
              { label: "Active Overload Protection", value: "1" },
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
            ],
          },
          {
            genre: "config",
            index: "90",
            label: "Enables/disables parameter 91/92",
            type: "bool",
            units: "",
            value: "0",
            Help: "Enable/disable Wattage threshold and percent.",
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
            Help: "Set report types for groups 1, 2 and 3 to default.",
          },
          {
            genre: "config",
            index: "101",
            label: "Report type sent in Reporting Group 1",
            type: "int",
            units: "",
            value: "4",
            Help:
              "\n          Defines the type of report sent for reporting group 1.\n          1 is meter report for voltage.\n          2 is meter report for current.\n          4 is meter report for watts.\n          8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n          bit 3 kWh\n          bit 2 watt\n          bit 1 current\n          bit 0 voltage\n      ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type sent in Reporting Group 2",
            type: "int",
            units: "",
            value: "8",
            Help:
              "\n          Defines the type of report sent for reporting group 2.\n          1 is meter report for voltage.\n          2 is meter report for current.\n          4 is meter report for watts.\n          8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n          bit 3 kWh\n          bit 2 watt\n          bit 1 current\n          bit 0 voltage\n      ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type sent in Reporting Group 3",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n          Defines the type of report sent for reporting group 3.\n          1 is meter report for voltage.\n          2 is meter report for current.\n          4 is meter report for watts.\n          8 is meter report for kilowatts.\n\t Value 1 (msb) Reserved\n\t Value 2 Reserved\n\t Value 3 Reserved\n\t Value 4 (lsb) bits 7-4 reserved\n          bit 3 kWh\n          bit 2 watt\n          bit 1 current\n          bit 0 voltage\n      ",
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
              "Set time interval for sending reports for groups 1, 2 and 3 to default.",
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
              "Defines the time interval when the defined report for group 1 is sent.",
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
              "Defines the time interval when the defined report for group 2 is sent.",
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
              "Defines the time interval when the defined report for group 3 is sent.",
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
              { label: "AT&T", value: "1" },
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
            Help: "Device tag.",
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
