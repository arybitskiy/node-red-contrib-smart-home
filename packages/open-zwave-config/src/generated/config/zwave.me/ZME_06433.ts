import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0002:1000",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/ZME_06433.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/19/",
            id: "0002",
            name: "ZWProductPage",
            type: "1000",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "1000",
          },
          {
            text:
              "This Z-Wave.Me dimming Flush-Mountable is intended to control lamps, both with resistive or inductive load.  \nA pattress box is needed for installation. The insert has two buttons. In order to use them for local control the Flush-Mountable needs to be completed with a switching paddle and a mounting frame of one of DUWIs switching series “Everlux” or “Arcada”.  The device is a conventional leading-edge phase control dimmer with support for inductive loads such as transformers. Additionally conventional resistive loads such as incandescent lamps or 230 V halogen lamps can be dimmed as well.\n\n\nTechnical Data:\n•\tPower rating: 230V, 50 Hz\n•\tWiring: 2-wire-system\n•\tMaximum loads: \n  -\t  Incandescent lamps: 40...300W\n  -\t  230V (HV) halogen: 40...300W\n  -\t  Low voltage halogen with standard transformer (inductive load): 30...300VA\n  -\t  Low voltage halogen with switched power supply (reactive load): no\n  -\t  Fluorescent light: 30…300VA, only dimmable lamps\n•\tInstallation: in pattress box\n•\tDistance: up to 30 m in buildings\n•\tDisplay: Multicolour-LED\n•\tInteraction: two buttons to be completed with switching paddle for local operation\n•\tPower supply: via 230 V power\n•\tDimensions: 48mmx48mmx23mm",
            name: "Description",
          },
          {
            text: "http://www.pepper1.net/zwavedb/device/122",
            name: "ProductPage",
          },
          {
            text: "http://en.z-wave.me/content/z-wave-hardware",
            name: "ProductSupport",
          },
          { text: "Z-Wave.Me Flush-Mountable Dimmer", name: "Name" },
          { text: "ZME_06433", id: "0002", name: "Identifier", type: "1000" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/19/xml",
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
            size: "1",
            type: "list",
            value: "3",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Show switch/dimmer state", value: "1" },
              { label: "Night mode (inverted switch state)", value: "2" },
              {
                label: "Operated by Indicator Command Class (default)",
                value: "3",
              },
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
              "If not zero, automatically switch off after a user defined time",
          },
          {
            genre: "config",
            index: "3",
            label: "What to do on RF off command",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines how to interpret RF Off command. Can be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics; Switch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time. Button off click will still work (if button operations are not disabled).",
            Item: [
              { label: "Switch off (default)", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              {
                label: "Switch on if load is off else switch off (v1.8)",
                value: "3",
              },
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
            label: "Dimmer speed",
            max: "255",
            min: "0",
            type: "byte",
            units: "x 10 milliseconds",
            value: "30",
            Help:
              "Time to dim on button presses and Set command (if it has no duration specified). If not 0, dimming will be done smoothly to preserve bulb life.",
          },
          {
            genre: "config",
            index: "6",
            label: "Dimming long speed",
            max: "255",
            min: "1",
            type: "byte",
            units: "Seconds",
            value: "3",
            Help:
              "Time to dim on button holds and StartLevel Change command (if it has no duration specified).",
          },
          {
            genre: "config",
            index: "7",
            label: "Set Maximum Light on On click",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines if the dimmer shall set maximum light level on On command. By default on On command dimmer restores last level. This parameter allows to configure to set maximum level on second On command (if already On) or to always switch on to maximum level.",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "If already in On state", value: "1" },
              { label: "Always", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Baby Dimming Time",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "Time to dim on double click Off  button for Baby- Dim function. This function works only if the load is operated by single press and hold button action. If enabled, the device will wait for a click timeout to see if the second click would be pressed. This will introduce a small delay for single click commands, unprotected.",
          },
          {
            genre: "config",
            index: "9",
            label: "Target Dimming Level for Baby Dimming",
            max: "99",
            min: "0",
            type: "byte",
            units: "dimmer level %",
            value: "0",
            Help:
              "Target level on which to stop while executing Baby Dimming. Can be 0 to completely switch off the light. ",
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
              { label: "No (default)", value: "0" },
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
              "Defines which command should be sent on button single press or hold. Basic and Scene Activation commands are sent to Association group. Use Scene Controller Conf to set up Scene ID for Scene Activation. Switch All commands are sent broadcast.",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "Send Basic Set and Switch Multilevel (v1.8)",
                value: "4",
              },
              { label: "Send Basic Set", value: "1" },
              { label: "Send Switch All", value: "2" },
              { label: "Send Scenes (v1.8)", value: "3" },
              { label: "Send Preconfigured Scenes (v1.8)", value: "5" },
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
              "Defines which command should be sent on button double press or press-hold. Basic and Scene Activation commands are sent to Association group. Use Scene Controller Conf to set up Scene ID for Scene Activation. Switch All commands are sent broadcast. If not disabled, the device will wait for a click timeout to see if the second click would be pressed. This will introduce a small delay for single click commands.",
            Item: [
              {
                label: "Disabled (don't wait for double click,default)",
                value: "0",
              },
              {
                label: "Send Basic Set and Switch Multilevel (v1.8)",
                value: "4",
              },
              { label: "Send Basic Set", value: "1" },
              { label: "Send Switch All", value: "2" },
              { label: "Send Scenes (v1.8)", value: "3" },
              { label: "Send Preconfigured Scenes (v1.8)", value: "5" },
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
          {
            genre: "config",
            index: "17",
            label: "Limit minimal light level (v1.8)",
            max: "95",
            min: "1",
            type: "byte",
            units: "dimmer level %",
            value: "1",
          },
          {
            genre: "config",
            index: "18",
            label: "Limit maximal light level (v1.8)",
            max: "99",
            min: "0",
            type: "byte",
            units: "dimmer level %",
            value: "99",
            Help:
              "Maximum level should be greater than minimal level. Set to 0 to work as a switch (off or full on only), or set to 10 - 99",
          },
          {
            genre: "config",
            index: "19",
            label: "Switch On on a defined level (v1.8)",
            max: "99",
            min: "0",
            type: "byte",
            units: "dimmer level %",
            value: "0",
            Help: "Set to 0 to use previous light level, or set to 1 - 99",
          },
          {
            genre: "config",
            index: "51",
            label: "Pause before pulse (v1.8)",
            max: "60",
            min: "1",
            type: "byte",
            units: "x 10/156 milliseconds",
            value: "28",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 1. For other bulbs use default value.",
          },
          {
            genre: "config",
            index: "52",
            label: "Pause after pulse (v1.8)",
            max: "60",
            min: "5",
            type: "byte",
            units: "x 10/156 milliseconds",
            value: "28",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 40. For other bulbs use default value.",
          },
          {
            genre: "config",
            index: "53",
            label: "Pulse width (v1.8)",
            max: "20",
            min: "3",
            type: "byte",
            units: "x 10/156 milliseconds",
            value: "10",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 20. For other bulbs use default value.",
          },
          {
            genre: "config",
            index: "54",
            label: "Pulse type (v1.8)",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean!",
            Item: [
              { label: "Long pulse", value: "0" },
              { label: "Short pulse", value: "1" },
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
