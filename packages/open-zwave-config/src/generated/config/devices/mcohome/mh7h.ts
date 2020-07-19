import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/015F:5102:0702",
            name: "OzwInfoPage",
          },
          { text: "images/mcohome/mh7h.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2900/",
            id: "5102",
            name: "ZWProductPage",
            type: "0702",
          },
          { text: "Heating Thermostat", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "5102",
            name: "FrequencyName",
            type: "0702",
          },
          {
            text:
              "In normal working interface, press & hold S4 to enter interface for adding or removing of Z-Wave network. Before device removed from network,  a Node ID will display on the screen. Then press S4 once. If removing is succeed,  “- - -”will display on the screen in a few seconds. \n\nA node ID can always inform us whether the device is in the network or not.When removed, the device will restore its factory setting.",
            name: "ExclusionDescription",
          },
          {
            text:
              "A parameter P18 in the secret menu can be used to restore factory setting locally. Please use this procedure only when the network primary controller is missing or otherwise inoperable. ; And a parameter FF can be used to restore the factory setting via Z-Wave.",
            name: "ResetDescription",
          },
          { text: "MH7H-WH/EH", id: "5102", name: "Identifier", type: "0702" },
          {
            text:
              "MH7H-WH is mainly applied to control wall mounted boiler, water valve/pump etc. , while MH7H-EH is for electrical heating system.The device is of high reliability and practicability, which can be included and operated in any Z-Wave network with other Z-Wave certified devices from any other manufacturers. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\n\nFeatures：\n\tCapacitive touch buttons \n\tTempered glass panel, PC alloy enclosure\n\tPrecise temperature calibration function\n\tAttractive appearance\n\tClear display, easy to operate \n\nSpecification:\n\tPower Supply：AC85-260V, 50/60HZ\n\tOutput: MH7H-WH ≤5A ; MH7H-EH≤ 16A\n\tSelf Consumption：≤1W\n\tExternal Temp. Sensor(optional): NTC  R25℃=15KΩ  \n        B25℃/50℃=3550K \n\tWorking Environment：0-50℃;  0-90% RH（Non-\n        condensation)\n\tTemperature Setting：5-37 ℃（41-99℉）（Adjustable）\n\tDimension：86* 86*15mm \n\tHole Pitch：60-61mm",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2900/MH7H User Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "In normal working interface, press & hold S4 to enter interface for adding or removing of Z-Wave network. Before device added into network, “- - -” will display on the screen. Then press S4 once, device will enter learning mode to get a node ID. If adding is succeed, a node ID will display on the screen in a few seconds. \n\nA node ID can always inform us whether the device is in the network or not.\n\nAfter adding, turn off the device and then turn it on. Now the device is ready to be operated by controller/ gateway in Z-Wave network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2900/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
              { label: "Energy Heat", value: "11" },
              { label: "Away", value: "13" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "11", label: "Energy Heat" },
              { index: "13", label: "Away" },
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
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy Heating",
            max: "0",
            min: "0",
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
            instance: "1",
            label: "Upload temperature format automatically",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Upload temperature format automatically",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
              { label: "Follow the main display", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Upload temperature and humidity automatically",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "Upload temperature and humidity automatically",
            Item: [
              { label: "OFF", value: "0" },
              { label: "Upload the difference value only", value: "1" },
              { label: "Timing upload mode only", value: "2" },
              { label: "Upload the difference+timing upload mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Upload temperature difference",
            max: "1000",
            min: "3",
            size: "2",
            type: "short",
            units: "",
            value: "5",
            Help: "Base on 0.1C unit, 5 by default, 5*0.1C=0.5C",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Upload time interval regularly",
            max: "65535",
            min: "19",
            size: "2",
            type: "short",
            units: "",
            value: "30",
            Help: "Base on 1s unit, it suggest to be set above 30s",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Upload humidity difference",
            max: "255",
            min: "2",
            size: "1",
            type: "byte",
            units: "",
            value: "3",
            Help: "Upload when percent difference exceeded",
          },
          {
            genre: "config",
            index: "255",
            instance: "1",
            label: "Factory setting",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Restore the factory setting - write only, set to 85 to reset",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic_Set", max_associations: "5" },
              { index: "3", label: "Basic_Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
