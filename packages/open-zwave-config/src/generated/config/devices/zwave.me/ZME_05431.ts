import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0001:1000",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/ZME_05431.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/20/",
            id: "0001",
            name: "ZWProductPage",
            type: "1000",
          },
          { text: "ZME_06431", id: "0001", name: "Identifier", type: "1000" },
          {
            text: "http://www.pepper1.net/zwavedb/device/117",
            name: "ProductPage",
          },
          {
            text:
              "This Z-Wave.Me switching Flush-Mountable is intended to control all kinds of electrical loads. A 230V powered pattress box is needed for installation. The Flush-Mountable has two buttons. In order to use them for local control the Flush-Mountable needs to be completed with a switching paddle and a mounting frame of one of the DUWI switching series “Everlux” or “Arcada”. \n\nTechnical data of the hardware:\n•\tPower rating: 230V, 50 Hz\n•\tWiring: 3-wire-system\n•\tMaximum loads: 2300W\n•\tInstallation: in pattress box\n•\tDistance:  up to 30 m in buildings\n•\tDisplay: Multicolour-LED\n•\tInteraction: two buttons to be completed with switching paddle for local operation\n•\tPower supply: via 230 V power\n•\tDimensions: 48mmx48mmx23mm",
            name: "Description",
          },
          { text: "Z-Wave.Me Flush-Mountable Switch", name: "Name" },
          {
            text: "http://en.z-wave.me/content/z-wave-hardware",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "1000",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/20/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            label: "Set LED indication mode",
            max: "99",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Show switch/dimmer state / when in motion or inactive (for blinds)",
                value: "1",
              },
              { label: "Night mode (inverted switch state)", value: "2" },
              {
                label: "Operated by Indicator Command Class (default)",
                value: "3",
              },
              { label: "Show if not closed (for blinds only)", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Automatically switch off after",
            max: "65535",
            min: "0",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "If not zero, automatically switch off/close blind after a user defined time",
          },
          {
            genre: "config",
            index: "3",
            label: "What to do on RF off command",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "If not zero, automatically switch off/close blind after a user defined time",
            Item: [
              { label: "Switch off (default)", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Ignore Start Level",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines if the dimmer shall ignore start level in StartLevelChange command despite it is specified or not.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes (default)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Restore switch state after power cycle",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines if the switch should restore switch state to the last state prior to device power off (power cycle).",
            Item: [
              { label: "No, turn OFF", value: "0" },
              { label: "Yes (default)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Typical click timeout",
            max: "100",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "50",
            Help:
              "Typical time used to differentiate click, hold, double and triple clicks.",
          },
          {
            genre: "config",
            index: "11",
            label: "Invert buttons",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "No default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Switch by buttons",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "If disabled, the local operations by buttons will not switch the load, but only send commands to On/Off association group. In  this mode buttons are not linked with the switch anymore. They can be used separately: buttons to control remote device, switch will operate by RF commands only. ",
            Item: [
              { label: "No", value: "0" },
              { label: "By single press and hold (default)", value: "1" },
              { label: "By double press and hold", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Action on button single press or hold",
            size: "1",
            type: "list",
            value: "4",
            Help:
              "Defines which command should be sent on button single press or hold. Basic commands are sent to Association group. Switch All commands are sent broadcast. ",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (Default)",
                value: "4",
              },
              { label: "Switch On, Off and dim using Basic Set", value: "1" },
              { label: "Switch All On/Off", value: "2" },
              { label: "Send Scenes", value: "3" },
              { label: "Send Predefined Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Action on button double press or hold",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines which command should be sent on button double press or press-hold. Basic commands are sent to Association group.   Switch   All commands are sent broadcast. If not disabled, the device will wait for a click timeout to see if the second click would be pressed. This will introduce a small delay for single click commands.",
            Item: [
              {
                label: "Disabled (don't wait for double click,default)",
                value: "0",
              },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "4",
              },
              { label: "Switch On, Off and dim using Basic Set", value: "1" },
              { label: "Switch All On/Off", value: "2" },
              { label: "Send Scenes", value: "3" },
              { label: "Send Predefined Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Send the following Switch All commands",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "Switch All Off only (default)", value: "1" },
              { label: "Switch All On only", value: "2" },
              { label: "Switch All On and Off", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "What to do on button Down press",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "Switch off (Default)", value: "0" },
              { label: "Switch All On only", value: "1" },
              { label: "Switch on", value: "2" },
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
              {
                auto: "false",
                index: "1",
                label: "Group 1 Single press and hold of up/down buttons",
                max_associations: "8",
              },
              {
                index: "2",
                label: "Group 2 Double press and press-hold of up/down buttons",
                max_associations: "8",
              },
              {
                auto: "true",
                index: "3",
                label: "Lifeline",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
