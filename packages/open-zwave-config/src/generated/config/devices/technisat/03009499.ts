import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0299:1A90:0002",
            name: "OzwInfoPage",
          },
          { text: "images/technisat/03009499.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3677/",
            id: "1000",
            name: "ZWProductPage",
            type: "0303",
          },
          {
            text:
              "TechniSat Single-Switch is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "Use this procedure only when the network primary controller is missing or otherwise inoperable.\n      1. Press and hold position T2 for more than 20 seconds.\n      2. The LED will alternately flash red and green for 5 seconds after a successful reset.",
            name: "ResetDescription",
          },
          { text: "0300/9496", id: "1000", name: "Identifier", type: "0303" },
          { text: "Shutter", name: "Name" },
          {
            text:
              "1. Install the TechniSat Single-Switch.\n      2. After checking the correct installation, re-enable electrical power at the main fuse or circuit breaker.\n      3. Start the Z-Wave device add mode on your Z-Wave gateway, according to the gateway‘s manual.\n      4. Press position T1 3x within 1 second.\n      5. The red status LED is on while the device is added to the Z-Wave network.\n      6. The green LED is on for 5 seconds after successfully adding the device.",
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
              "1. Start the Z-Wave device remove mode on your Z-Wave gateway, according to the gateway‘s manual.\n      2. Press and hold position T1 for more than 10 seconds.\n      3. The red status LED is on while the device is removed from the Z-Wave network.\n      4. The green LED is on for 5 seconds after successfully removing the device.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Designed as a drop-in replacement for your single wall switch from leading brand manufacturers, TechniSat's Single-Switch integrates your wall switch into the Smart Home future. Featuring Z-Wave SmartStart and S2 security for easy installation and secure operation, your wall switch can now be controlled from your Smart Home as well.\n       - Full manual operation\n       - can trigger central scenes via multiple button clicks\n       - Integrated 230 V auxiliary input for push buttons or toggle switch types, applicable in alternating switching and or intermediate switching circuits\n       - Short circuit and overload protection monitoring",
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
              "\n        3 to 8640 - Interval of unsolicited reports in 10s increments (30 seconds - 1 day)\n        0 - Disable unsolicited meter reports of current wattage.\n      ",
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
              "\n        Operations mode for push buttons controlling the output.\n         - Normal Switch: In this mode the top button will turn the output on, while the bottom button will turn the output off.\n         - Toogle Switch: In this mode any button press will toggle the output - when on it will be turned off, when off it will be turned on.\n      ",
            Item: [
              { label: "Normal Switch", value: "0" },
              { label: "Toogle Switch", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Parameter 5",
            size: "1",
            value: "0",
            Help:
              "\n        Configuration of switch type connected to extension input S.\n         - Normal Switch: Use this value if a toggle switch is connected to extension input S.\n         - Toogle Switch: Use this value if a push button switch is connected to extension input S.\n      ",
            Item: [
              { label: "Normal Switch", value: "0" },
              { label: "Toogle Switch", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Parameter 6",
            size: "1",
            value: "1",
            Help:
              "\n        Central Scene mapping of extension input S.\n         - Central Scene 1: Multiple button presses (2x-5x) on extension input S will trigger events of central scene 1.\n         - Central Scene 2: Multiple button presses (2x-5x) on extension input S will trigger events of central scene 2.\n         - Central Scene 3: Multiple button presses (2x-5x) on extension input S will trigger events of central scene 3 - an additional central scene exclusive to extension input S.\n      ",
            Item: [
              { label: "Central Scene 1", value: "1" },
              { label: "Central Scene 2", value: "2" },
              { label: "Central Scene 3", value: "3" },
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
