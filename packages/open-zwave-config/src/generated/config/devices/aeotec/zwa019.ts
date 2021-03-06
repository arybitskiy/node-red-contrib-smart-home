import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0002:0013",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa019.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3872/",
            id: "0002",
            name: "ZWProductPage",
            type: "0013",
          },
          { text: "Water Sensor 7 Pro", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0013",
          },
          { text: "ZWA019-C", id: "0002", name: "Identifier", type: "0013" },
          {
            text:
              "The Water Sensor 7 pro brings more safety into your home. \n      With its flexible sensor probe and the sensitive sensor point it detects the presence and absence of water at any given location. \n      Furthermore the Watersensor 7 pro is enabled to accurately measure the temperature and humidity of its environment, so you are always informed about your room climate.\n      Thanks to the latest Z-Wave 700 series technology, the Water Sensor 7 is distinguished with and increased range, S2 Security, OTA FW update and SmartStart.",
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
              "https://aeotec.freshdesk.com/support/solutions/folders/6000236794",
            name: "ProductManual",
          },
          {
            text:
              "https://aeotec.freshdesk.com/support/solutions/folders/6000236794",
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
                Label: "Water Leakage Status Change",
                Help: "Water Leakage Status Change",
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
              "This parameter defines the status of the water leakage that causes sending a BASIC command to all devices of Association Group 2.\n      ",
            Item: [
              {
                label: "Switch after Water Leakage Start and Stop",
                value: "0",
              },
              { label: "Switch after Water Leakage Start", value: "1" },
              { label: "Switch after Water Leakage Stop", value: "2" },
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
              "This parameter defines if the alarm cancellation event is reported.\n      ",
            Item: [
              { label: "Do not send Report", value: "0" },
              { label: "Send Report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Minimum Temperature change to report",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "20",
            Help:
              "This value defines the minimum change of temperature to cause an unsolicited report of humidity to the central controller using Lifeline.\n      If the value is set to 0, there will be no reports sent to the controller, when the temperature changes. However, periodic reports, managed by configuration parameter 18, may still be active.\n      ",
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Minimum humidity change to report",
            max: "20",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "This value defines the minimum change of humidity to cause an unsolicited report of humidity to the central controller using Lifeline.\n      If the value is set to 0, there will be no reports sent to the controller, when the humidity changes. However, periodic reports, managed by configuration parameter 18, may still be active.\n      ",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Periodic Reports",
            max: "65535",
            min: "900",
            size: "4",
            type: "int",
            units: "seconds",
            value: "43200",
            Help:
              "This parameter defines the time interval to send an unsolicited report.\n      If the value is set to 0, there will be no periodic reports sent to the controller. However, reports on temperature/humidity changes, managed by configuration parameters 16 and 17, may still be active.\n      ",
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
