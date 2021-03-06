import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/019B:0202:0003",
            name: "OzwInfoPage",
          },
          { text: "images/thermofloor/heatit056.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3065/",
            id: "0202",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Adding the device:\nTo add the thermostat to your home automation gateway, press Center (confirm) for 10 seconds. The display will show OFF. Press Right (down) 4 times till you see Con in the display. Now start add device in your home automation software. Start adding mode by pressing Center (confirm) button for approximately 2 seconds. The icon will appear in the display. Adding Mode is indicated in the display by some “circling” LED segments in the display until the timeout occurs after 20 seconds or the module has been added in the network. Confirmation will show Inc/EcL in the display. If adding fails, Err (error) will appear.",
            name: "InclusionDescription",
          },
          { text: "Z-TRM2fx", id: "0202", name: "Identifier", type: "0003" },
          {
            text:
              "Heatit Z-TRM2fx is equipped with a single pole switch and it fits most System 55 frames (Elko RS16, Schneider Exxact, Gira, Jung etc.). The thermostat can withstand a load of max 13A /2900W at 230V. At higher loads the thermostat must control a contactor. The thermostat may be connected to two wired external sensors.\nThe thermostat has the capacity of up to 8 associations (relays, wall plugs etc.).\nThe thermostat is designed for electrical heating.\nFEATURES\nFloor sensor\nExternal room sensor\nTemperature limiter\nWeekly program/setback via gateway or pilot wire\nMultilevel sensor command class\nFirmware updates (OTA)\nPower metering\nLED-diode\nCan be used in connection with different NTC-sensors\nLock mode/child lock\nCalibration\n8 associations\nSupports encryption mode: S0, S2 Authenticated Class, S2 Unauthenticated Class",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3065/Manual_Heatit_Z-TRM2fx_ENG_3.1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Removing the device:\nTo remove the thermostat to your home automation gateway, press Center (confirm) for 10 seconds. The display will show OFF. Press Right (down) 4 times till you see Con in the display. Now start remove device in your home automation software. Start removing mode by pressing Center (confirm) button for approximately 2 seconds. The icon will appear in the display. Removing Mode is indicated in the display by some “circling” LED segments in the display until the timeout occurs after 20 seconds or the module has been removed in the network. Confirmation will show Inc/EcL in the display. If removing fails, Err (error) will appear.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0202",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "By pressing buttons Right and Center (down and confirm) for 20 seconds, the thermostat will perform a complete factory reset.\nNB! Please use this procedure only when the primary controller/ gateway is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Heatit Z-TRM2fx", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3065/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
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
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
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
        id: "49",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "External sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "decimal",
            units: "C",
            write_only: "false",
          },
          {
            genre: "user",
            index: "1",
            instance: "2",
            label: "Floor sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "decimal",
            units: "C",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
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
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "21",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Cooling",
            max: "0",
            min: "0",
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
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "18",
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
            Help: "Set operation mode",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Cooling Mode", value: "2" },
              { label: "Heat Energy Saving", value: "11" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Sensor mode",
            size: "1",
            type: "list",
            value: "1",
            Help: "Set sensor mode",
            Item: [
              { label: "F - Floor sensor", value: "0" },
              { label: "A2 - External room sensor", value: "3" },
              {
                label: "A2F - External sensor with floor limitation",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Floor sensor type",
            size: "1",
            type: "list",
            value: "0",
            Help: "Floor sensor type (10K NTC Default)",
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
            instance: "1",
            label: "Temperature control Hysteresis",
            max: "30",
            min: "3",
            size: "1",
            type: "byte",
            value: "5",
            Help: "3-30 (0.3C - 3.0C) Default is 5 (0.5C)",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Floor minimum temperature limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "50",
            Help: "50-400 (5.0C - 40.0C) Default is 50 (5.0C)",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Floor maximum temperature limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "400",
            Help: "50-400 (5.0C - 40.0C) Default is 400 (40.0C)",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Air (A2) minimum temperature limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "50",
            Help: "50-400 (5.0C - 40.0C) Default is 50 (5.0C)",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Air (A2) maximum temperature limit",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "400",
            Help: "50-400 (5.0C - 40.0C) Default is 400 (40.0C)",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Heating mode setpoint (CO)",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "210",
            Help: "50 - 400 (5.0C - 40.0C) Default is 210 (21.0C)",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Energy saving mode setpoint (ECO)",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "180",
            Help: "50-400 (5.0C - 40.0C) Default is 180 (18.0C)",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Cooling setpoint (COOL)",
            max: "400",
            min: "50",
            size: "2",
            type: "short",
            value: "210",
            Help: "50-400 (5.0C - 40.0C) Default is 210 (21.0C)",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Floor sensor calibration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "-40 - 40 (-4.0C - 4.0C) Default is 0 (0.0C) To set a negative value, use 255 and subtract the desired value.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "External sensor calibration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "-40 - 40 (-4.0C - 4.0C) Default is 0 (0.0C) To set a negative value, use 255 and subtract the desired value.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Temperature display",
            size: "1",
            type: "list",
            value: "0",
            Help: "Show setpoint or calculated temperature on display(",
            Item: [
              { label: "Display setpoint temperature (Default)", value: "0" },
              { label: "Display measured temperature", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Button brightness - Dimmed state",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help: "0-100 (0 - 100%)",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Button brightness - Active state",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help: "0-100 (0 - 100%)",
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Display brightness - Dimmed state",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help: "0-100 (0 - 100%)",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Display brightness - Active state",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "100",
            Help: "0-100 (0 - 100%)",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Temperature report interval",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            value: "60",
            Help:
              "\n\t\t\t\t0 (Report disabled)\n\t\t\t\t30-32767 (30-32767 seconds)\n\t\t\t",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Temperature report hysteresis",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            value: "10",
            Help: "0-100 (0.1C - 10.0C) Default is 10 (1.0C)",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Meter report interval",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            value: "60",
            Help:
              "\n\t\t\t\t0 (Report disabled)\n\t\t\t\t30-32767 (30-32767 seconds)\n\t\t\t",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Meter report delta value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "0-127 A delta value of 0 - 12.7 kWh will result in a metering report. Default is 10 (1.0 kWh)",
          },
        ],
        Compatibility: "",
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Multilevel sensor reports - External sensor",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Multilevel sensor reports - Floor sensor",
                max_associations: "5",
              },
              {
                index: "4",
                label: "On/Off switch of internal relay",
                max_associations: "5",
              },
            ],
          },
        ],
        Compatibility: "",
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
