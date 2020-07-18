import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            index: "1",
            label: "Sensitivity Level",
            value: "8",
            min: "8",
            max: "255",
            size: "1",
            Help:
              "\n        This parameter sets the sensitivity of the Motion Detector.\n        It is a unitless parameter ranging in values from 8 up to 255, with 8 being the highest sensitivity level and 255 being the lowest.\n        After physical installation, make sure the farthest part of the coverage area is still visible to the Motion Detector by adjusting this parameter.\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "2",
            label: "Motion Cleared Time Delay",
            value: "30",
            units: "Seconds",
            min: "5",
            max: "600",
            size: "2",
            Help:
              "\n        This parameters sets the amount of time after a motion event before the Motion Detector reports no activity to the main controller.\n        This also sets the amount of time before a BASIC_SET(00) command is sent to Association Group 2 to turn off any activated devices.\n        This value must be higher than the value of Parameter 6, and if this parameter is reset to default settings, Parameter 6 will also be reset.\n        See Group 2 on page for more information.\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "3",
            label: "Basic Set Level",
            value: "255",
            min: "0",
            max: "255",
            size: "1",
            Help:
              "\n        This parameter sets the value sent by the BASIC_SET command to Association Group 2.\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "4",
            label: "Motion Detection",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "\n        This setting enables or disables motion detection and light reporting.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "5",
            label: "Group 2 Ambient Light Threshold",
            value: "100",
            units: "Lux",
            min: "5",
            max: "1000",
            size: "2",
            Help:
              "\n        If Parameter 8 is enabled, this setting sets the light level below which the Motion Detector will send BASIC_SET commands to Association Group 2 when motion is detected.\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "6",
            label: "Retrigger Interval",
            value: "8",
            units: "Seconds",
            min: "1",
            max: "8",
            size: "1",
            Help:
              "\n        After each motion event, the Motion Detector is disabled for the amount of time set by this parameter before it can send out another Motion Detected Notification Report/Binary Sensor Report.\n        This value must be lower than the value of Parameter 2, and if this parameter is reset to default settings, Parameter 2 will also be reset.\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "7",
            label: "Light Sensing Interval",
            value: "180",
            units: "Seconds",
            min: "60",
            max: "3600",
            size: "2",
            Help:
              "\n        This parameter sets the amount of time between each successive ambient light level reading that is sent.\n        This value must be less than the Wakeup Interval Time (which is 43,200 seconds or 12 hours by default.)\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "Group 2 Ambient Light Threshold",
            min: "0",
            max: "1",
            size: "1",
            value: "0",
            Help:
              "\n        If this parameter is enabled, the Motion Detector will only send Basic Set commands to Associon Group 2 if the ambient light level is below the value set in Parameter 05.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "9",
            label: "Ambient Light Sensitivity Level",
            value: "100",
            units: "Lux",
            min: "0",
            max: "255",
            size: "1",
            Help:
              "\n        This Parameter sets the minimum change in ambient light level (in lux) the Motion Detector must detect before a Multilevel Sensor Report is sent to the main controller.\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "10",
            label: "Indicator LED",
            units: "level",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "\n        If this parameter is enabled, the LED INDICATOR will flash everytime there motion is detected.\n        If this is disabled, the LED INDICATOR will not flash to indicate motion events.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              { index: "2", max_associations: "5", label: "Basic Set" },
              {
                index: "3",
                max_associations: "5",
                label: "Notification Report",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Sensor Binary Report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
