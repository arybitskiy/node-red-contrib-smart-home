import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0003:1000",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/ZME_06436.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/583/",
            id: "0003",
            name: "ZWProductPage",
            type: "1000",
          },
          { text: "ZME_05436", id: "0003", name: "Identifier", type: "1000" },
          {
            text:
              "This Z-Wave.Me switching Flush-Mountable  is intended to control window or door blinds.  \nA 230V powered pattress box is needed for installation. The Flush-Mountable has two buttons. \nIn order to use them for local control the insert needs to be completed with a switching paddle and a mounting frame of one of the DUWI switching series “Everlux” or “Arcada”.  \n\nTechnical Data:\n•\tPower rating: 230V, 50 Hz\n•\tSwitched load: up to 1800W motor\n•\tOutputs: 2 switches interlocked against each other\n•\tDuration of switching signal: 2 min.\n•\tLocal interaction: 2 buttons for inclusion, exclusion and association\n•\tDimensions: 48mmx52mmx27mm\n•\tPower supply:  via 230 V power\n•\tDistance: up to 100 m outdoor, up to 30 m within buildings",
            name: "Description",
          },
          {
            text: "http://www.pepper1.net/zwavedb/device/119",
            name: "ProductPage",
          },
          {
            text: "http://en.z-wave.me/content/z-wave-hardware",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "1000",
          },
          { text: "Z-Wave.Me - Flush Mountable Blind Control", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/583/xml",
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
            label: "Automatically open or close after",
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
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Full close time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "Second",
            value: "60",
            Help:
              "Time to go from opened to closed state. Used to estimate the current level. Note that in Permanent motion mode the reported value would a be Closed or Opened, while all Basic and Multilevel Set values (1-99, 255) would Open except 0 value that would Close.",
          },
          {
            genre: "config",
            index: "5",
            label: "Full open time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "Second",
            value: "60",
            Help:
              "Time to go from closed to open state. This value may differ from Full close time for some blinds due to gravity. Used to estimate the current level. Note that in Permanent motion mode the reported value would a be Closed or Opened, while all Basic and Multilevel Set values (1-99, 255) would Open except 0 value that would Close.",
          },
          {
            genre: "config",
            index: "6",
            label: "Node Id of the blocking device",
            max: "232",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Id of the device which commands would be interpreted not as Open/Close, but as block/unblock. Usefull with door opening detector: if the door is open, block the blind not to break shades while they move.",
          },
          {
            genre: "config",
            index: "7",
            label:
              "On which command from blocking node to enable the protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines which command from blocking device to interpret as closed door and hence, unprotected.",
            Item: [
              { label: "on On (default)", value: "0" },
              { label: "on Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Stop or Revert if opposite button is pressed",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Defines behaviour on open press while closing and vice versa. To allow Stop behavior when switched by remote, use Stop by Basic",
            Item: [
              { label: "Stop (by buttons and Binary) (Default)", value: "0" },
              { label: "Stop (by buttons, Binary and Basic)", value: "1" },
              { label: "Revert", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Invert open and close relays",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Allow exchanging open and close relays if blind control is wired to the motor incorrectly",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
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
              { label: "By double press and hold", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Action on button single press or hold",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines which command should be sent on button single press or hold. Basic commands are sent to Association group. Switch All commands are sent broadcast. ",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "Switch On, Off and dim using Basic Set(default)",
                value: "1",
              },
              { label: "Switch All On/Off", value: "1" },
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
              { label: "Switch On, Off and dim using Basic Set", value: "1" },
              { label: "Switch All On/Off", value: "1" },
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
              { label: "Switch All On only", value: "1" },
              { label: "Switch All On and Off", value: "255" },
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
                label: "Group 1",
                max_associations: "8",
              },
              { index: "2", label: "Group 2", max_associations: "8" },
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
