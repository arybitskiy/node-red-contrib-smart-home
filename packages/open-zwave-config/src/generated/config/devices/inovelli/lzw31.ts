import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/031E:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/lzw31.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3442",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "https://inovelli.com/shop/smart-light-switches/zwave-smart-switches-gen2/pre-order-z-wave-dimmer-switch-no-neutral-required/",
            name: "ProductPage",
          },
          {
            text:
              "https://inovelli.com/shop/smart-light-switches/zwave-smart-switches-gen2/pre-order-z-wave-dimmer-switch-no-neutral-required/",
            name: "ProductSupport",
          },
          {
            text:
              "To Exclude your switch, put your HUB in exclusion mode and press the Configuration Button three (3) times.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3442/LZW31%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "You may factory reset the switch by holding down the Config Button for twenty (20) or more seconds. The LED Bar will turn Red and blink three (3) times to confirm.\n\nHowever, we recommend using a certified Z-Wave controller to remove the device from your network for factory resetting the switch.\n\nOnly use either of these procedures in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The Inovelli Dimmer has some amazing features such as a configuration button that allows you to change parameters without the need for a HUB. It also has an RGB LED bar that shows the dim level of the switch, the color and intensity can be changed and also has the ability to be off until the switch is manually dimmed.",
            name: "Description",
          },
          { text: "LZW31 Dimmer", name: "Name" },
          { text: "LZW31", id: "0001", name: "Identifier", type: "0003" },
          {
            text:
              "To include your switch, start the inclusion process on your HUB and tap the Configuration Button three (3) times.\n\nPlease Note: If this doesn't work, you can check to see if your switch is within Z-Wave Range by holding down the Configuration Button for 5-10 seconds (if it's not within range, the LED Bar will indicate Red and if it is within Range, the LED Bar will indicate Green). If your switch indicates Red, please move the switch closer to the HUB. If your switch indicates Green, please try running an Exclusion to reset your switch.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Release",
                author: "Eric Maycock - ericm@inovelli.com",
                date: "7 Nov 2019",
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
            genre: "config",
            type: "byte",
            size: "1",
            index: "1",
            label: "Dimming Speed",
            min: "0",
            max: "100",
            value: "3",
            Help:
              "\n      This changes the speed in which the attached light dims up or down. A setting of 0 should turn the light immediately on or off (almost like an on/off switch). Increasing the value should slow down the transition speed.\n      Range:0-100\n      Default: 3\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "2",
            label: "Dimming Speed (From Switch)",
            min: "0",
            max: "101",
            value: "101",
            Help:
              "\n      This changes the speed in which the attached light dims up or down when controlled from the physical switch. A setting of 0 should turn the light immediately on or off (almost like an on/off switch). Increasing the value should slow down the transition speed. A setting of 101 should keep this in sync with parameter 1.\n      Range:0-101\n      Default: 101\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "3",
            label: "Ramp Rate",
            min: "0",
            max: "101",
            value: "101",
            Help:
              "\n      This changes the speed in which the attached light turns on or off. For example, when a user sends the switch a basicSet(value: 0xFF) or basicSet(value: 0x00), this is the speed in which those actions take place. A setting of 0 should turn the light immediately on or off (almost like an on/off switch). Increasing the value should slow down the transition speed. A setting of 101 should keep this in sync with parameter 1.\n      Range:0-101\n      Default: 101\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "4",
            label: "Ramp Rate (From Switch)",
            min: "0",
            max: "101",
            value: "101",
            Help:
              "\n      This changes the speed in which the attached light turns on or off from the physical switch. For example, when a user presses the up or down button, this is the speed in which those actions take place. A setting of 0 should turn the light immediately on or off (almost like an on/off switch). Increasing the value should slow down the transition speed. A setting of 101 should keep this in sync with parameter 1.\n      Range:0-101\n      Default: 101\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "5",
            label: "Minimum Level",
            min: "1",
            max: "45",
            value: "1",
            Help:
              "\n      The minimum level that the dimmer allows the bulb to be dimmed to. Useful when the user has an LED bulb that does not turn on or flickers at a lower level.\n      Range:1-45\n      Default: 1\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "6",
            label: "Maximum Level",
            min: "55",
            max: "99",
            value: "99",
            Help:
              "\n      The maximum level that the dimmer allows the bulb to be dimmed to. Useful when the user has an LED bulb that reaches its maximum level before the dimmer value of 99.\n      Range:55-99\n      Default: 99\n      ",
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "7",
            label: "Invert Switch",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "\n      Inverts the orientation of the switch. Useful when the switch is installed upside down. Essentially up becomes down and down becomes up.\n      Range: 0-1\n      Default: 0\n    ",
            Item: [
              { value: "1", label: "Yes" },
              { value: "0", label: "No" },
            ],
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "8",
            label: "Auto Off Timer",
            min: "0",
            max: "32767",
            value: "0",
            Help:
              "\n      Automatically turns the switch off after this many seconds. When the switch is turned on a timer is started that is the duration of this setting. When the timer expires, the switch is turned off.\n      Range:0-32767\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "9",
            label: "Default Level (Local)",
            min: "1",
            max: "100",
            value: "0",
            Help:
              "\n      Default level for the dimmer when it is powered on from the local switch. A setting of 0 means that the switch will return to the level that it was on before it was turned off.\n      Range:1-100\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "10",
            label: "Default Level (Z-Wave)",
            min: "1",
            max: "100",
            value: "0",
            Help:
              "\n      Default level for the dimmer when it is powered on from a Z-Wave command. A setting of 0 means that the switch will return to the level that it was on before it was turned off.\n      Range:1-100\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "11",
            label: "State After Power Restored",
            min: "0",
            max: "100",
            value: "0",
            Help:
              "\n      The state the switch should return to once power is restored after power failure. 0 = off, 1-99 = level, 100=previous.\n      Range:0-100\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "12",
            label: "Association Behavior",
            min: "0",
            max: "15",
            value: "15",
            Help:
              "\n      When should the switch send commands to associated devices?  01 - local 02 - 3way 03 - 3way & local 04 - z-wave hub 05 - z-wave hub & local 06 - z-wave hub & 3-way 07 - z-wave hub & local & 3way 08 - timer 09 - timer & local 10 - timer & 3-way 11 - timer & 3-way & local 12 - timer & z-wave hub 13 - timer & z-wave hub & local 14 - timer & z-wave hub & 3-way 15 - all\n      Range: 0-15\n      Default: 15\n      ",
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "13",
            label: "LED Indicator Color",
            min: "0",
            max: "255",
            value: "170",
            Help:
              "\n      This is the color of the LED strip.\n      Range: 0 to 255\n      Default: 170\n      ",
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "14",
            label: "LED Strip Intensity",
            min: "0",
            max: "10",
            value: "5",
            Help:
              "\n      This is the intensity of the LED strip.\n      Range: 0-10\n      Default: 5\n    ",
            Item: [
              { value: "0", label: "0%" },
              { value: "1", label: "10%" },
              { value: "2", label: "20%" },
              { value: "3", label: "30%" },
              { value: "4", label: "40%" },
              { value: "5", label: "50%" },
              { value: "6", label: "60%" },
              { value: "7", label: "70%" },
              { value: "8", label: "80%" },
              { value: "9", label: "90%" },
              { value: "10", label: "100%" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "15",
            label: "LED Strip Intensity (When OFF)",
            min: "0",
            max: "10",
            value: "1",
            Help:
              "\n      This is the intensity of the LED strip when the switch is off. This is useful for users to see the light switch location when the lights are off.\n      Range: 0-10\n      Default: 1\n    ",
            Item: [
              { value: "0", label: "0%" },
              { value: "1", label: "10%" },
              { value: "2", label: "20%" },
              { value: "3", label: "30%" },
              { value: "4", label: "40%" },
              { value: "5", label: "50%" },
              { value: "6", label: "60%" },
              { value: "7", label: "70%" },
              { value: "8", label: "80%" },
              { value: "9", label: "90%" },
              { value: "10", label: "100%" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "17",
            label: "LED Strip Timeout",
            min: "0",
            max: "10",
            value: "3",
            Help:
              "\n      When the LED strip is disabled (LED Strip Intensity is set to 0), this setting allows the LED strip to turn on temporarily while being adjusted.\n      Range: 0-10\n      Default: 3\n    ",
            Item: [
              { value: "0", label: "Stay Off" },
              { value: "1", label: "1 Second" },
              { value: "2", label: "2 Seconds" },
              { value: "3", label: "3 Seconds" },
              { value: "4", label: "4 Seconds" },
              { value: "5", label: "5 Seconds" },
              { value: "6", label: "6 Seconds" },
              { value: "7", label: "7 Seconds" },
              { value: "8", label: "8 Seconds" },
              { value: "9", label: "9 Seconds" },
              { value: "10", label: "10 Seconds" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "21",
            label: "AC Power Type",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "\n      Configure the switch to use a neutral wire.\n      Range: 0-1\n      Default: 1\n    ",
            Item: [
              { value: "0", label: "Non Neutral" },
              { value: "1", label: "Neutral" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "22",
            label: "Switch Type",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "\n      Configure the type of 3-way switch connected to the dimmer.\n      Range: 0-2\n      Default: 0\n    ",
            Item: [
              { value: "0", label: "Load Only" },
              { value: "1", label: "3-way Toggle" },
              { value: "2", label: "3-way Momentary" },
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic_Set", max_associations: "5" },
              {
                index: "3",
                label: "Switch_MultiLevel_Set",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Switch_MultiLevel_Start/Stop",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
