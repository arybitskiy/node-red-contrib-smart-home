import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027a:1f1c:b112",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zen22.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/products/1946?selectedFrequencyId=2",
            id: "1f1c",
            name: "ZWProductPage",
            type: "b112",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, tap-tap-tap’n’hold the upper paddle for at least 10 seconds. The LED indicator will flash to confirm successful reset.\nNOTE: All previously recorded activity and custom settings will be erased from the device’s memory.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Bring your Z-Wave gateway (hub) close to the switch if possible\n2. Put the Z-Wave hub into exclusion mode (not sure how to do that?\nask@getzooz.com)\n3. Tap the lower paddle on the switch 3 times quickly",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Initiate inclusion (pairing) in the app (or web interface) of your hub.\n2. Tap the upper paddle on the switch 3 times quickly.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "1f1c",
            name: "FrequencyName",
            type: "b112",
          },
          { text: "ZEN22", id: "1f1c", name: "Identifier", type: "b112" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/1946/zooz-z-wave-plus-dimmer-switch-zen22-manual.pdf",
            name: "ProductManual",
          },
          { text: "Zooz Z-Wave Dimmer Light Switch", name: "Name" },
          {
            text:
              "FEATURES:\n- Manual and wireless control from your smart phone or computer (when synced with a Z-Wave gateway controller)\n- Direct 3-Way Solution: connects to an existing light switch for 2-point control, no special companion switch needed! (Neutral wire required, on/off control only from slave switch, use in 4-Way only if direct connection to load and line are in the same box)\n- NEW IN VER. 3.0: Double tap to full brightness, fully adjustable ramp rate, scene control on select hubs, and more!\n- White (no other color available)\n- Extended LED bulb compatibility - works with most popular dimmable LED's (including Cree, Ecosmart, Philips, GE, Sylvania, Sunco, and others. NOT COMPATIBLE WITH LUMINUS BULBS.)\n- Quick status reports to your hub when operated manually\n- Based on universal command classes - supported by all certified Z-Wave gateway controllers\n- Capable of advanced automation and association with other Z-Wave devices — schedule custom scenes and events\n- Upgraded Z-Wave Plus 500 series chip for stronger and faster wireless connectivity\n- Built-in signal repeater for a more reliable Z-Wave network \n- Blue LED indicator to help locate the switch in the dark (now configurable straight from the switch!)\n- Fits a standard-size face plate for single and multi gang installations (face plate not included)\n- UL-listed and Z-Wave Plus certified\n\nSPECIFICATIONS:\n- Model Number: ZEN22\n\n- Z-Wave Signal Frequency: 908.42 MHz\n- Power: 120 VAC, 60 Hz\n- Maximum Load: 500W Single-gang, 400W Double-gang, 300W Triple-gang Incandescent, 150W CFL or LED\n- Range: Up to 100 feet line of sight\n- Operating Temperature: 32-104° F (0-40° C)\n- Installation and Use: Indoor only\n\nhttps://www.support.getzooz.com/kb/article/319-zooz-dimmer-zen22-ver-3-07-advanced-settings/\nMANUAL CONTROL\nUpper Paddle: \n1 x tap: load on to last / custom brightness; Scene 1, attribute 00 (button 1)\n2 x tap: on to full / max brightness; Scene 1, attribute 03 (button 3)\n3 x tap: enter inclusion (pairing) mode; Scene 1, attribute 04 (button 5)\n4 x tap: Scene 1, attribute 05 (button 7)\n6 x tap: change LED indicator mode (see parameter 2)\n10 x tap: change physical / Z-Wave control mode (see parameter 15)\npress and hold: increase brightness level\ntap-tap-tap-and-hold: factory reset\n\nLower Paddle: \n1 x tap: load off; Scene 2, attribute 00 (button 2)\n2 x tap: Scene 2, attribute 03 (button 4)\n3 x tap: enter exclusion (unpairing) mode; Scene 2, attribute 04 (button 6)\n4 x tap: Scene 2, attribute 05 (button 8)\npress and hold: decrease brightness level\ntap-tap-tap-and-hold: factory reset",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Updated for firmware version 3.07",
                author: "Brad Parker - https://github.com/bepsoccer",
                date: "6 April 2020",
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
          {
            type: "list",
            genre: "config",
            index: "2",
            label: "LED Indication Control",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "LED Indication light function.  Normal has the LED Indication on when the switch is off, off when the switch is on. ",
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
            label: "Enable Auto Turn-Off Timer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "4",
            label: "Auto Turn-Off Timer Duration",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            units: "minutes",
            Help: "Time, in minutes, for auto-off timer delay.",
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "Enable Auto Turn-On Timer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "6",
            label: "Auto Turn-On Timer Duration",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            units: "minutes",
            Help:
              "Set the time (in minutes) after which you want the switch to automatically turn on once it has been turned off.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Association Reports",
            units: "",
            min: "0",
            max: "15",
            value: "15",
            size: "1",
            Help:
              "Choose which physical and Z-Wave triggers should prompt the switch to send a status change report to associated devices.",
            Item: [
              { label: "none", value: "0" },
              { label: "physical tap on ZEN22 only", value: "1" },
              {
                label: "physical tap on connected 3-way switch only",
                value: "2",
              },
              {
                label: "physical tap on ZEN22 or connected 3-way switch",
                value: "3",
              },
              { label: "Z-Wave command from hub", value: "4" },
              {
                label: "physical tap on ZEN22 or Z-Wave command from hub",
                value: "5",
              },
              {
                label:
                  "physical tap on connected 3-way switch or Z-Wave command from hub",
                value: "6",
              },
              {
                label:
                  "physical tap on ZEN22 / connected 3-way switch or Z-Wave command from hub",
                value: "7",
              },
              { label: "timer only", value: "8" },
              { label: "physical tap on ZEN22 or timer", value: "9" },
              {
                label: "physical tap on connected 3-way switch or timer",
                value: "10",
              },
              {
                label:
                  "physical tap on ZEN22 / connected 3-way switch or timer",
                value: "11",
              },
              { label: "Z-Wave command from hub or timer", value: "12" },
              {
                label:
                  "physical tap on ZEN22, Z-Wave command from hub, or timer",
                value: "13",
              },
              {
                label:
                  "physical tap on ZEN22 / connected 3-way switch, Z-Wave command from hub, or timer",
                value: "14",
              },
              { label: "all of the above. (default)", value: "15" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "On Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "2",
            value: "2",
            Help:
              "Status after power failure.  Off: always turn light off.  On: always turn light on.  Restore: remember the latest state and restore that state.",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
              { label: "Restore", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Ramp Rate Control",
            units: "",
            min: "0",
            max: "99",
            value: "1",
            Help:
              "Adjust the physical ramp rate for your dimmer (fade-in / fade-out effect for on / off operation). Values correspond to the number of seconds it take for the dimmer to reach full brightness or turn off when operated manually. This setting is for physical taps only, see parameter 17 to adjust Z-Wave ramp rate. Values: 1 – 99 (seconds). 0 – instant on/off. Default: 1",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Minimum Brightness",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Set the minimum brightness level (in %) for your dimmer. You won’t be able to dim the light below the set value. Default: 1",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Maximum Brightness",
            units: "",
            min: "1",
            max: "99",
            value: "99",
            Help:
              "Set the maximum brightness level (in %) for your dimmer. You won’t be able to add brightness to the light beyond the set value. Note: if Parameter 12 is set to value 0, Parameter 11 is automatically disabled. Default: 99",
          },
          {
            type: "list",
            genre: "config",
            index: "12",
            label: "Double Tap Function",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Double Tap action.  When set to Full, turns light on to 100%.  If set to Maximum Level, turns light on to % set in Parameter 11.",
            Item: [
              { label: "Full", value: "0" },
              { label: "Maximum Level", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "13",
            label: "Enable/Disable Scene Control",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable or Disable scene control functionality for quick double tap triggers.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "14",
            label: "Enable/Disable Double-tap",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Enables/Disables the double-tap function and assign brightness to single tap.  Last level: single tap returns to last brightness level.  Full/Max level: single tap returns to full/max level",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled (last level)", value: "1" },
              { label: "Disabled (full/max level)", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "15",
            label: "Smart Bulb Mode: Enable/Disable Paddle / Z-Wave Control",
            units: "",
            min: "0",
            max: "2",
            value: "1",
            size: "1",
            Help:
              "Enable or disable local on/off control. If enabled, you’ll only be able to control the connected light via Z-Wave. Scenes and other functionality will still be available through paddles.",
            Item: [
              { label: "physical paddle control disabled", value: "0" },
              {
                label: "physical paddle control enabled (default)",
                value: "1",
              },
              {
                label: "physical paddle and Z-Wave control disabled",
                value: "2",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "16",
            label: "Physical Dimming Speed",
            units: "",
            min: "1",
            max: "99",
            value: "4",
            Help:
              "Set the time it takes to get from 0% to 100% brightness when pressing and holding the paddle (physical dimming). The number entered as value corresponds to the number of seconds. Default: 4",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "17",
            label: "Zwave Ramp Rate Control",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Choose if you want to set the Z-Wave ramp rate independently of the physical ramp rate (using an appropriate command in your hub) or if you want them to match.",
            Item: [
              {
                label:
                  "Z-Wave ramp rate matches the physical ramp rate set in parameter 9",
                value: "0",
              },
              {
                label:
                  "Z-Wave ramp rate is set independently using appropriate Z-Wave commands (default)",
                value: "1",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "18",
            label: "Custom Brightness Level On",
            units: "",
            min: "0",
            max: "99",
            value: "0",
            Help:
              "Set the custom brightness level (instead of the last set brightness level) you want the dimmer to come on to when you single tap the upper paddle. Default: 0 - last brightness level",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "19",
            label: "3-Way Switch Type",
            units: "",
            min: "0",
            max: "3",
            value: "0",
            size: "1",
            Help:
              "Choose the type of 3-way switch you want to use with this dimmer in a 3-way set-up. Changing this setting can allow you to control brightness and dim the light from both 3-way locations. Use a regular momentary switch (like the Zooz ZAC99 accessory switch) if value is set to 2.",
            Item: [
              {
                label:
                  "regular mechanical 3-way on/off switch, use the connected 3-way switch to turn the light off or on to the last brightness level, dimming only available from the Zooz Z-Wave dimmer and from the hub (or through voice control if smart speaker is integrated with your Z-Wave hub) (default)",
                value: "0",
              },
              {
                label:
                  "regular mechanical 3-way on/off switch, tap the paddles once to change state (light on or off), tap the paddles twice quickly to turn light on to full brightness, tap the paddles quickly 3 times to enable a dimming sequence (the light will start dimming up and down in a loop) and tap the switch again to set the selected brightness level",
                value: "1",
              },
              {
                label:
                  "momentary switch, click once to change status (light on or off), click twice quickly to turn light on to full brightness, press and hold to adjust brightness (dim up / dim down in sequence)",
                value: "2",
              },
              {
                label:
                  "momentary switch, click once to change status (light on or off), click twice quickly to turn light on to full brightness, press and hold to adjust brightness (dim up / dim down in sequence but always reduce brightness after double click)",
                value: "3",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Zwave tap and hold Control",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Choose how you'd like the dimmer to report when paddles are tapped and held and physical / Z-Wave control is enabled or disabled.",
            Item: [
              {
                label:
                  "report each brightness level to hub when physical / Z-Wave control is disabled for physical dimming (final level only reported if physical / Z-Wave control is enabled)",
                value: "0",
              },
              {
                label:
                  "report final brightness level only for physical dimming, regardless of the physical / Z-Wave control mode",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "21",
            label: "Reporting behavior with disabled physical control",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help: "Set reporting behavior for disabled physical control.",
            Item: [
              {
                label:
                  "switch reports on/off status and changes LED indicator state even if physical and Z-Wave control is disabled (default)",
                value: "0",
              },
              {
                label:
                  "switch doesn't report on/off status or change LED indicator state when physical (and Z-Wave) control is disabled",
                value: "1",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "22",
            label: "Night Light Mode",
            units: "",
            min: "0",
            max: "99",
            value: "20",
            Help:
              "Set the brightness level the dimmer will turn on to when off and when lower paddle is held DOWN for a second. Default: 20",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
