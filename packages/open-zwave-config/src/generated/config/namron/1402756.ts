import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Namron LED Dimmer Z-Wave 200W", name: "Name" },
          {
            text:
              "LED Z-Wave dimmer with smart  functionality and power consumption tackle most conditions such as LED, halogen or electronic transformer. Possibility of wireless control via central unit / gateway or pulse control by direct connection.\nTechnical description\n\nA trailing edge dimmer, for use with 230V Halogen, 230V LED and electronic transformers. Has built-in short cut protection in case of lamp failure. Only need L-conductor connected.",
            name: "Description",
          },
          { text: "images/namron/1402756.png", name: "ProductPic" },
          {
            text: "Double click on the reset button",
            name: "InclusionDescription",
          },
          {
            text: "Double click on the reset button",
            name: "ExclusionDescription",
          },
          { text: "Hold reset button for >5 secs", name: "ResetDescription" },
          { text: "1402756", id: "0002", name: "Identifier", type: "0202" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Handcrafted based on domoticz/Config/config-template.xml and Vendors product manual",
                author: "Per Weisteen - per@weisteen.net",
                date: "01 May 2020",
                revision: 1,
              },
              {
                text: "Add Product Pic",
                author: "Justin Hammond",
                date: "24 June 2020",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Saving state before power failure",
            size: "1",
            value: "0",
            Help:
              "\n              Saving state before power failure.\n            Default Not saved.\n        ",
            Item: [
              {
                label:
                  "State NOT saved at power failure, switch are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State NOT saved at power failure, switch are set to ON upon power restore",
                value: "1",
              },
              {
                label:
                  "State saved at power failure, switch are set to previous state upon power restore",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Send the notification",
            size: "1",
            value: "1",
            Help:
              "Enable/disable to send notification to the Group Lifeline when the load state changed.\n              When value set as 1, re-power on the dimmer, it will send Basic report automatically. \n\t\tDefault Enabled.\n        ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Send Switch Multilevel Report", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Dimming speed",
            min: "0",
            max: "100",
            value: "5",
            Help:
              "Dimming speed in seconds. Valid values is 0-100.\n\t\tDefault 5.\n        ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "External switch",
            size: "1",
            value: "0",
            Help:
              "\n          Enable or Disable external switch to pair network\n        ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Dimming mode",
            size: "1",
            value: "0",
            Help:
              "\n\t   Set the Dimming mode to be Linear or Logaritmic\n        ",
            Item: [
              { label: "Linear", value: "0" },
              { label: "Logaritmic", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Dimming brightness when dimmer is turned on",
            size: "1",
            min: "0",
            max: "99",
            value: "0",
            Help:
              "Setting brightness when turn on dimmer from off status.\n\t\tSetting of 0 means that the dimmer will use parameter 1.\n\t\tValid values: 0-99\n        ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Delay time when turned off",
            min: "0",
            max: "60",
            value: "0",
            Help:
              "\n           Setting delay time in seconds when load is turned off.\n\t\tValid values : 0-60 seconds\n        ",
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
              { index: "2", max_associations: "5", label: "Basic Set" },
              { index: "3", max_associations: "5", label: "Switch Multilevel" },
              { index: "4", max_associations: "5", label: "External Button" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
