import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0175:0101:0100",
            name: "OzwInfoPage",
          },
          { text: "images/devolo/mt2652.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1143/",
            id: "0101",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text: "CEPT (Europe)",
            id: "0101",
            name: "FrequencyName",
            type: "0100",
          },
          {
            text:
              "Use this procedure only if the primary controller is missing or otherwise inoperable. \n(1) Turn the device into Management Mode by keeping all four buttons pushed for 5 seconds, (2) click on Button 3, (3) keep button 4 pushed for 4 seconds.",
            name: "ResetDescription",
          },
          {
            text:
              "Re-Inclusion and Exclusion are performed by pushing button 1 in management mode.  Pushing all four buttons for 5 sec. turns the device into management mode (indicated by blinking green LED).",
            name: "ExclusionDescription",
          },
          { text: "MT2652", id: "0101", name: "Identifier", type: "0100" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1143/SceneSwitch_Manual.docx",
            name: "ProductManual",
          },
          {
            text:
              "(1) Turn the device into Management Mode by keeping all four buttons pushed for 5 seconds, (2) click on Button 2.",
            name: "WakeupDescription",
          },
          {
            text:
              "Place your primary controller in inclusion mode by following the manufacturer's instructions, then activate inclusion on the wall controller by pressing any one of the four buttons for one second.  Inclusion mode is indicated by the red/green blinking of the LEDs until the timeout occurs after 10 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "The MT2652 Scene Switch is a Z-Wave device that can both control other Z-Wave devices and activate scenes. Although it is controlling other devices, the Wall Controller cannot act as Z-Wave network controller (primary or secondary) and will always need a Z-Wave network controller to be included into a Z-Wave network. The device can be used in different modes that are selected by configuration parameters:\n\nControl of groups of other Z-Wave devices using 'ON', 'OFF' and Dim commands.\nActivation of predefined scenes in Gateways or other Z-Wave devices.\nThis device support secure communication when included by a controller that also supports secure communication.",
            name: "Description",
          },
          { text: "Scene Switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1143/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
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
              "In separate mode button 1 works with group A, button 3 with groups C. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button 1/3 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group A, double click with group C.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (Default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Button 2 and 4 pair mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In separate mode button 2 works with control group B, button 4 with control group D. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button B/D are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group B, double click with group D.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (Default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Command to Control Group A",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group A when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Command to Control Group B",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group B when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Command to Control Group C",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group C when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Command to Control Group D",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group D when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
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
            Item: [
              { label: "Switch off only (Default)", value: "1" },
              { label: "Switch on only", value: "2" },
              { label: "Switch all on and off", value: "255" },
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
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "25",
            label: "Blocks wakeup even when wakeup interval is set",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "If the KFOB wakes up and there is no controller nearby, several unsuccessful communication attempts will drain battery",
            Item: [
              { label: "Wakeup is blocked", value: "0" },
              {
                label:
                  "Wakeup is possible if configured accordingly. (Default)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Send unsolicited Battery Report on Wake Up",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Item: [
              { label: "No", value: "0" },
              {
                label: "To same node as wake up notification (Default)",
                value: "1",
              },
              { label: "Broadcast to neighbours", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label: "Group A Button 1 or single clicks of buttons 1 and 3",
                max_associations: "10",
              },
              {
                index: "3",
                label: "Group B Button 2 or single clicks of buttons 2 and 4",
                max_associations: "10",
              },
              {
                index: "4",
                label: "Group C Button 3 or double clicks of buttons 1 and 3",
                max_associations: "10",
              },
              {
                index: "5",
                label: "Group D Button 4 or double clicks of buttons 2 and 4",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
