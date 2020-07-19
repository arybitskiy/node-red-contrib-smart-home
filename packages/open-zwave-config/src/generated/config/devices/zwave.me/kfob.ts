import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0001:0100",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/kfob.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/688/",
            id: "0001",
            name: "ZWProductPage",
            type: "0100",
          },
          { text: "KFOB", id: "0001", name: "Identifier", type: "0100" },
          {
            text:
              "The Z-Wave.Me Key Fob is a mobile Z-Wave device that can both control other Z-Wave devices and activate predefined scenes in an IP gateway. \n\nThe Key Fob can be used in five different modes:\n1)\tDirect Control of associated Devices with single Buttons \n2)\tDirect Control of associated Devices with two Buttons \n3)\tScene Activation in IP Gateway \n4)\tDirect Activation of preconfigured Scenes \n5)\tDirect Control of Devices in proximity",
            name: "Description",
          },
          { text: "Z-Wave.Me Key Fob", name: "Name" },
          { text: "Russia", id: "0001", name: "FrequencyName", type: "0100" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/688/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            label: "Button 1 and 3 pair mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In separate mode button 1 works with group 1, button 3 with groups 3. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button 1/3 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group 1, double click with group 3.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Modes for Button 2 and 4",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In separate mode button 2 works with group 2, button 4 with groups 4. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button 2/4 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group 2, double click with group 4.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Action on group 1",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In Switch On/Off only mode On command is sent on Dim Up, Off on Dim Down. In Scenes mode the scene ID sent is (10 * group + ActionID), where ActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 = Dim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene Activation", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Action on group 2",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In Switch On/Off only mode On command is sent on Dim Up, Off on Dim Down. In Scenes mode the scene ID sent is (10 * group + ActionID), where ActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 = Dim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene Activation", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Action on group 3",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In Switch On/Off only mode On command is sent on Dim Up, Off on Dim Down. In Scenes mode the scene ID sent is (10 * group + ActionID), where ActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 = Dim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene Activation", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Action on group 4",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In Switch On/Off only mode On command is sent on Dim Up, Off on Dim Down. In Scenes mode the scene ID sent is (10 * group + ActionID), where ActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 = Dim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene Activation", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Typical click timeout",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            units: "ms",
            value: "50",
            Help:
              " Typical time used to differentiate click, hold and double clicks 1-100 in 10 ms units (default is 50, that is equivalent to 500 ms)",
          },
          {
            genre: "config",
            index: "21",
            label: "Send the following Switch All commands",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Send the following Switch All ON/OFF commands",
            Item: [
              { label: "Switch Off only (default)", value: "1" },
              { label: "Switch On only", value: "2" },
              { label: "Switch On and Off", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Invert buttons",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Invert meaning of On/Dim up and Off/Dim down in pairs of buttons. This applies only to pairs in grouped mode. Buttons 1 and 2 will become Off/Dim down, buttons 3 and 4 On/Dim up.",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "24",
            label: "LED confirmation mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "To save batteries LED confirmation can be disabled.",
            Item: [
              { label: "No confirmations", value: "0" },
              { label: "Confirm button press", value: "1" },
              {
                label: "Confirm button press and delivery (default)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "25",
            label: "Blocks wake up even when wake up interval is set",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "If the KFOB wakes up and there is no controller nearby, several unsuccessful communication attempts will drain battery",
            Item: [
              { label: "Wakeup is blocked (default)", value: "0" },
              {
                label: "Wakeup is possible if configured accordingly.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Send unsolicited Battery Report on Wake Up",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "To same node as wakeup notification", value: "1" },
              { label: "Broadcast", value: "2" },
            ],
          },
        ],
      },
      { action: "add", id: "43", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                auto: "false",
                index: "1",
                label:
                  "Controlled by button 1 or single clicks of buttons 1 and 3",
                max_associations: "8",
              },
              {
                index: "2",
                label:
                  "Controlled by button 2 or single clicks of buttons 2 and 4",
                max_associations: "8",
              },
              {
                index: "3",
                label:
                  "Controlled by button 3 or double clicks of buttons 1 and 3",
                max_associations: "8",
              },
              {
                index: "4",
                label:
                  "Controlled by button 4 or double clicks of buttons 2 and 4",
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
