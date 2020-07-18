import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating 1",
            read_only: "false",
            type: "decimal",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Cooling 1",
            read_only: "false",
            type: "decimal",
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
            label: "System Type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = Standard, 1 = Heat Pump\n      ",
            Item: [
              { label: "Standard", value: "0" },
              { label: "Heat Pump", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Fan Type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        0 = Gas (no fan w/Heat), 1 = Electric (Fan w/Heat)\n      ",
            Item: [
              { label: "Gas", value: "0" },
              { label: "Electric", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Change Over Type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = w/Cool, 1 = w/Heat\n      ",
            Item: [
              { label: "w/Cool", value: "0" },
              { label: "w/Heat", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "2nd Stage Heat Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = no 2nd stage heat, 1 = 2nd stage heat\n      ",
            Item: [
              { label: "w/Cool", value: "0" },
              { label: "w/Heat", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Aux Heat Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = no aux heat, 1 = aux heat enabled\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "2nd Stage Cool Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = no 2nd stage cool, 1 = 2nd stage cool\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Temperature Unit",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n        0 = Celsius, 1 = Fahrenheit\n      ",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Minimum Off Time",
            max: "9",
            min: "5",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "5",
            Help:
              "\n        Sets the Minimum Off Time (MOT) delay before another heating/cooling cycle can begin\n      ",
          },
          {
            genre: "config",
            index: "9",
            label: "Minimum Run Time",
            max: "9",
            min: "3",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "3",
            Help:
              "\n        Sets the Minimum Run Time (MRT) delay before a heating/cooling cycle can turn of\n      ",
          },
          {
            genre: "config",
            index: "10",
            label: "Setpoint H/C Delta",
            max: "15",
            min: "3",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "3",
            Help:
              "\n        Sets the minimum separation between heating and cooling setpoints\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "H Delta Stage 1 ON",
            max: "6",
            min: "1",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "1",
            Help:
              "\n        Sets the delta from setpoint that stage 1 heating starts\n      ",
          },
          {
            genre: "config",
            index: "12",
            label: "H Delta Stage 1 OFF",
            max: "5",
            min: "0",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        Sets the delta from setpoint that stage 1 heating stops\n      ",
          },
          {
            genre: "config",
            index: "13",
            label: "H Delta Stage 2 ON",
            max: "7",
            min: "2",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "2",
            Help:
              "\n        Sets the delta from setpoint that stage 2 heating starts\n      ",
          },
          {
            genre: "config",
            index: "14",
            label: "H Delta Stage 2 OFF",
            max: "6",
            min: "0",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        Sets the delay from setpoint that stage 2 heating stops\n      ",
          },
          {
            genre: "config",
            index: "15",
            label: "H Delta Aux ON",
            max: "8",
            min: "3",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "3",
            Help:
              "\n        Sets the delta from setpoint that stage 3 heating starts\n      ",
          },
          {
            genre: "config",
            index: "16",
            label: "H Delta Stage 2 OFF",
            max: "7",
            min: "0",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        Sets the delta from setpoint that stage 3 heating stops\n      ",
          },
          {
            genre: "config",
            index: "17",
            label: "C Delta Stage 1 ON",
            max: "6",
            min: "1",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "1",
            Help:
              "\n        Sets the delta from setpoint that stage 1 cooling starts\n      ",
          },
          {
            genre: "config",
            index: "18",
            label: "C Delta Stage 1 OFF",
            max: "5",
            min: "0",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        Sets the delta from setpoint that stage 1 cooling stops\n      ",
          },
          {
            genre: "config",
            index: "19",
            label: "C Delta Stage 2 ON",
            max: "7",
            min: "2",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "2",
            Help:
              "\n        Sets the delta from setpoint that stage 2 cooling starts\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "C Delta Stage 2 OFF",
            max: "6",
            min: "0",
            size: "1",
            type: "byte",
            units: "fahrenheit",
            value: "0",
            Help:
              "\n        Sets the delta from setpoint that stage 2 cooling stops\n      ",
          },
          {
            genre: "config",
            index: "23",
            label: "Lifeline Association Group Report To Send",
            max: "65535",
            min: "0",
            size: "4",
            type: "int",
            value: "8319",
            Help:
              "\n        Report to send to the Lifeline Association Group upon change in thermostat state. \n        Bitmask values:\n          1 = Temperature\n          2 = Heat Setpoint\n          4 = Cool Setpoint\n          8 = Thermostat Heat/Cooling Mode\n          16 = Fan Mode\n          32 = Fan State\n          64 = Operating State\n          128 = Schedule (send CC parameter 38)\n          256 = Setback (send CC parameter 40)\n          512 = Run Hold (send CC parameter 39)\n          1024 = Display Lock (send CC parameter 24)\n          8192 = Battery Level\n          16834 = Mechanical Relay State (send CC parameter 21)\n          32768 = Thermostat State Config (send CC parameter 22)        \n      ",
          },
          {
            genre: "config",
            index: "24",
            label: "Display Lock",
            max: "1",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        Display Lock\n      ",
            Item: [
              { label: "Unlocked", value: "0" },
              { label: "Locked", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "26",
            label: "Backlight Timer",
            max: "30",
            min: "10",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "20",
            Help:
              "\n        Sets the time from last button press that the backlight will turn OFF\n      ",
          },
          {
            genre: "config",
            index: "33",
            label: "Max Heat Setpoint",
            max: "109",
            min: "30",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "90",
            Help: "\n        Sets the maximum heating setpoint value\n      ",
          },
          {
            genre: "config",
            index: "34",
            label: "Min Cool Setpoint",
            max: "112",
            min: "33",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "61",
            Help: "\n        Sets the minimum cooling setpoint value\n      ",
          },
          {
            genre: "config",
            index: "38",
            label: "Schedule Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        Enable or disable thermostat's local scheduler\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "39",
            label: "Run/Hold Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = Hold, 1 = Run\n      ",
            Item: [
              { label: "Hold", value: "0" },
              { label: "Run", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            label: "Setback Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        0 = No setback, 2 = Un-occupied mode\n      ",
            Item: [
              { label: "No Setback", value: "0" },
              { label: "Unoccupied Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "41",
            label: "Un-Occupied HSP",
            max: "109",
            min: "30",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "62",
            Help: "\n        Heat Setpoint for Unoccupied mode\n      ",
          },
          {
            genre: "config",
            index: "42",
            label: "Un-Occupied CSP",
            max: "112",
            min: "33",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "80",
            Help: "\n        Cool Setpoint for Unoccupied mode\n      ",
          },
          {
            genre: "config",
            index: "43",
            label: "Remote Sensor 1 Node Number",
            max: "252",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            Help: "\n        Node number for Remote Sensor 1\n      ",
          },
          {
            genre: "config",
            index: "46",
            label: "Remote Sensor 1 Temperature",
            max: "112",
            min: "0",
            size: "1",
            type: "byte",
            units: "degrees",
            Help: "\n        Temperature of Remote Sensor 1\n      ",
          },
          {
            genre: "config",
            index: "48",
            label: "Internal Sensor Temp Offset",
            max: "7",
            min: "-7",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "0",
            Help: "\n        Internal Sensor Temperature Offset\n      ",
          },
          {
            genre: "config",
            index: "49",
            label: "R1 Sensor Temp Offset",
            max: "7",
            min: "-7",
            size: "1",
            type: "byte",
            units: "degrees",
            value: "0",
            Help: "\n        R1 Sensor Temperature Offset\n      ",
          },
          {
            genre: "config",
            index: "52",
            label: "Filter Timer",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "hours",
            value: "4000",
            Help:
              "\n        Timer to let know when to change or clean the filter\n      ",
          },
          {
            genre: "config",
            index: "53",
            label: "Max Filter Timer",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "hours",
            value: "44",
            Help: "\n        Maximum allowed value for filter timer\n      ",
          },
          {
            genre: "config",
            index: "54",
            label: "Heat Timer",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "hours",
            value: "0",
            Help: "\n        Heat Timer in hours\n      ",
          },
          {
            genre: "config",
            index: "55",
            label: "Cool Timer",
            max: "4000",
            min: "0",
            size: "2",
            type: "short",
            units: "hours",
            value: "0",
            Help: "\n        Cool Timer in hours\n      ",
          },
          {
            genre: "config",
            index: "61",
            label: "Fan Purge Heat",
            max: "90",
            min: "0",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "0",
            Help: "\n        Fan purge period for Heat mode\n      ",
          },
          {
            genre: "config",
            index: "62",
            label: "Fan Purge Cool",
            max: "90",
            min: "0",
            size: "1",
            type: "byte",
            units: "hours",
            value: "0",
            Help: "\n        Fan purge period for Cool mode\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Cool", max_associations: "5" },
              { index: "3", label: "Heat", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
