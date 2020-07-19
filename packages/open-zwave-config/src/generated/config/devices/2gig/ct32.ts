import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0098:0100:2002",
            name: "OzwInfoPage",
          },
          { text: "images/2gig/ct32.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1330/",
            id: "0100",
            name: "ZWProductPage",
            type: "2002",
          },
          {
            text:
              "When included into a Z-Wave network on battery power, this device is a FLiRS device. The Thermostat will wake up for communication when it receives a valid Z-Wave beam.",
            name: "WakeupDescription",
          },
          { text: "CT32", id: "0100", name: "Identifier", type: "2002" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0100",
            name: "FrequencyName",
            type: "2002",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1330/RTZW-02_module_IB_11jun15_web.pdf",
            name: "ProductManual",
          },
          {
            text: "Go to Menu screen, and press INCLUDE icon.",
            name: "InclusionDescription",
          },
          { text: "CT32", name: "Name" },
          {
            text: "Go to Menu screen, and press EXCLUDE icon.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The Z-Wave enabled CT32 thermostat is a compact, easy-to-use thermostat that is packed with functionality. The CT32 has a responsive touchscreen interface, easy-to-read backlight display, and 7-day programmability. It features a system lock to avoid unintentional changes for maximum efficiency, a filter change indicator to keep your HVAC system running efficiently, wide temperature operation range, and room temperature calibration for precise control.",
            name: "Description",
          },
          {
            text:
              "In Main menu, put thermostat in OFF mode. Press and hold center digits.  Use the reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1046/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1330/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Force root instance to map to first endpoint via compat flag MapRootToEndpoint",
                author: "Keith Pine - keith.pine@gmail.com",
                date: "05 Dec 2019",
                revision: 5,
              },
              {
                text:
                  "Force Setpoint Interpretion A and update some config parameters.",
                author: "Keith Pine - keith.pine@gmail.com",
                date: "21 Jan 2020",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "67",
        Compatibility: [{ Base: [0], AltTypeInterpretation: [false] }],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
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
            value: "2",
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
            max: "2147483647",
            min: "0",
            read_only: "true",
            size: "4",
            type: "list",
            units: "",
            value: "17891585",
            Help:
              "\n        Bits 0 - 7 -> HVAC Setup: Normal (0x01) or Heat Pump (0x02)\n        Bits 8 - 11 -> Number of Auxiliary Stages (Heat Pump) / Number of Heat Stages (Normal)\n        Bits 12 - 15 -> Aux Setup: Gas (0x01) or Electric (0x02)\n        Bits 16 - 23 -> Number of Heat Pump Stages\n        Bits 24 - 31 -> Number of Cool Stages\n      ",
            Item: [
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 1",
                value: "17891585",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 1",
                value: "34668801",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 1",
                value: "18940161",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 1",
                value: "35717377",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 1",
                value: "17957121",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 1",
                value: "34734337",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 1",
                value: "19005697",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 1",
                value: "35782913",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 1",
                value: "17891841",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 1",
                value: "34669057",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 1",
                value: "18940417",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 1",
                value: "35717633",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 1",
                value: "17957377",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 1",
                value: "34734593",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 1",
                value: "19005953",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 1",
                value: "35783169",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 2",
                value: "17891586",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 2",
                value: "34668802",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 2",
                value: "18940162",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 1, Cool Stages: 2",
                value: "35717378",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 2",
                value: "17957122",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 2",
                value: "34734338",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 2",
                value: "19005698",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 1, Cool Stages: 2",
                value: "35782914",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 2",
                value: "17891842",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 2",
                value: "34669058",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 2",
                value: "18940418",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Gas, Heat Pump Stages: 2, Cool Stages: 2",
                value: "35717634",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 2",
                value: "17957378",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 1, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 2",
                value: "34734594",
              },
              {
                label:
                  "HVAC: Normal, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 2",
                value: "19005954",
              },
              {
                label:
                  "HVAC: Heat Pump, Aux Stages: 2, Aux Setup: Elec, Heat Pump Stages: 2, Cool Stages: 2",
                value: "35783170",
              },
            ],
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
              "\n        The Utility Lock Configuration Set command enables or disables the utility lock.\n        If the utility lock is enabled, the setpoint cannot be modified directly via the thermostat screen.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "C-Wire/Battery Status",
            max: "2",
            min: "1",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n        1 -> C-Wire\n        2 -> Battery\n      ",
            Item: [
              { label: "C-Wire", value: "1" },
              { label: "Battery", value: "2" },
            ],
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
            value: "2",
            Help:
              "\n        The Humidity Reporting Threshold Configuration Set Command sets the reporting threshold for changes in the ambient humidity as detected by the thermostat.\n      ",
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
              "\n        The Auxiliary/Emergency configuration command enables or disables auxiliary / emergency heating in the thermostat.\n        Auxiliary / emergency heating is only available if the thermostat is configured in heat pump mode and with at least one stage of auxiliary heating.\n        This command enables auxiliary / emergency heating when the thermostat is in Auto mode.\n        The Thermostat Set Mode command with mode Auxiliary/Emergency Heat will enable emergency heating but only if the thermostat is in Heat mode.\n        This command should only be used on thermsotats that support Auxiliary/Emergency Heat thermostat mode.\n      ",
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
            value: "2",
            Help:
              "\n        The Temperate Swing (HVAC cycling rate) is the desired variance in temperature between the thermostat setting and the room temperature required before the heating or cooling system will turn on.\n      ",
            Item: [
              { label: "0.5F", value: "1" },
              { label: "1.0F", value: "2" },
              { label: "1.5F", value: "3" },
              { label: "2.0F", value: "4" },
              { label: "2.5F", value: "5" },
              { label: "3.0F", value: "6" },
              { label: "3.5F", value: "7" },
              { label: "4.0F", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Thermostat Differential Temperature",
            max: "32767",
            min: "2",
            size: "2",
            type: "list",
            units: "F",
            value: "4",
            Help:
              "\n        (Set Only) The Thermostat Differential Temperature configuration command sets the differential temperature for multi-stage HVAC systems.\n        The differential temperature delta defines when the thermostat will turn on additional stages.\n        There are two differential temperatures, one for multistage cool systems and one for multistage heat systems.\n        If the thermostat is not configured for multistage HVAC systems then these parameters have no effect.\n      ",
            Item: [
              { label: "2.0F Heat", value: "4" },
              { label: "3.0F Heat", value: "6" },
              { label: "4.0F Heat", value: "8" },
              { label: "5.0F Heat", value: "10" },
              { label: "6.0F Heat", value: "12" },
              { label: "2.0F Cool", value: "260" },
              { label: "3.0F Cool", value: "262" },
              { label: "4.0F Cool", value: "264" },
              { label: "5.0F Cool", value: "266" },
              { label: "6.0F Cool", value: "268" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Thermostat Recovery Mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "\n        The Thermostat Recovery Mode configuration command sets the HVAC recovery mode type.\n        The recovery mode determines when additional HVAC stages are turned off as the ambient temperature returns to the target temperature.\n        If the recovery mode is set to economy, the thermostat will turn off additional HVAC stages when the ambient temperature reaches the target temperature plus/minus the differential temperature.\n        If the recovery mode is set to fast, the thermostat will leave all stages on (assuming they were already on) until the ambient temperature reaches the target temperature.\n      ",
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
          {
            genre: "config",
            index: "10",
            label: "Temperature Reporting Filter",
            max: "32767",
            min: "0",
            size: "4",
            type: "raw",
            units: "F",
            value: "0x09 0x00 0x09 0x00",
            Help:
              "\n        The Temperature Reporting Filter configuration command sets upper and lower bounds of the ambient temperature reporting.\n        The thermostat won't report ambient temperature changes if the ambient temperature falls between these bounds.\n        For example, if the upper bound is 80F and the lower bound is 60F, the thermostat will not send SENSOR_MULTI_LEVEL_REPORTS for ambient temperature values between 60F and 80F.\n        The thermostat will only send ambient temperature changes if the thermostat has been added to an association group (see Command Class Association) and the temperature reporting threshold is non-zero (see Temperature Reporting Threshold).\n        Input in hexadecimal only like so: 0x09 0x05 0x09 0x0A.\n        It must always have four 1 byte sized numbers.\n        The first two bytes control the lower temperature bound for the Temperature Reporting Filter the last two control the upper temperature bound.\n        The first byte in the byte pair always refers to temperature scale (Celsius 0x01 or Fahrenheit 0x09).\n        While the second byte in each byte pair is the bound temperature.\n        The max/min temp you can use is 127 degrees.\n        To convert decimal to hex goto: https://www.binaryhexconverter.com/decimal-to-hex-converter or you can use the built in Windows calculator program in Programmer mode.\n        If you mess up your thermostat copy and paste 0x09 0x00 0x09 0x00 (for a F Thermostat) or 0x01 0x00 0x01 0x00 (for a C Thermostat).\n        This will remove any bounds.\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "Simple UI Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n        If the value is set to Disable then Normal Mode is enabled. If the value is set to Enable then Simple Mode is enabled.\n      ",
            Item: [
              { label: "Enable", value: "0" },
              { label: "Disable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Multicast",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n        If set to 0, multicast is disabled, if set to 1, will enable the multicast.\n      ",
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
