import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Double Switch", name: "Name" },
          {
            text:
              "PRODUCT FEATURES:\n- Manual or Z-Wave control of 2 separate loads (dimmer + relay)\n- Perfect replacement for a fan / light combo (neutral wire required)\n- Scene control for multi-tap scenarios on select hubs\n- Quick and easy pigtail wire installation (single pole only)\n- 4-color LED indicator and air-gap switch for added safety\n- Fully customizable dimming features including ramp rate, on\nbrightness level, and double tap to full brightness\n- Remembers and restores on/off status after power failure\n- Built-in Z-Wave Plus signal repeater to extend network range\n- S2 security protocol and 500 Z-Wave chip\n\nSPECIFICATIONS:\n- Model Number: ZEN30\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 120 VAC, 60 Hz\n- Dimmer Max Load: 75 W LED, 250 W incandescent; DON’T use with tube lights, DC powered fixtures, or chandeliers\n- Relay Max Load: 15 A (1/2 HP)\n- Operating Temperature: 32-104° F (0-40° C)\n- Installation and Use: Indoor only",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/027a:a008:a000",
            name: "OzwInfoPage",
          },
          { text: "http://www.getzooz.com/", name: "ProductPage" },
          {
            text: "http://www.support.getzooz.com/kb/section/134",
            name: "ProductSupport",
          },
          { text: "images/zooz/zen30.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3791/zooz-s2-double-switch-zen30-ver1-manual-online.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Initiate inclusion (pairing) in the app (or web interface) of your hub.  2. Tap the upper paddle on the switch 3 times quickly.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Bring your Z-Wave gateway (hub) close to the switch if possible.\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that?\task@getzooz.com)\n3. Tap the lower paddle on the switch 3 times quickly\n4. Your hub will confirm exclusion and the device will disappear from your controller's device list",
            name: "ExclusionDescription",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, press and hold the lower paddle on the dimmer for at least 15 seconds until the LED indicators start flashing, then release.  Then immediately press and hold the upper paddle on the dimmer for at least 15 seconds.  The LED indicators will flash again to confirm successful reset.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3791",
            id: "A008",
            name: "ZWProductPage",
            type: "A000",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "A008",
            name: "FrequencyName",
            type: "A000",
          },
          { text: "ZEN30", id: "A008", name: "Identifier", type: "A000" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import",
                author: "David Alden - dave@alden.name",
                date: "16 Feb 2020",
                revision: 2,
              },
              {
                text: "Updated for firmware version 1.04",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "21 April 2020",
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
            type: "list",
            genre: "config",
            index: "1",
            label: "LED Indicator Mode for Dimmer",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indicator Mode for Dimmer.  Normal has the dimmer (top) LED indication on when the switch is off, off when the switch is on.  Default: Normal",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reverse", value: "1" },
              { label: "Always Off", value: "2" },
              { label: "Always On", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "2",
            label: "LED Indicator Mode for Relay",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indicator Mode for Relay.  Normal has the relay (bottom) LED indication on when the switch is off, off when the switch is on.  Default: Normal",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reverse", value: "1" },
              { label: "Always Off", value: "2" },
              { label: "Always On", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "3",
            label: "LED Indicator Color for Dimmer",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indicater color for Dimmer.  White, Blue, Green or Red.  Default: White",
            Item: [
              { label: "white", value: "0" },
              { label: "blue", value: "1" },
              { label: "green", value: "2" },
              { label: "red", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "4",
            label: "LED Indicator Color for Relay",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indicater color for Relay.  White, Blue, Green or Red.  Default: White",
            Item: [
              { label: "white", value: "0" },
              { label: "blue", value: "1" },
              { label: "green", value: "2" },
              { label: "red", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "LED Indicator Brightness for Dimmer",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "LED Indicater Brightness for Dimmer.  Bright (100%), Medium (60%) or Low (30%).  Default: Medium",
            Item: [
              { label: "bright", value: "0" },
              { label: "medium", value: "1" },
              { label: "low", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "6",
            label: "LED Indicator Brightness for Relay",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "LED Indicater Brightness for Relay.  Bright (100%), Medium (60%) or Low (30%).  Default: Medium",
            Item: [
              { label: "bright", value: "0" },
              { label: "medium", value: "1" },
              { label: "low", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "7",
            label: "LED Indicator Mode for Scene Control",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "LED Indicator Mode for Scene Control.  Enable/Disable LED indicators next to the dimmer lighting up when a scene is selected.  Default: disabled",
            Item: [
              { label: "enabled", value: "0" },
              { label: "disabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "8",
            label: "Auto Turn-Off Timer for Dimmer",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-Off Timer for Dimmer.  Sets the time (in minutes) after which you want the dimmer to automatically turn off once it has been turned on.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "9",
            label: "Auto Turn-On Timer for Dimmer",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-On Timer for Dimmer.  Sets the time (in minutes) after which you want the dimmer to automatically turn on once it has been turned off.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "10",
            label: "Auto Turn-Off Timer for Relay",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-Off Timer for Relay.  Sets the time (in minutes) after which you want the relay to automatically turn off once it has been turned on.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "int",
            genre: "config",
            index: "11",
            label: "Auto Turn-On Timer for Relay",
            size: "4",
            min: "0",
            max: "65535",
            value: "0",
            units: "minutes",
            Help:
              "Auto Turn-On Timer for Relay.  Sets the time (in minutes) after which you want the relay to automatically turn on once it has been turned off.  Range: 1-65535.  Default: 0 (disabled)",
          },
          {
            type: "list",
            genre: "config",
            index: "12",
            label: "On Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "8",
            value: "3",
            Help:
              "On Off Status After Power Failure.  Default: Restore both to prior state",
            Item: [
              { label: "Both forced off", value: "0" },
              { label: "Dimmer off/Relay on", value: "1" },
              { label: "Dimmer on/Relay off", value: "2" },
              { label: "Restore both to prior state", value: "3" },
              { label: "Restore Dimmer/Relay On", value: "4" },
              { label: "Restore Dimme/Relay Off", value: "5" },
              { label: "Dimmer On/Restore Relay", value: "6" },
              { label: "Dimmer Off/Restore Relay", value: "7" },
              { label: "Both forced on", value: "8" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "13",
            label: "Ramp Rate Control for Dimmer",
            size: "1",
            min: "0",
            max: "99",
            value: "1",
            units: "seconds",
            Help:
              "Ramp Rate Control for Dimmer.  Adjust the ramp rate for your dimmer (fade-in / fade-out effect for on / off operation). Values correspond to the number of seconds it take for the dimmer to reach full brightness or turn off when operated manually. Note that 0 is instant.  Default: 1",
          },
          {
            type: "byte",
            genre: "config",
            index: "14",
            label: "Minimum Brightness",
            size: "1",
            min: "1",
            max: "99",
            value: "1",
            units: "%",
            Help:
              "Minimum Brightness.  Set the minimum brightness level (in %) for your dimmer. You won't be able to dim the light below the set value.  Default: 1",
          },
          {
            type: "byte",
            genre: "config",
            index: "15",
            label: "Maximum Brightness",
            size: "1",
            min: "1",
            max: "99",
            value: "99",
            units: "%",
            Help:
              "Maximum Brightness.  Set the maximum brightness level (in %) for your dimmer. You won't be able to add brightness to the light beyond the set value.  Default: 99",
          },
          {
            type: "list",
            genre: "config",
            index: "17",
            label: "Double Tap Function for Dimmer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Double Tap Function for Dimmer.  When set to full, turns light on to 100%.  If set to maximum level, turns light on to % set in Parameter 15.  Default: full",
            Item: [
              { label: "full", value: "0" },
              { label: "maximum level", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "18",
            label: "Enable/Disable Double-tap for Dimmer",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Enable/Disable Double-tap for Dimmer.  Enables/Disables the double-tap fucntion and assign brightness to single tap.  enabled: single tap turns on to maximum brightness level.  disabled (last level): single tap returns to last brightness level.  disabled (full/max level): single tap returns to full brightmess.  Default: enabled",
            Item: [
              { label: "enabled", value: "0" },
              { label: "disabled (last level)", value: "1" },
              { label: "disabled (full/max level)", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "19",
            label: "Enable/Disable Load Control for Dimmer",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "Enable/Disable Load Control for Dimmer (Smart Bulb Setting).  Enable or disable direct manual and Z-Wave control of the connected light (works great for smart bulb control).  If disabled, the dimmer will no longer control the connected bulb directly but will still send on/off and brightness reports to the hub so you cn use them to create automations for your smart bulbs or other switches.  Scenes and other functionality will still be available through the paddles.  Default: manual disabled",
            Item: [
              { label: "manual disabled", value: "0" },
              { label: "manual enabled", value: "1" },
              { label: "manual and z-wave disabled", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "20",
            label: "Enable/Disable Load Control for Relay",
            size: "1",
            min: "0",
            max: "2",
            value: "1",
            Help:
              "Enable/Disable Load Control for Relay (Smart Bulb Setting).  Enable or disable direct manual and Z-Wave control of the connected light (works great for smart bulb control).  If disabled, the relay will no longer control the connected bulb directly but will still send on/off and brightness reports to the hub so you cn use them to create automations for your smart bulbs or other switches.  Scenes and other functionality will still be available through the paddles.  Default: manual disabled",
            Item: [
              { label: "manual disabled", value: "0" },
              { label: "manual enabled", value: "1" },
              { label: "manual and z-wave disabled", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "21",
            label: "Manual Dimming Speed",
            size: "1",
            min: "1",
            max: "99",
            value: "4",
            units: "seconds",
            Help:
              "Choose how many seconds it takes for the dimmer to go from 0% to 100% brightness when pressing and holding the paddle.  Default: 4.",
          },
          {
            type: "byte",
            genre: "config",
            index: "23",
            label: "Default Brightness Level On for Dimmer",
            size: "1",
            min: "0",
            max: "99",
            value: "0",
            units: "%",
            Help:
              "Default Brightness Level On for Dimmer.  Set custom brightness level (in %) for the dimmer to come on to at single tap.  Choose 0 for last brightness level.  Default: 0.",
          },
          {
            type: "list",
            genre: "config",
            index: "24",
            label: "Behavior of the dimmer when physical control is disabled",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Sets behavior of the dimmer when physical control is disabled",
            Item: [
              {
                label:
                  "Reports on/off and multilevel values back to the hub when buttons are pressed, changes LED indicator to indicate status (default)",
                value: "0",
              },
              {
                label:
                  "Doesn't report on/off or multilevel status back to the hub and doesn't change LED indicator status when physical control for the dimmer is disabled",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "25",
            label: "Behavior of the relay when physical control is disabled",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Sets behavior of the relay when physical control is disabled",
            Item: [
              {
                label:
                  "Reports on/off and multilevel values back to the hub when buttons are pressed, changes LED indicator to indicate status (default)",
                value: "0",
              },
              {
                label:
                  "Doesn't report on/off or multilevel status back to the hub and doesn't change LED indicator status when physical control for the dimmer is disabled",
                value: "1",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "26",
            label: "Night Light Mode",
            units: "",
            min: "0",
            max: "99",
            value: "20",
            Help:
              "Set the brightness level the dimmer will turn on to when off and when lower paddle is held DOWN for a second. Default: 20",
          },
          {
            type: "list",
            genre: "config",
            index: "27",
            label: "Paddle Control",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Normal mode: Upper paddle turns the light on, lower paddle turns the light off.  Reverse mode: Upper paddle turns the light off, lower paddle turns the light on.  Toggle mode: Either paddle toggles the light.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reverse", value: "1" },
              { label: "Toggle", value: "2" },
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
              { index: "1", max_associations: "1", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Dimmer Status" },
              { index: "3", max_associations: "5", label: "Relay Status" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
