import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0002:000C",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa012.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3866/",
            id: "0002",
            name: "ZWProductPage",
            type: "000C",
          },
          { text: "Door / Window Sensor 7 Pro", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "000C",
          },
          { text: "ZWA012-C", id: "0002", name: "Identifier", type: "000C" },
          {
            text:
              "Aeotec Door/ Window Sensor 7 Pro is built on the 700 series Z-Wave technology. \n      Its a small window position sensor for your smart home, it monitors window and their exact opening position and lets your know when a window is tilted or completely opened. \n      It also supports connecting external binary sensors with a dry contact through the dry binary contact of the Door/ Window sensor. \n      Using the latest technology it supports the highest Z-Wave security level of S2 and SmartStart.",
            name: "Description",
          },
          { text: "Press the tamper once", name: "WakeupDescription" },
          {
            text:
              "1. Open the housing.\n      2. Remove the battery protection.\n      3. Press the tamper on the side of the appliance three times quickly.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Open the housing.\n      2. Press the tamper on the side of the appliance three times quickly.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset to factory default\n      This device also allows to be reset without any involvement of a Z-Wave controller. This procedure should only be used when the primary controller is inoperable.\n      Once Cover is removed and the tamper switch is tripped, push the tamper for 5 seconds until the RED LED\n      blinks once. Then release tamper and push it again for 5 seconds while the RED LED is blinking until the\n      GREEN LED blinks once.",
            name: "ResetDescription",
          },
          {
            text:
              "https://aeotec.freshdesk.com/support/solutions/folders/6000237099",
            name: "ProductManual",
          },
          {
            text:
              "https://aeotec.freshdesk.com/support/solutions/folders/6000237099",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Config File",
                author: "Justin Hammond",
                date: "06 July 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Sensor Operation Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines if the internal magnet sensor or the external terminal input is detected and used to issue alarm notification. \n      There is always one input active only. \n      The other sensor input the deactivated.\n      ",
            Item: [
              { label: "Internal Magnet Sensor Used", value: "0" },
              { label: "External Terminal Inputs Used", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Sensor State Polarity",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the polarity of the magnet sensor.\n      ",
            Item: [
              { label: "Closed when Magnet in proximity", value: "0" },
              { label: "Opened when Magnet in proximity", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Visual LED indications",
            max: "7",
            min: "0",
            size: "1",
            type: "bitset",
            value: "7",
            bitmask: "23",
            Help:
              "This parameter defines when the red LED will indicate events. Disabling all indications may extend battery life.\n      ",
            BitSet: [
              { id: "1", Label: "No Indications", Help: "No Indications" },
              {
                id: "2",
                Label: "Open/Close Status Change",
                Help: "Open/Close Status Change",
              },
              { id: "3", Label: "Wake Up", Help: "Wake Up" },
              { id: "5", Label: "Device Tampering", Help: "Device Tampering" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Range test after double click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Allows to enable activation of Z-Wave range test with double click of a Tamper Switch.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "2nd Association Group triggers",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the status of the magnet switch that causes sending a BASIC command to all devices of Association Group 2.\n      ",
            Item: [
              { label: "Switch after opening and closing", value: "0" },
              { label: "Switch after opening", value: "1" },
              { label: "Switch after closing", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Commands sent to 2nd Association Group",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "Command frames sent to devices added to the 2nd association group.\n      ",
            Item: [
              { label: "On", value: "0" },
              { label: "Off", value: "1" },
              { label: "On and Off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label:
              "BASIC command value sent to 2nd Association Group on On event",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "The value of 0 turns OFF the device, 255 turns it On.\n            In case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an Associated device to a specified level.\n      ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label:
              "BASIC command value sent to 2nd Association Group on Off event",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "The value of 0 turns OFF the device, 255 turns it On.\n            In case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an Associated device to a specified level.\n      ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Time delay of ON command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time period after which On command frame will be sent.\n      ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Time delay of OFF command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time period after which Off command frame will be sent.\n      ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Delay of tamper alarm cancellation",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "5",
            Help:
              "Time period after which a tamper alarm will be cancelled.\n      ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Reporting tamper alarm cancellation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Reporting cancellation of tamper alarm to the controller and 5th Association Group.\n      ",
            Item: [
              { label: "Do not send tamper cancellation report", value: "0" },
              { label: "Send tamper cancellation report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Scene activation functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter enables/disables the central scene function.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Tilt Sensor Functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "This parameter enables/disables the tilt function.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Tilt sensitivity",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "50",
            Help:
              "You can use this parameter to adjust the tilt sensitivity if the tilt is too low or too high.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control", max_associations: "5" },
              { index: "3", label: "Alarm sensor", max_associations: "5" },
              { index: "4", label: "Alarm tamper", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
