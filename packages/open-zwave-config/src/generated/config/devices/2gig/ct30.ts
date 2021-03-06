import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Temperature Reporting Threshold",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Temperature Reporting Threshold Configuration Set Command sets the reporting threshold for changes in the ambient temperature as detected by the thermostat.\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "0.5F", value: "1" },
              { label: "1.0F", value: "2" },
              { label: "1.5F", value: "3" },
              { label: "2.0F", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "HVAC Settings",
            max: "31",
            min: "0",
            read_only: "true",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n        Read-only parameter\n        0 - 7 -> HVAC Setup: Normal (0x01) or Heat Pump (0x02)\n        8 - 11 -> Number of Auxiliary Stages (Heat Pump) / Number of Heat Stages (Normal)\n        12 - 15 -> Aux Setup: Gas (0x01) or Electric (0x02)\n        16 - 23 -> Number of Heat Pump Stages\n        24 - 31 -> Number of Cool Stages\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Utility Lock",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Utility Lock Configuration Set command enables or disables the utility lock. If the utility lock is enabled, the setpoint cannot be modified directly via the thermostat screen.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "C-Wire/Battery Status",
            max: "31",
            min: "0",
            read_only: "true",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n        Read-only parameter\n        1 -> C-Wire\n        2 -> Battery\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Humidity Reporting Threshold",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Temperature Reporting Threshold Configuration Set Command sets the reporting threshold for changes in the ambient temperature as detected by the thermostat.\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "3% RH", value: "1" },
              { label: "5% RH", value: "2" },
              { label: "10% RH", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Auxiliary/Emergency heat",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Auxiliary/Emergency configuration command enables or disables auxiliary / emergency heating in the thermostat. Auxiliary / emergency heating is only available if the thermostat is configured in heat pump mode and with at least one stage of auxiliary heating. This command enables auxiliary / emergency heating when the thermostat is in Auto mode. The Thermostat Set Mode command with mode Auxiliary/Emergency Heat will enable emergency heating but only if the thermostat is in\n        Heat mode. This command should only be used on thermsotats that support Auxiliary/Emergency Heat thermostat mode.\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Thermostat Swing Temperature",
            max: "8",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Auxiliary/Emergency configuration command enables or disables auxiliary/emergency heating in the thermostat. Auxiliary/emergency heating is only available if the thermostat is configured in heat pump mode and with at least one stage of auxiliary heating. This command enables auxiliary / emergency heating when the thermostat is in Auto mode. The Thermostat Set Mode command with mode Auxiliary/Emergency Heat will enable emergency heating but only if the thermostat is in Heat\n        mode. This command should only be used on thermsotats that support Auxiliary/Emergency Heat thermostat mode.\n      ",
            Item: [
              { label: "0.05F", value: "1" },
              { label: "0.1F", value: "2" },
              { label: "4.0F", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Thermostat Diff Temperature",
            max: "12",
            min: "4",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n        The Thermostat Differential Temperature configuration command sets the differential temperature for multi-stage HVAC systems. The differential temperature delta defines when the thermostat will turn on additional stages. There are two differential temperatures, one for multistage cool systems and one for multistage heat systems. If the thermostat is not configured for multistage HVAC systems then these parameters have no effect.\n      ",
            Item: [
              { label: "2.0F", value: "4" },
              { label: "4.0F", value: "8" },
              { label: "6.0F", value: "12" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Thermostat Recovery Mode",
            max: "12",
            min: "4",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n        The Thermostat Recovery Mode configuration command sets the HVAC recovery mode type. The recovery mode determines when additional HVAC stages are turned off as the ambient temperature returns to the target temperature. If the recovery mode is set to economy, the thermostat will turn off additional HVAC stages when the ambient temperature reaches the target temperature plus/minus the differential temperature. If the recovery mode is set to fast, the thermostat will leave all\n        stages on (assuming they were already on) until the ambient temperature reaches the target temperature.\n      ",
            Item: [
              { label: "Fast", value: "1" },
              { label: "Economy", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Temperature Reporting Filter",
            max: "124",
            min: "0",
            size: "2",
            type: "short",
            units: "F",
            value: "124",
            Help:
              "\n        The Temperature Reporting Filter configuration command sets upper and lower bounds of the ambient temperature reporting. The thermostat will not report ambient temperature changes if the ambient temperature falls between these bounds. For example, if the upper bound is 80F and the lower bound is 60F, the thermostat will not send SENSOR_MULTI_LEVEL_REPORTS for ambient temperature values between 60F and 80F. The thermostat will only send ambient temperature changes if the\n        thermostat has been added to an association group (see Command Class Association) and the temperature reporting threshold is non-zero (see Temperature Reporting Threshold).\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Reporting", max_associations: "2" }],
          },
        ],
      },
    ],
  },
};

export default config;
