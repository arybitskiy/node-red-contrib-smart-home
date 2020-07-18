import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0079:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw121.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1963/",
            id: "0079",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, press the Action Button on the LED Strip Controller.",
            name: "InclusionDescription",
          },
          { text: "LED Strip", name: "Name" },
          {
            text:
              "Press and hold the Action Button on the LED Strip Controller for 20 seconds and then release it.\nUse this procedure only in the event that your primary network controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2000/LED Strip manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Aeotec LED Strip is a multi-coloured LED Strip which allows control (on/off/dim/colour change) via wireless Z-Wave commands. \nThe LED Strip can also communicate securely via AES 128 wireless Z-Wave commands and supports Over-The-Air (OTA) firmware upgrades.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0079",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, press the Action Button on the LED Strip Controller.",
            name: "ExclusionDescription",
          },
          { text: "ZW121-A", id: "0079", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/1999/",
            id: "0079",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text: "Australia / New Zealand",
            id: "0079",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "ZW121-B", id: "0079", name: "Identifier", type: "0203" },
          {
            text: "https://products.z-wavealliance.org/products/2000/",
            id: "0079",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "ZW121-C", id: "0079", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "0079",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1963/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1999/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2000/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
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
            genre: "config",
            index: "20",
            instance: "1",
            label: "Re-power On state",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "The LED Strip state after re-power on it.",
            Item: [
              { label: "The last state before re-power on", value: "0" },
              { label: "Always On", value: "1" },
              { label: "Always Off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Report when the color is changed",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable to send out a report when the color is changed",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Hail CC", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "Get the LED Strip color value",
            read_only: "true",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n                Get the LED Strip color value\n                Value 1: (msb) Reserved\n                Value 2: Red color value\n                Value 3: Green color value\n                Value 4: Blue color value\n            ",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Restore last brightness level",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable to turn on the last brightness level of the LED Strip when using the Color Switch Set CC to change its color",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Configure the display mode of Cold/Warm white",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Configure the display mode of Cold/Warm white",
            Item: [
              { label: "Arbitrary combination", value: "0" },
              { label: "Complementary combination", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "Colorful mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Reboot/save/exit Colorful mode",
            Item: [
              { label: "Un-reboot", value: "0" },
              { label: "Reboot", value: "1" },
              { label: "Exit", value: "2" },
              { label: "Save and exit", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "37",
            label: "Colorful mode configuration",
            type: "int",
            units: "",
            value: "157483008",
            Help:
              "\n                Will set the LED Strip into different modes.\n                See the table in documentation\n            ",
          },
          {
            genre: "config",
            index: "38",
            label: "Change speed",
            type: "int",
            units: "",
            value: "50332416",
            Help:
              "\n                Value 1: (msb) The speed from OFF to ON.\n                Value 2: The speed from ON to OFF.\n                Value 3: Pause time of ON.\n                Value 4: Pause time of OFF.\n            ",
          },
          {
            genre: "config",
            index: "39",
            label: "Color index configuration in Multi color mode",
            type: "int",
            units: "",
            value: "805306368",
            Help:
              "\n                Can be used to set the 8 color index when the Bulb is in Multi color mode.\n                See the table in documentation\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Colorful mode",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Reboot/save/exit Colorful mode",
            Item: [
              { label: "Rainbow mode", value: "1" },
              { label: "Mutil color mode", value: "2" },
              { label: "Fade out and fade in (Red)", value: "3" },
              { label: "Fade out and fade in (Green)", value: "4" },
              { label: "Fade out and fade in (Blue)", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "Send notifications Group 1",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable to send notifications to associated devices (Group 1) when the state of LED Strip is changedd",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Hail CC", value: "1" },
              { label: "Basic CC report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "112",
            instance: "1",
            label: "Dimmer mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help: "",
            Item: [
              { label: "Parabolic curve", value: "0" },
              { label: "Index curve", value: "1" },
              { label: "(Parabolic + Index)/2", value: "2" },
              { label: "Linear", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Configuration Locked",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/disable Configuration Locked",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Retransmit", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
