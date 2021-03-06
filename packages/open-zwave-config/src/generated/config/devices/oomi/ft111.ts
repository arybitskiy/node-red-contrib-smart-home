import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/016A:006F:0103",
            name: "OzwInfoPage",
          },
          { text: "images/oomi/ft111.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2258/",
            id: "006F",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Oomi In-Wall Dimmer is a Z-Wave Smart Dimmer specifically used to enable Z-Wave command and control (on/off/dim) of any wall switches. It can report immediate wattage consumption or kWh energy usage over a period of time. In the event of power failure, non-volatile memory retains all programmed information relating to the unit’s operating status.\nIt can connect to 2 external manual switches to control the load ON/OFF independently. Its surface has a pin socket, which can be used for connecting to the touch panel, so you can also use the touch panel to control the Nano Dimmer.\nThe In-Wall Dimmer is also a security Z-Wave plus device and supports Over The Air (OTA) feature for the products firmware upgrade.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2765/Oomi In-Wall Dimmer manual (FT111-K) - 2.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "006F",
            name: "FrequencyName",
            type: "0103",
          },
          { text: "FT111-A", id: "006F", name: "Identifier", type: "0103" },
          { text: "In-Wall Dimmer", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/2273/",
            id: "006F",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "FT111-B", id: "006F", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "006F",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text: "https://products.z-wavealliance.org/products/2765/",
            id: "006F",
            name: "ZWProductPage",
            type: "1D03",
          },
          { text: "FT111-K", id: "006F", name: "Identifier", type: "1D03" },
          { text: "China", id: "006F", name: "FrequencyName", type: "1D03" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2258/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2273/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2765/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "3",
            label: "Over current protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Output Load will be turned off automatically after 30 seconds and if the current overrun 1.5A.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Over heat protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Output load will be closed after 30 seconds if the temperature inside the product exceeds 100C.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Status re-power on",
            size: "1",
            type: "list",
            value: "0",
            Help: "Configure the output load status after re-power on",
            Item: [
              { label: "The last status before the power outage", value: "0" },
              { label: "Always on", value: "1" },
              { label: "Always off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Notification report association group 1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help:
              "To set which notification would be sent to the associated nodes in association group 1 when the state of output load is changed",
            Item: [
              { label: "None", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
              { label: "Send Multilevel Switch report", value: "3" },
              {
                label:
                  "Send Hail CC when using the manual switch to change the load state",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Notification report using the external switch 1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "To set which notification would be sent to the associated nodes in association group 3 when using the external switch 1 to switch the loads",
            Item: [
              { label: "None", value: "0" },
              { label: "Basic", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "82",
            label: "Notification report using the external switch 2",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "To set which notification would be sent to the associated nodes in association group 4 when using the external switch 2 to switch the loads",
            Item: [
              { label: "None", value: "0" },
              { label: "Basic", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "85",
            label: "State appointment 1",
            type: "int",
            value: "2566920192",
            Help:
              "State appointment\n                Set the ON time of output load.\n                Value1 = 0, disable or = non zero, enable (day, bit0 - bit6 represent Mon to Sun).\n                Value2 = ON (hour)\n                Value3 = ON (minute)\n                Value4 = ON (brightness level)\n            ",
          },
          {
            genre: "config",
            index: "86",
            label: "State appointment 2",
            type: "int",
            value: "8960",
            Help:
              "State appointment\n                Set the ON time of output load.\n                Value1 = 0, disable or = non zero, enable (day, bit0 - bit6 represent Mon to Sun).\n                Value2 = ON (hour)\n                Value3 = ON (minute)\n                Value4 = ON (brightness level)\n            ",
          },
          {
            genre: "config",
            index: "90",
            label: "Enable/disable the parameter 91 and 92",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enables/disables parameter 91 and 92",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "91",
            label: "Minimum Change to send Report (Watt)",
            max: "6000",
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
            value: "0",
            Help:
              "\n                Defines the type of report sent for reporting group 1.\n                1 is meter report for voltage.\n                2 is meter report for current.\n                4 is meter report for watts.\n                8 is meter report for kilowatts.\n                Value 1 (msb) Reserved\n                Value 2 Reserved\n                Value 3 Reserved\n                Value 4 (lsb) bits 7-4 reserved\n                bit 3 current\n                bit 2 voltage\n                bit 1 watt\n                bit 0 kWh\n            ",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type sent in Reporting Group 2",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n                Defines the type of report sent for reporting group 2.\n                1 is meter report for voltage.\n                2 is meter report for current.\n                4 is meter report for watts.\n                8 is meter report for kilowatts.\n                Value 1 (msb) Reserved\n                Value 2 Reserved\n                Value 3 Reserved\n                Value 4 (lsb) bits 7-4 reserved\n                bit 3 current\n                bit 2 voltage\n                bit 1 watt\n                bit 0 kWh\n            ",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type sent in Reporting Group 3",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n                Defines the type of report sent for reporting group 3.\n                1 is meter report for voltage.\n                2 is meter report for current.\n                4 is meter report for watts.\n                8 is meter report for kilowatts.\n                Value 1 (msb) Reserved\n                Value 2 Reserved\n                Value 3 Reserved\n                Value 4 (lsb) bits 7-4 reserved\n                bit 3 current\n                bit 2 voltage\n                bit 1 watt\n                bit 0 kWh\n            ",
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
            max: "2147483647",
            min: "0",
            type: "int",
            units: "seconds",
            value: "3",
            Help:
              "Defines the time interval when the defined report for group 1 is sent.",
          },
          {
            genre: "config",
            index: "112",
            label: "Send Interval for Reporting Group 2",
            max: "2147483647",
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
            max: "2147483647",
            min: "0",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "Defines the time interval when the defined report for group 3 is sent.",
          },
          {
            genre: "config",
            index: "120",
            label: "Set the external switch mode for S1",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the mode is determined, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Momentary button", value: "3" },
              { label: "Enter automatic identification", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "121",
            label: "Set the external switch mode for S2",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the mode is determined, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Momentary button", value: "3" },
              { label: "Enter automatic identification", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "122",
            label: "Touch panel port state",
            max: "5",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Get the state of touch panel port",
            Item: [
              { label: "Not connected", value: "0" },
              { label: "Connected", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "123",
            label: "Control destination for external switch S1",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Set the control destination for external switch S1",
            Item: [
              { label: "Output loads of itself", value: "1" },
              { label: "Other nodes", value: "2" },
              { label: "Output loads of itself and other nodes", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "124",
            label: "Control destination for external switch S2",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Set the control destination for external switch S2",
            Item: [
              { label: "Output loads of itself", value: "1" },
              { label: "Other nodes", value: "2" },
              { label: "Output loads of itself and other nodes", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "125",
            label: "Default dimming rate",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "3",
            Help: "Set the default dimming rate",
          },
          {
            genre: "config",
            index: "128",
            label: "Current working mode",
            max: "2",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Get the current working mode",
            Item: [
              { label: "Unknown", value: "0" },
              { label: "2-wire mode", value: "1" },
              { label: "3-wire mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "129",
            label: "Dimming principle",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Set the dimming principle",
            Item: [
              { label: "Trailing edge mode", value: "0" },
              { label: "Leading edge mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "130",
            label: "Type of load",
            max: "3",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "To get what type of load the Dimmer is connected to",
            Item: [
              { label: "Unknown", value: "0" },
              { label: "Resistive load", value: "1" },
              { label: "Capacitive load", value: "2" },
              { label: "Inductive load", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "131",
            label: "Min brightness level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "20",
            Help: "Set the min brightness level that the load can reach to",
          },
          {
            genre: "config",
            index: "132",
            label: "Max brightness level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "95",
            Help: "Set the max brightness level that the load can reach to",
          },
          {
            genre: "config",
            index: "249",
            label: "Recognition way of load",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Set the recognition way of load",
            Item: [
              { label: "Never recognize the load when power on", value: "0" },
              { label: "Only recognize once when first power on", value: "1" },
              { label: "Recognize the load once power on", value: "2" },
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
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Retransmit", max_associations: "5" },
              { index: "3", label: "Control Key1", max_associations: "5" },
              { index: "4", label: "Control Key2", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
