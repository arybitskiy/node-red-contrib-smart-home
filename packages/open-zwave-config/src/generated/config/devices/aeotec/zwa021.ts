import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0015:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa021.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3627",
            id: "0015",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "Start Inclusion mode of your primary Z-Wave Controller.\n            Press the Boost-Button.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=product_documents/3627/RadiatorThermostat_Mainmanual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Start Exclusion mode of your primary Z-Wave Controller.\n            Now press and hold the boost button of the Spirit Z-Wave Plus for at least 5 seconds.",
            name: "ExclusionDescription",
          },
          { text: "Aeotec Radiator Thermost", name: "Name" },
          {
            text: "4251295701387",
            id: "0015",
            name: "Identifier",
            type: "0002",
          },
          { text: "UAE", id: "0015", name: "FrequencyName", type: "0002" },
          {
            text:
              "Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n            https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3627/RadiatorThermostat_Mainmanual.pdf\n            Remove batteries.\n            Press and hold boost button.\n            While still holding boost button insert batteries.\n            The LCD shows RES. Release boost button.\n            To perform the factory reset press boost button.",
            name: "ResetDescription",
          },
          {
            text:
              "With the Aeotec Radiator Thermostat you get many functions. It regulates the room temperature to your comfort. For the best use it is equipped with FLiRS (Frequently Listening Receiver Slave) and reacts immediately to incoming commands of the Z-Wave controller. Furthermore the device is able to be connected to an external Z-Wave temperature sensor. Because of that the thermostat refers to the temperature of the external sensor, which can be placed in the middle of the room.\n\n            The display of the thermostat has a background light and has a big LCD screen. Besides you can also lock the local buttons as a child protection.\n\n            The multicolor LED of the central button allows a intuitive usability because the User is invited to follow the instruction based on the blinking LED of the middle butto.\n\n            The TRV can either be used as heating thermostat or as a actuator depending on the configuration of the device. The measured temperature or the position of the actuator of the thermostat are transfered to the Z-Wave gateway.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/3627",
            id: "0015",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "4251295701387",
            id: "0015",
            name: "Identifier",
            type: "0002",
          },
          { text: "UAE", id: "0015", name: "FrequencyName", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3627",
                author: "Ben Van Mechelen - ben@benvm.be",
                date: "23 dec 2019",
                revision: 1,
              },
              {
                text: "ProductPic",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "29 dec 2019",
                revision: 2,
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
            instance: "1",
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
              { label: "Boost", value: "15" },
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
              { index: "15", label: "Boost" },
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
