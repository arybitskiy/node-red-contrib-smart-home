import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      { id: "49", Compatibility: [{ GetSupported: [false] }] },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Wind Gust Top Value",
            max: "8800",
            min: "0",
            size: "2",
            type: "short",
            value: "1000",
            Help:
              "\n                If the Wind Gust is Higher than the Parameter Value, a device triggers an Association.\n                0 to 8800 = value from 0.00 m/s to 88.00 m/s.\n                Default value 1000 (10,00 m/s).\n            ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Rain Rate Top Value",
            max: "30000",
            min: "0",
            size: "2",
            type: "short",
            value: "200",
            Help:
              "\n                If the Sensor Rain Rate is Higher than the Parameter Value, a device triggers an Association.\n                0 to 30000 = value from 0.00 mm/h to 300.00 mm/h.\n                Default value 200 (2,00 mm/h).\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Wind Gauge, Wind Gust",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If the Wind Gust is Higher than the Parameter No. 1 Value, then a Device sends Basic Set",
            Item: [
              { label: "0x00", value: "0" },
              { label: "0xFF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Rain Gauge, Rain Rate",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If the Rain amount is Higher than the Parameter No. 2 Value, then a Device sends Basic Set",
            Item: [
              { label: "0x00", value: "0" },
              { label: "0xFF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "End point 1 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "End point 2 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "End point 3 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "End point 4 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "End point 5 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "End point 6 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "End point 7 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "End point 8 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "End point 9 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "End point 10 - Unsolicited Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If you enable Unsolicited Reports on the End Points, the USB Key will send data to the controller every time it receives data from the 433MHz sensors, which are different from the precious data.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Random ID Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                If Random ID is disabled, the Weather Station USB Key can receive data from multiple 433 MHz Sensors on the same Channel.\n                If the Random ID is enabled, the USB Key can receive data from only one sensor on the same channel.\n                If the USB Key does not receive a data from a sensor on a specific channel for more than 2.5 hours, it clears the Random ID of the device and waits for a new ID.\n                If you replace the batteries in the modules, the Random ID will change.\n                If you want that the USB Key accept a module immediately, set the Parameter No. 15 to 0 and in the next step again to 1.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "250",
            instance: "1",
            label: "Insecure / Secure Inclusion",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                The Weather Station Key supports both, the secure and unsecure inclusion.\n                Even if the controller does not support security command classes, the Key could be included as unsecure and keep all the functionality.\n                By default, the Key includes as insecure. To include the Key as secure follow the procedure:\n                1. Include the Key into the controller.\n                2. Set the parameter 250 to the value 1.\n                3. Enable add/remove mode on main controller.\n                4. Hold service button S between 1.5 and 4 seconds to exclude the module.\n                5. If the exclusion of the module was successful, the LED on the module starts blinking.\n                6. Unplug the module out of the power supply.\n                7. enable add/remove mode on main controller.\n                8. Plug the module into the power supply to star auto-inclusion.\n                9. Now the module should be included as secure.\n                The same procedure is to include the module as unsecure.\n            ",
            Item: [
              { label: "Insecure Inclusion", value: "0" },
              { label: "Secure Inclusion", value: "1" },
            ],
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
              { index: "2", label: "Wind Gauge alert", max_associations: "16" },
              { index: "3", label: "Rain rate alert", max_associations: "16" },
            ],
          },
        ],
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
    ],
  },
};

export default config;
