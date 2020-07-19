import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0074:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw116.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2208/",
            id: "0074",
            name: "ZWProductPage",
            type: "0103",
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
          { text: "Nano Switch", name: "Name" },
          { text: "ZW116-A", id: "0074", name: "Identifier", type: "0103" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2289/Nano Switch manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0074",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Aeotec Nano Switch is a Z-Wave Smart Switch specifically used to enable Z-Wave command and control (on/off) of any wall switches. It can report immediate wattage consumption or kWh energy usage over a period of time. In the event of power failure, non-volatile memory retains all programmed information relating to the unit’s operating status.\nIt can connect to 2 external manual switches to control the load ON/OFF independently. Its surface has a pin socket, which can be used for connecting to the touch panel, so you can also use the touch panel to control the Dual Nano Switch.\nThe Nano Switch is also a security Z-Wave device and supports Over The Air (OTA) feature for the products firmware upgrade.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/2288/",
            id: "0074",
            name: "ZWProductPage",
            type: "0203",
          },
          { text: "ZW116-B", id: "0074", name: "Identifier", type: "0203" },
          {
            text: "Australia / New Zealand",
            id: "0074",
            name: "FrequencyName",
            type: "0203",
          },
          {
            text: "https://products.z-wavealliance.org/products/2289/",
            id: "0074",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "ZW116-C", id: "0074", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "0074",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2208/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2288/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2289/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
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
              "Output load will be closed after 30 seconds if the current exceeds (US: 15.5A, AU or EU: 10.5A).",
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
            index: "21",
            label: "WallSwipe IR sensor",
            type: "int",
            value: "80",
            Help:
              "\n\t\t\t\tEnable/disable the IR sensor of WallSwipe.\n\t\t\t\t(LSB) Value 1.\n\t\t\t\tValue 1 = 0, disable the IR Sensor.\n\t\t\t\tValue 1 = 1, enable the IR Sensor.\n\t\t\t\tValue 2 = 0, Wave Option 1 is selected.\n\t\t\t\tValue 2 = 1, Wave Option 2 is selected.\n\t\t\t\tValue 3 = 0, disable the scene control functionality for Left/Right wave.\n\t\t\t\tValue 3 = 1, enable the scene control functionality for Left/Right wave\n\t\t\t\tValue 4 = 0, disable the scene control functionality for all wave actions.\n\t\t\t\tValue 4 = 1, enable the scene control functionality for all wave actions.\n\t\t\t",
          },
          {
            genre: "config",
            index: "64",
            label: "WallSwipe button color",
            type: "int",
            value: "184549375",
            Help:
              "\n\t\t\t\tSet the button color of WallSwipe.\n\t\t\t\tValue 1= Level 1.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "65",
            label: "WallSwipe LED Up gesture action",
            type: "int",
            value: "855638015",
            Help:
              "\n\t\t\t\tSet the LED indication color of WallSwipe when the gesture action is UP.\n\t\t\t\tValue 1= Reserved.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "66",
            label: "WallSwipe LED Down gesture action",
            type: "int",
            value: "855638015",
            Help:
              "\n\t\t\t\tSet the LED indication color of WallSwipe when the gesture action is Down.\n\t\t\t\tValue 1= Reserved.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "67",
            label: "WallSwipe LED Left gesture action",
            type: "int",
            value: "855638015",
            Help:
              "\n\t\t\t\tSet the LED indication color of WallSwipe when the gesture action is Left.\n\t\t\t\tValue 1= Reserved.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "68",
            label: "WallSwipe LED Right gesture action",
            type: "int",
            value: "855638015",
            Help:
              "\n\t\t\t\tSet the LED indication color of WallSwipe when the gesture action is Right.\n\t\t\t\tValue 1= Reserved.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "69",
            label: "WallSwipe Night light",
            type: "int",
            value: "184483840",
            Help:
              "\n\t\t\t\tSet the LED indication color of WallSwipe when it is in Night light state.\n\t\t\t\tValue 1= Reserved.\n\t\t\t\tValue 2= the color value of Red.\n\t\t\t\tValue 3= the color value of Green.\n\t\t\t\tValue 4= the color value of Blue.\n\t\t\t",
          },
          {
            genre: "config",
            index: "71",
            label: "WallSwipe sensitivity",
            type: "byte",
            value: "1",
            Help: "\n\t\t\t\tSet the sensitivity of WallSwipe.\n\t\t\t",
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
              {
                label:
                  "Hail CC when using the external switch to switch the loads",
                value: "3",
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
            index: "83",
            label: "LED status",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Configure the state of LED when it is in 3 modes below",
            Item: [
              { label: "The LED will follow the status", value: "0" },
              {
                label:
                  "LED will follow the status (on/off) of its load but the LED will turn off after 5 seconds",
                value: "1",
              },
              { label: "Night light mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "84",
            label: "Time set for Night light mode",
            type: "int",
            value: "301991936",
            Help:
              "\n\t\t\t\tValue1: Hour of ON.\n\t\t\t\tValue2: Minute of ON.\n\t\t\t\tValue3: Hour of OFF.\n\t\t\t\tValue4: Minute of OFF.\n\t\t\t\tE.g. The default setting is the Night light mode is enabled at 12: 00 and disabled at 8:00 0x12000800.\n\t\t\t",
          },
          {
            genre: "config",
            index: "86",
            label: "Set the ON time of output load",
            type: "int",
            value: "8327680",
            Help:
              "\n\t\t\t\tValue1: 0= Disable / 1= Enable.\n\t\t\t\tValue2: Weekday (Bit 0-6 means Monday to Sunday).\n\t\t\t\tValue3: Hour of turning OFF.\n\t\t\t\tValue4: Minute of turning OFF\n\t\t\t\tE.g. The default setting 0x007F1200\n\t\t\t",
          },
          {
            genre: "config",
            index: "87",
            label: "Set the OFF time of output load",
            type: "int",
            value: "8328960",
            Help:
              "\n\t\t\t\tValue1: 0= Disable / 1= Enable.\n\t\t\t\tValue2: Weekday (Bit 0-6 means Monday to Sunday).\n\t\t\t\tValue3: Hour of turning OFF.\n\t\t\t\tValue4: Minute of turning OFF\n\t\t\t\tE.g. The default setting 0x001707F00\n\t\t\t",
          },
          {
            genre: "config",
            index: "90",
            label: "Enable/disable the parameter 91 and 92",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "If this parameter is set to 1 (Enable), the parameter 101 - 103 should be set to 0.",
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
              "\n\t\t\t\tDefines the type of report sent for reporting group 1.\n\t\t\t\t1 is meter report for voltage.\n\t\t\t\t2 is meter report for current.\n\t\t\t\t4 is meter report for watts.\n\t\t\t\t8 is meter report for kilowatts.\n\t\t\t\tValue 1 (msb) Reserved\n\t\t\t\tValue 2 Reserved\n\t\t\t\tValue 3 Reserved\n\t\t\t\tValue 4 (lsb) bits 7-4 reserved\n\t\t\t\tbit 3 current\n\t\t\t\tbit 2 voltage\n\t\t\t\tbit 1 watt\n\t\t\t\tbit 0 kWh\n\t\t\t",
          },
          {
            genre: "config",
            index: "102",
            label: "Report type sent in Reporting Group 2",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tDefines the type of report sent for reporting group 2.\n\t\t\t\t1 is meter report for voltage.\n\t\t\t\t2 is meter report for current.\n\t\t\t\t4 is meter report for watts.\n\t\t\t\t8 is meter report for kilowatts.\n\t\t\t\tValue 1 (msb) Reserved\n\t\t\t\tValue 2 Reserved\n\t\t\t\tValue 3 Reserved\n\t\t\t\tValue 4 (lsb) bits 7-4 reserved\n\t\t\t\tbit 3 current\n\t\t\t\tbit 2 voltage\n\t\t\t\tbit 1 watt\n\t\t\t\tbit 0 kWh\n\t\t\t",
          },
          {
            genre: "config",
            index: "103",
            label: "Report type sent in Reporting Group 3",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tDefines the type of report sent for reporting group 3.\n\t\t\t\t1 is meter report for voltage.\n\t\t\t\t2 is meter report for current.\n\t\t\t\t4 is meter report for watts.\n\t\t\t\t8 is meter report for kilowatts.\n\t\t\t\tValue 1 (msb) Reserved\n\t\t\t\tValue 2 Reserved\n\t\t\t\tValue 3 Reserved\n\t\t\t\tValue 4 (lsb) bits 7-4 reserved\n\t\t\t\tbit 3 current\n\t\t\t\tbit 2 voltage\n\t\t\t\tbit 1 watt\n\t\t\t\tbit 0 kWh\n\t\t\t",
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
            value: "10",
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
            label: "Set the external S1 mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the switch mode of S1 is determined or identified or configured, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Push button", value: "3" },
              { label: "Automatic identification mode", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "121",
            label: "Set the external S2 mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "When the switch mode of S2 is determined or identified or configured, this mode value will not be reset after exclusion",
            Item: [
              { label: "Unidentified", value: "0" },
              { label: "2-state switch", value: "1" },
              { label: "3-way switch", value: "2" },
              { label: "Push button", value: "3" },
              { label: "Automatic identification mode", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "122",
            label: "Control destination for S1",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Set the control destination for external switch S1",
            Item: [
              { label: "Control the output load itself", value: "1" },
              { label: "Control other nodes", value: "2" },
              {
                label: "Control the output load itself and other nodes",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "123",
            label: "Control destination for S2",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Set the control destination for external switch S2",
            Item: [
              { label: "Control the output load itself", value: "1" },
              { label: "Control other nodes", value: "2" },
              {
                label: "Control the output load itself and other nodes",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "144",
            label: "WallSwipe",
            max: "1",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Get the state of touch panel port",
            Item: [
              { label: "Disconnected", value: "0" },
              { label: "Connected", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "247",
            label: "S1/S2 when the Switch mode is 3-way switch",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Set the working way for S1/S2 when the Switch mode is 3-way switch mode.",
            Item: [
              { label: "S1 and S2 is a toggle switch", value: "0" },
              { label: "S1 is an On/Off switch", value: "1" },
              { label: "S2 is an On/Off switch", value: "2" },
              { label: "S1 and S2 are an On/Off switch", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "248",
            label: "Function of S1/S2",
            type: "byte",
            units: "",
            value: "131",
            Help:
              "\n\t\t\t\tSet the function of S1/S2.\n\t\t\t\tBit 0 = 0, the function of sending NIF is disabled.\n\t\t\t\tBit 0 = 1, the function of sending NIF is enabled.\n\t\t\t\tBit 1 = 0, the function of entering RF power level test mode is disabled.\n\t\t\t\tBit 1 = 1, the function of entering RF power level test mode is enabled.\n\t\t\t\tBit 2 = 0, the function of factory reset is disabled.\n\t\t\t\tBit 2 = 1, the function of factory reset is enabled.\n\t\t\t\tBit 3 to Bit 6 are reserved.\n\t\t\t\tBit 7 = 0, the setting for Bit 0 to Bit 2 are ineffective. Bit 7 = 1, the setting for Bit 0 to Bit 2 are effective.\n\t\t\t",
          },
          {
            genre: "config",
            index: "251",
            label: "Configuration factory reset function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Enable/disable the factory reset function of Action Button, external switches or WallSwipe.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
