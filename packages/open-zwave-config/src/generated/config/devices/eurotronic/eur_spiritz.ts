import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0148:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/eurotronic/eur_spiritz.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2543/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Start Inclusion mode of your primary Z-Wave Controller.\nPress the Boost-Button.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2650/Spirit_Z-Wave_BAL_web_EN_view_05.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Start Exclusion mode of your primary Z-Wave Controller.\nNow press and hold the boost button of the Spirit Z-Wave Plus for at least 5 seconds.",
            name: "ExclusionDescription",
          },
          { text: "KOMFORTHAUS Spirit Z-Wave Plus", name: "Name" },
          {
            text: "4260012711110",
            id: "0001",
            name: "Identifier",
            type: "0003",
          },
          { text: "UAE", id: "0001", name: "FrequencyName", type: "0003" },
          {
            text:
              "Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n\nRemove batteries.\nPress and hold boost button.\nWhile still holding boost button insert batteries.\nThe LCD shows RES. Release boost button.\nTo perform the factory reset press boost button.",
            name: "ResetDescription",
          },
          {
            text:
              "•\tEasy control for water radiators from any Z-Wave Controller\n•\tFits most European water radiators (wide range of additional adaptors for different manufacturers available)\n•\tFLiRS for quick response time \n•\tLED Backlit LCD\n•\tMetal nut for reliable connection to the radiator\n•\t2 buttons for easy temperature regulation\n•\tBattery level indicator\n•\tChild Lock\n•\tOver the Air update\n•\tUK-Mode for upside down installation\n•\tOpen Window detection\n•\tAutomatic frost protection",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/2650/",
            id: "0003",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "4250848804063",
            id: "0003",
            name: "Identifier",
            type: "0003",
          },
          { text: "UAE", id: "0003", name: "FrequencyName", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2543/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2650/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "38",
        Value: [
          {
            genre: "user",
            index: "0",
            label: "Valve Opening",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
          },
        ],
      },
      {
        id: "64",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            type: "list",
            Help:
              "\n                Off: No heating, only frost protection.\n                Heat: Room temperature will be kept at the configured setpoint.\n                Heat Eco: Energy save heating mode. Room temperature will be lowered to the configured eco setpoint in order to save energy.\n                Full Power: Full power heating. This mode is left automatically after 5 minutes.\n                Manufacturer Specific: Direct valve control mode. The valve opening percentage can be controlled using the switch multilevel command class.\n            ",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Heat Eco", value: "11" },
              { label: "Full Power", value: "15" },
              { label: "Manufacturer Specific", value: "31" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "11", label: "Heat Eco" },
              { index: "15", label: "Full Power" },
              { index: "31", label: "Manufacturer Specific" },
            ],
          },
        ],
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heat",
            max: "28",
            min: "8",
            read_only: "false",
            type: "decimal",
            units: "°C",
            value: "20",
            write_only: "false",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Heat Eco",
            max: "28",
            min: "8",
            read_only: "false",
            type: "decimal",
            units: "°C",
            value: "16",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], AltTypeInterpretation: [false] }],
      },
      {
        id: "112",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "LCD Invert",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Allows rotating the LCD contents by 180 degrees.\n                Default: Normal\n            ",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Upside Down", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "LCD Timeout",
            max: "30",
            min: "0",
            type: "byte",
            units: "sec",
            value: "0",
            Help:
              "\n                0: No Timeout, LCD always on.\n                5-30: Timeout after 5-30s.\n                Default: 0 (LCD always on)\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Backlight",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n                Default: Backlight enabled\n            ",
            Item: [
              { label: "Backlight disabled", value: "0" },
              { label: "Backlight enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Battery Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "\n                Default: Send once a day\n            ",
            Item: [
              { label: "Only send battery status as notification", value: "0" },
              { label: "Send once a day", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Temperature Report Threshold",
            max: "50",
            min: "0",
            type: "byte",
            units: "0.1°C",
            value: "5",
            Help:
              "\n                0: Don't send temperature automatically.\n                1-50: Report temperature at 0.1-5.0°C temperature difference.\n                Default: 5 (Delta = 0.5°C)\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Valve Opening Percentage Report",
            max: "100",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                0: Don't send Valve opening percentage automatically.\n                1-100: Report valve opening percentage at a delta of 1-100%.\n                Default: 0\n            ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Open Window Detection",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "\n                Default: Medium sensibility\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Low sensibility", value: "1" },
              { label: "Medium sensibility", value: "2" },
              { label: "High sensibility", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Measured Temperature Offset",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                206-255: -5.0 to -0.1°C.\n                0-50: 0°C-5°C.\n                128: External Temperature Sensor.\n                Default: 0 (0.0°C Offset)\n            ",
          },
        ],
      },
    ],
  },
};

export default config;
