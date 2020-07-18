import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0007:0004",
            name: "OzwInfoPage",
          },
          { text: "images/popp/dwt.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3345/",
            id: "0007",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0007",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3345/DoorWindowSensor_POPE700892_UserManual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "POPP Door/Window Sensor is a small window position sensor for your smart home, it monitors window and their exact opening position and lets your know when a window is tilted or completely opened. It also supports connecting external binary sensors through the dry binary contact of the Door/ Window sensor.",
            name: "Description",
          },
          {
            text: "Tripple click the tamper switch",
            name: "ExclusionDescription",
          },
          { text: "Window/Door Sensor with Tilt Detection", name: "Name" },
          {
            text: "Tripple click the tamper switch",
            name: "InclusionDescription",
          },
          {
            text:
              "Once Cover is removed and tamper switch is tripped, push the tamper for 5 seconds until red LED blinks. Then release tamper and push it again for 5 seconds until LED blinks",
            name: "ResetDescription",
          },
          { text: "POPE700892", id: "0007", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3345/xml",
                author: "Tristan Crispijn",
                date: "2 Sep 2019",
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
            index: "1",
            genre: "config",
            label: "Sensor Operation Mode",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n        Defines if the internal magnet sensor or the external terminal input is detected and used to issue alarm notification. There is always one input active only. The other sensor input the deactivated.\n        Default Value: Internal Magnet Sensor Used\n      ",
            Item: [
              { label: "Internal Magnet Sensor Used", value: "0" },
              { label: "External Terminal Inputs Used", value: "1" },
            ],
          },
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Sensor State Polarity",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n        Defines the polarity of the magnet sensor.\n        Default Value: Closed when Magnet in proximity\n      ",
            Item: [
              { label: "Closed when Magnet in proximity", value: "0" },
              { label: "Opened when Magnet in proximity", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "3",
            genre: "config",
            label: "Visual LED Indications",
            units: "",
            min: "0",
            max: "255",
            value: "7",
            size: "1",
            Help:
              "\n        Defines when the red LED will indicate events. Disabling all indications may extend battery life.\n        Default Value: 7 (Bit 0, 1 and 2)\n\n        Bit 0: No Indications\n        Bit 1: Open/Close Status Change\n        Bit 2: Wake Up\n        Bit 4: Device Tampering\n      ",
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Range Test after double click",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n        Allows to enable the activation of a Z-Wave range test with double clicking the tamper switch.\n        Default Value: Disabled\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "2nd Association Group Trigger",
            units: "",
            min: "0",
            max: "2",
            value: "0",
            size: "1",
            Help:
              "\n        Defines the status of the magnet switch that causes sending a BASIC command to all devices of Association Group 2.\n        Default Value: Switch after Open and Close\n      ",
            Item: [
              { label: "Switch after Open and Close", value: "0" },
              { label: "Switch after Open", value: "1" },
              { label: "Switch after Close", value: "2" },
            ],
          },
          {
            type: "list",
            index: "6",
            genre: "config",
            label: "Defines which commands is sent to 2nd Association Group",
            units: "",
            min: "0",
            max: "2",
            value: "2",
            size: "1",
            Help:
              "\n        Defines which commands is sent to 2nd Association Group.\n        Default Value: On and Off\n      ",
            Item: [
              { label: "On", value: "0" },
              { label: "Off", value: "1" },
              { label: "On and Off", value: "2" },
            ],
          },
          {
            type: "byte",
            index: "7",
            genre: "config",
            label:
              "BASIC command value sent to 2nd Association Group on On event",
            units: "",
            min: "0",
            max: "255",
            value: "255",
            size: "1",
            Help:
              "\n        This is the BASIC command value sent in case of an On event.\n        Default Value: 255\n        Value Range: 0 - 99 and 255\n      ",
          },
          {
            type: "byte",
            index: "8",
            genre: "config",
            label:
              "BASIC command value sent to 2nd Association Group on Off event",
            units: "",
            min: "0",
            max: "255",
            value: "0",
            size: "1",
            Help:
              "\n        This is the BASIC command value sent in case of an Off event.\n        Default Value: 0\n        Value Range: 0 - 99 and 255\n      ",
          },
          {
            type: "short",
            index: "9",
            genre: "config",
            label: "Time Delay command frame Off",
            units: "seconds",
            min: "0",
            max: "32400",
            value: "0",
            size: "2",
            Help:
              "\n        Off command is sent after a delay in seconds\n        Default Value: 0\n      ",
          },
          {
            type: "short",
            index: "10",
            genre: "config",
            label: "Time Delay command frame Off",
            units: "seconds",
            min: "0",
            max: "32400",
            value: "0",
            size: "2",
            Help:
              "\n        Off command is sent after a delay in seconds\n        Default Value: 0\n      ",
          },
          {
            type: "short",
            index: "11",
            genre: "config",
            label: "Delay of Tamper Alarm Cancellation",
            units: "seconds",
            min: "0",
            max: "32400",
            value: "0",
            size: "2",
            Help:
              "\n        Time a tamper alarm is delayed in seconds.\n        Default Value: 0\n      ",
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Reporting Tamper Alarm Cancellation",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "\n        Defines if the alarm cancellation event is reported.\n        Default Value: Send Report\n      ",
            Item: [
              { label: "Do not send Report", value: "0" },
              { label: "Send Report", value: "1" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Central Scene Event Functionality",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n        Enables/disables the central scene function.\n        Default Value: Disabled\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Tilt Sensor Functionality",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "\n        Enables/disables tilt function.\n        Default Value: Enabled\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label:
                  "Control devices when magnet or external dry contacts trips",
              },
              {
                index: "3",
                max_associations: "5",
                label:
                  "Sends our alarm message when magnet controlled or external dry sensor trips",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Sends alarm messages when tamper is tripped",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
