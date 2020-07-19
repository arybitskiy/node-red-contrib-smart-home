import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:0006:0200",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-ms01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2305/",
            id: "0006",
            name: "ZWProductPage",
            type: "0200",
          },
          { text: "HKZW-MS01", id: "0006", name: "Identifier", type: "0200" },
          {
            text:
              "Remove for exclusion;\n1.\tInsert two CR123A batteries.\n2.\tSet the Z-Wave network main controller into removing mode (see Z-Wave controller operating manual).\n3.\tTriple clicking the Z-button.\n4.\tIf the removing is successful, the LED will blink slowly for 5 seconds and then turn off, otherwise you need to repeat the process from step 2.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0006",
            name: "FrequencyName",
            type: "0200",
          },
          {
            text:
              "2.\tAdd for inclusion (non-security):\n1) Insert two CR123A batteries.\n2) Set the Z-Wave network main controller into learning mode (see Z-Wave network controller operating manual).\n3) Triple clicking the Z-button.\n4) If the inclusion is successful, the LED will blink less than 5 seconds and then keep on for 3 seconds, otherwise the LED will blink 5 seconds and then turn off, in which you need to repeat the process from step 2.\nAdd for inclusion (security): \n1) Insert two CR123A batteries.\n2) Set the Z-Wave network main controller into learning mode (see Z-Wave network controller operating manual).\n3) Press and hold the Z-button for 3 seconds.\n4) If the inclusion is successful, the LED will blink fast for less than 5 seconds and then keep on for 3 seconds, otherwise the LED will blink fast for 5 seconds and then turn off, in which you need to repeat the process from step 2.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the Z-button for 20 seconds,\nMultisensor will send “Device_Reset_Locally” to the main controller and exclude from the Z-Wave network when the Z-Button is released, this procedure will reset the Sensor to factory default.\nPlease include a request to use the reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "Multisensor", name: "Name" },
          {
            text:
              "Multisensor is a universal Z-Wave device. Along with detecting motion the device measures the temperature, humidity and luminance . It can communicate with associated Z-Wave devices, such as Siren, Smart Switch, etc.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2305/HKZW-MS01 MANUL.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2305/xml",
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
        id: "112",
        Value: [
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Motion sensors sensitivity",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "8",
            Help:
              "\n                Level 0 to 8.\n                0 Disabled.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Motion detection blind time",
            max: "28800",
            min: "3",
            size: "2",
            type: "short",
            units: "seconds",
            value: "30",
            Help: "Insensitivity",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "BASIC SET command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/Disable BASIC SET command",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Value of the BASIC SET",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Send BASIC SET VALUE = 255 to nodes associated with group 2 when door/window is opened.\n                Send BASIC SET VALUE = 0 to nodes associated with group 2 when door/window is closed.",
            Item: [
              { label: "Basic On", value: "0" },
              { label: "Basic Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Level of low battery",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            units: "%",
            value: "20",
            Help: "The low level from 10% to 50%",
          },
          {
            genre: "config",
            index: "170",
            instance: "1",
            label: "Reset param 171 to 174",
            max: "85",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            write_only: "true",
            Help: "",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Do reset", value: "85" },
            ],
          },
          {
            genre: "config",
            index: "171",
            instance: "1",
            label: "Battery report interval",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "1800",
            Help: "The interval of sending battery report",
          },
          {
            genre: "config",
            index: "172",
            instance: "1",
            label: "Temperature report interval",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "1800",
            Help: "The interval of sending temperature report",
          },
          {
            genre: "config",
            index: "173",
            instance: "1",
            label: "Humidity report interval",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "1800",
            Help: "The interval of sending Humidity report",
          },
          {
            genre: "config",
            index: "174",
            instance: "1",
            label: "Luminance report interval",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "1800",
            Help: "The interval of sending luminance report",
          },
          {
            genre: "config",
            index: "181",
            instance: "1",
            label: "Battery report threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "The change in battery level resulting in battery report being sent to the main controller.",
          },
          {
            genre: "config",
            index: "182",
            instance: "1",
            label: "Temperature report threshold",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "degree/10",
            value: "20",
            Help:
              "\n                0 reports are not sent.\n                1 to 255 the change in temperature level resulting in temperature report being sent to the main controller.\n            ",
          },
          {
            genre: "config",
            index: "183",
            instance: "1",
            label: "Humidity report threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "\n                0 reports are not sent.\n                1 to 100 the change in humidity level resulting in humidity report being sent to the main controller.\n            ",
          },
          {
            genre: "config",
            index: "184",
            instance: "1",
            label: "Luminance report threshold",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "lux",
            value: "200",
            Help:
              "\n                0 Reports are not sent.\n                1 to 65535 the change in luminance level resulting in luminance report being sent to the main controller.\n            ",
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
              { index: "2", label: "BASIC SET command", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
