import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0299:1A93:0005",
            name: "OzwInfoPage",
          },
          { text: "images/technisat/03009496.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3778/",
            id: "1000",
            name: "ZWProductPage",
            type: "0303",
          },
          {
            text:
              "TechniSat Shutter is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "Use this procedure only when the network primary controller is missing or otherwise inoperable. 1. When the roller shutter is in the lowermost position, press and hold T2 for more than 20 seconds. 2. The LED will alternately flash red and green for 5 seconds after a successful reset.",
            name: "ResetDescription",
          },
          { text: "0300/9496", id: "1000", name: "Identifier", type: "0303" },
          { text: "Shutter", name: "Name" },
          {
            text:
              "1. Install the TechniSat Shutter.\n      2. After checking the correct installation, re-enable electrical power at the main fuse or circuit breaker.\n        3. Start the Z-Wave device add mode on your Z-Wave gateway, according to the gateway‘s manual.\n        4. Press T1 3x within 1 second.\n        5. The red status LED is on while the device is added to the Z-Wave network.\n        6. The green LED is on for 5 seconds after successfully adding the device.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3778/Manual_SMD01_Shutter.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0303",
          },
          {
            text:
              "1. Start the Z-Wave device remove mode on your Z-Wave gateway, according to the gateway‘s manual.\n      2. When the roller shutter is in the uppermost position, press and hold T1 for more than 10 seconds.\n      3. The red status LED is on while the device is removed from the Z-Wave network.\n      4. The green LED is on for 5 seconds after successfully removing the device.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Designed as a drop-in replacement for your shutter wall switch from leading brand manufacturers, TechniSat's Shutter-Switch integrates your wall switch into the Smart Home future. Featuring Z-Wave SmartStart and S2 security for easy installation and secure operation, your shutter switch can now be controlled from your Smart Home as well.\n        - Full manual operation\n        - can trigger central scenes via multiple button clicks\n        - Short circuit and overload protection monitoring",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial file based on z-wavealliance.org",
                author: "Mathis Klooss - ozw@gunah.eu",
                date: "13 Jun 2020",
                revision: 1,
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Parameter 1",
            size: "1",
            value: "1",
            Help:
              "\n        Enable/disable central scene notifications for 2x-5x button presses.\n      ",
            Item: [
              { label: "disable central scene", value: "0" },
              { label: "enable central scene", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Parameter 2",
            value: "3",
            min: "0",
            max: "8640",
            Help:
              "\n        3 to 8640 - Interval of current wattage meter reports in 10 seconds increments.\n        0 - Disable unsolicited meter reports of current wattage.\n      ",
          },
          {
            type: "int",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Parameter 3",
            value: "60",
            min: "0",
            max: "30240",
            Help:
              "\n        Interval of active energy meter reports in minutes.\n         - 10 to 30240 - Interval of active energy meter unsolicited reports in minutes (10 minutes - 3 weeks)\n         - 0 - Disable unsolicited meter reports of active energy.\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Parameter 4",
            size: "1",
            value: "0",
            Help:
              "\n        Setting this parameter to 1 will start a manual shutter calibration.\n      ",
            Item: [
              { label: "Default", value: "0" },
              { label: "manual shutter calibration", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic on/off", max_associations: "16" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
