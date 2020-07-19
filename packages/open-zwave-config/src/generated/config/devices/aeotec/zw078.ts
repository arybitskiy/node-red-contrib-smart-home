import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:004E:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw078.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1133/",
            id: "004E",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1142/Heavy Duty Smart Switch Gen5 Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Aeon Labs Heavy Duty Smart Switch is a Z-Wave device that can report the wattage energy usage and KWH usage to a Z-Wave Controller (especially a gateway), it can be controlled by other Z-Wave devices to turn on/off loads, it can bear up to 40A current of resister loads. It also acts as a repeater that forward Z-Wave command messages to destination nodes if the originating controller is out of range from the destination node.\nBy taking advantage of the Z-Wave mesh network, commands can be routed to their destination via intermediary “listening” Z-Wave products. Products that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.",
            name: "Description",
          },
          { text: "Heavy Duty Smart Switch Gen5", name: "Name" },
          { text: "ZW078-A", id: "004E", name: "Identifier", type: "0103" },
          {
            text: "U.S. / Canada / Mexico",
            id: "004E",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1089/",
            id: "004E",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "ZW078-B", id: "004E", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "004E",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text: "https://products.z-wavealliance.org/products/1142/",
            id: "004E",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "004E",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZW078-C", id: "004E", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/998/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1089/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1133/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1142/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
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
            Help: "Enable/disable Wattage threshold and percent.",
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
            Help: "The minimum change in wattage for a report to be sent.",
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
            Help: "Minimum change in percent of wattage to send a report.",
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
            label: "Default Group Time",
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
            label: "Send interval G1",
            max: "65535",
            min: "0",
            type: "int",
            units: "seconds",
            value: "5",
            Help:
              "Defines the time interval when the defined report for group 1 is sent.",
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
              "Defines the time interval when the defined report for group 2 is sent.",
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
