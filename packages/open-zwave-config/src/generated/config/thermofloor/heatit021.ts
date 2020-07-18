import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/019B:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/thermofloor/heatit021.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1234/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "Heatit Z-Wave is an electronic thermostat for mounting in a standard wall box. The thermostat has a built-in Z-Wave chip that \ncan be connected to Home Automation systems like Fibaro, Sensio, Vera, Zipato and others.\nThe display will show the actual room temperature. By pressing the buttons, the display will show the set value.\nHeatit Z-Wave is equipped with a single-pole switch.\nThe thermostat can handle loads up to 16A/3600Wat 230V. If the load is greater than this, the thermostat needs to be connected to a contactor. It can be used with two external temperature sensors.\n\nFUNCTIONS\n• Room sensor\n• Floor sensor\n• Temperature limiter\n• Power regulator\n• Z-Wave chip 500 series\n• Week program/setback temperature via gateway\n• Setback mode\n• 7-segment LCD-screen\n• Can be used in connection with diff erent NTC-sensors\n• Lock mode/child lock\n• Backlight\n• Calibration\n• 8 scenarios\nCONNECTION CLAMPS\nUse 1,5 mm² or 2,5 mm² cables according to power need.\nTECHNICAL DATA\nRated voltage: 230V 50/60Hz\nMax. load: 3600W\nMax. current: 16A\nPower consumption: 1,5W\nProtection class: IP21\nMin/Max installation temp: -20°C to 40°C\nMin/Max operating temp: 5°C to 40°C\nTemperature intervals: Floor sensor 5°C to 40°C\nRoom sensor 5°C to 40°C\nHysteresis: 0,5°C\nSensor values: 0°C 29,1 kOhm\n10°C 18,6 kOhm\n15°C 15,1 kOhm\n20°C 12,2 kOhm\n25°C 10,0 kOhm\nSwitch: Single-pole",
            name: "Description",
          },
          {
            text:
              "INCLUSION/EXCLUSION\nTo include the thermostat to your home automation gateway, press Center (confirm) for 10 seconds.\nThe display will show OFF. Press Right (down) 4 times till you see Con in the display.\nNow start add device in your home automation software. Start inclusion mode by pressing Center (confirm) for approximately\n2 seconds. The inclusion/exclusion icon will appear in the display. Confirmation will show Inc/EcL in the display. If inclusion\nfails, Err (error) will appear.\nLeave programming mode by choosing ESC in menu. Your thermostat is ready for use with default settings.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1234/Manual_Multireg Z-Wave_Ver2015-A.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Heatit Z-Wave", name: "Name" },
          { text: "TF021", id: "0001", name: "Identifier", type: "0001" },
          {
            text:
              "FACTORY RESET - RES\nBy pressing buttons Left and Center (up and confirm) for 20 seconds, the thermostat will perform a complete factory reset.\nNB! Please use this procedure only when the primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "INCLUSION/EXCLUSION\nTo include the thermostat to your home automation gateway, press Center (confirm) for 10 seconds.\nThe display will show OFF. Press Right (down) 4 times till you see Con in the display.\nNow start add device in your home automation software. Start inclusion mode by pressing Center (confirm) for approximately\n2 seconds. The inclusion/exclusion icon will appear in the display. Confirmation will show Inc/EcL in the display. If inclusion\nfails, Err (error) will appear.\nLeave programming mode by choosing ESC in menu. Your thermostat is ready for use with default settings.",
            name: "InclusionDescription",
          },
          {
            text:
              "If Er2 appears in the display, touch any button to restart the display.",
            name: "WakeupDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1182/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1234/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 8,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat (Default)", value: "1" },
              { label: "Cool", value: "2" },
              { label: "Energy Heat", value: "11" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "2", label: "Cool" },
              { index: "11", label: "Energy Heat" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating",
            max: "40",
            min: "5",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Cooling",
            max: "40",
            min: "5",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "21",
            write_only: "false",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy Heat",
            max: "40",
            min: "5",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "16",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Operation mode",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Cool", value: "2" },
              { label: "Energy save heat", value: "11" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature sensor",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "F  - Floor mode", value: "0" },
              { label: "A  - Room temperature mode", value: "1" },
              { label: "AF - Room mode w/floor limitations", value: "2" },
              { label: "A2 - Room temperature mode", value: "3" },
              { label: "P  - Power regulator", value: "4" },
              {
                label: "FP - Floor mode with minimum power limitation",
                value: "5",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Floor sensor type",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "10k ntc", value: "0" },
              { label: "12k ntc", value: "1" },
              { label: "15k ntc", value: "2" },
              { label: "22k ntc", value: "3" },
              { label: "33k ntc", value: "4" },
              { label: "47k ntc", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "DIFF l. Temperature control Hysteresis",
            max: "30",
            min: "3",
            size: "2",
            type: "short",
            value: "5",
            Help: "3-30 (0.3C - 3.0C)",
          },
          {
            genre: "config",
            index: "5",
            label: "FLo: Floor min limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "50",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "6",
            label: "FHi: Floor max limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "400",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "7",
            label: "ALo: Air min limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "50",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "8",
            label: "AHi: Air max limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "400",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "9",
            label: "PLo: Min temperature in Power Reg Mode",
            max: "9",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "0-9. Min temperature in Power Regulator Mode (setting 2. Temperature sensor - P)",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "CO mode setpoint",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "210",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "ECO mode setpoint",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "180",
            Help: "50-400 (5.0C - 40.0C)",
          },
          {
            genre: "config",
            index: "12",
            label: "P setting",
            max: "10",
            min: "0",
            size: "2",
            type: "short",
            value: "2",
            Help: "0-10",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "COOL setpoint",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "180",
            Help:
              "\n\t\t\t\tOnly if cooling is enabled.\n\t\t\t\t50-400 (5.0C - 40.0C)\n\t\t\t",
          },
        ],
        Compatibility: "",
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off control", max_associations: "8" },
            ],
          },
        ],
        Compatibility: "",
      },
    ],
  },
};

export default config;
