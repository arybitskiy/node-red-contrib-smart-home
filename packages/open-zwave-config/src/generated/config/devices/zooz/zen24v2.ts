import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "ZEN24 Dimmer Switch V2", name: "Name" },
          {
            text:
              'Product features:\r\n- Manual or remote on/off control and dimming from your mobile device or computer (when included to a Z-Wave gateway controller)\r\n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\r\n- Works with most high-quality DIMMABLE LED, CFL, and incandescent bulbs (20 Watts minimum required)\r\n- Based on universal command classes - supported by most Z-Wave controllers\r\n- May be associated and grouped with other Z-Wave devices for advanced home automation\r\n- Air-gap switch to power the dimmer off when changing light bulbs\r\n- Built-in Z-Wave signal repeater for a stronger and more reliable network\r\n\r\nSpecifications:\r\n- Z-Wave Signal Frequency: 908.42 MHz\r\n- Power: 120 V, 60 Hz\r\n- Maximum Load: 500W Single-gang, 400W Double-gang, 300W Triple-gang Incandescent, 150W CFL or LED\r\n- Range: Up to 100 feet line of sight\r\n- Installation and Use: Indoor Only\r\n- Operating Temperature: 32-104° F (0-40° C)\r\n- Dimensions: 4 1/8" tall x 2 1/8" wide (with heat sink tabs,1 3/4" without the tabs) x 1 3/8" deep\r\n- Weight: 10 oz\r\n\r\nhttps://www.support.getzooz.com/kb/article/298-zen24-toggle-dimmer-change-log/\r\nhttps://www.support.getzooz.com/kb/article/318-zen24-toggle-dimmer-ver-3-08-advanced-settings/\r\nMANUAL CONTROL\r\nToggle Up: \r\n1 x tap: load on to last / custom brightness; Scene 1, attribute 00 (button 1)\r\n2 x tap: on to full / max brightness; Scene 1, attribute 03 (button 3)\r\n3 x tap: enter inclusion (pairing) mode; Scene 1, attribute 04 (button 5)\r\n4 x tap: Scene 1, attribute 05 (button 7)\r\n6 x tap: change LED indicator mode (see parameter 2)\r\n10 x tap: change physical / Z-Wave control mode (see parameter 15)\r\npress and hold: increase brightness level\r\ntap-tap-tap-and-hold: factory reset\r\n\r\nToggle Down: \r\n1 x tap: load off; Scene 2, attribute 00 (button 2)\r\n2 x tap: Scene 2, attribute 03 (button 4)\r\n3 x tap: enter exclusion (unpairing) mode; Scene 2, attribute 04 (button 6)\r\n4 x tap: Scene 2, attribute 05 (button 8)\r\npress and hold: decrease brightness level\r\ntap-tap-tap-and-hold: factory reset',
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/027a:261c:b112",
            name: "OzwInfoPage",
          },
          {
            text: "http://getzooz.com/zooz-zen23-24-toggle-switch.html",
            name: "ProductPage",
          },
          {
            text: "https://www.support.getzooz.com/kb/tag/4/",
            name: "ProductSupport",
          },
          { text: "images/zooz/zen24v2.png", name: "ProductPic" },
          {
            text:
              "https://cdn.shopify.com/s/files/1/0218/7704/files/zooz-z-wave-plus-toggle-dimmer-zen24-ver3-manual_889b0743-e025-445a-ac13-0f7742ba0675.pdf?100",
            name: "ProductManual",
          },
          {
            text:
              "1. Initiate inclusion at your hub. 2. Toggle up 3 times very quickly at the switch.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Put the Z-Wave hub into exclusion mode. 2. Toggle the switch down 3 times quickly.",
            name: "ExclusionDescription",
          },
          {
            text:
              "If your primary controller is missing or inoperable, you may need to reset the device to factory settings. To complete the reset process manually, toggle-toggle-toggle’n’hold down for at least 10 seconds.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "261c",
            name: "FrequencyName",
            type: "b112",
          },
          { text: "ZEN24v2", id: "261c", name: "Identifier", type: "b112" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial configuration from Zooz product help pages",
                author: "Matthew Grimes - https://github.com/cybergrimes",
                date: "14 June 2020",
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
            instance: "1",
            index: "1",
            value: "0",
            label: "On/Off Toggle Orientation",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help:
              "Normal mode: Toggle up turns the light on, toggle down turns the light off. Reverse mode: Toggle up turns the light off, toggle down turns the light on. Toggle mode: Either direction toggles the light.",
            Item: [
              {
                value: "0",
                label:
                  "Toggle up to turn the light on, toggle down to turn it off (default)",
              },
              {
                value: "1",
                label:
                  "Toggle up to turn the light off, toggle down to turn it on",
              },
              {
                value: "2",
                label: "Toggle up or down to turn light on/off (change state)",
              },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "3",
            value: "0",
            label: "Auto Turn-Off Timer",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Use this parameter to enable or disable the auto turn-off timer function.",
            Item: [
              { value: "0", label: "Timer disabled (default)" },
              { value: "1", label: "Timer enabled" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "4",
            value: "60",
            label: "Auto Turn-Off Timer Duration",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            type: "int",
            Help: "Time, in minutes, for auto-off timer delay.",
          },
          {
            genre: "config",
            instance: "1",
            index: "5",
            value: "0",
            label: "Auto Turn-On Timer",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Use this parameter to enable or disable the auto turn-on timer function.",
            Item: [
              { value: "0", label: "Timer Disabled" },
              { value: "1", label: "Timer Enabled" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "6",
            value: "60",
            label: "Auto Turn-On Timer Duration",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            type: "int",
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
              { label: "None", value: "0" },
              { label: "Physical tap on ZEN24 only", value: "1" },
              {
                label: "Physical tap on connected 3-way switch only",
                value: "2",
              },
              {
                label: "Physical tap on ZEN24 or connected 3-way switch",
                value: "3",
              },
              { label: "Z-Wave command from hub", value: "4" },
              {
                label: "Physical tap on ZEN24 or Z-Wave command from hub",
                value: "5",
              },
              {
                label:
                  "Physical tap on connected 3-way switch or Z-Wave command from hub",
                value: "6",
              },
              {
                label:
                  "Physical tap on ZEN24 / connected 3-way switch or Z-Wave command from hub",
                value: "7",
              },
              { label: "Timer only", value: "8" },
              { label: "Physical tap on ZEN24 or timer", value: "9" },
              {
                label: "Physical tap on connected 3-way switch or timer",
                value: "10",
              },
              {
                label:
                  "Physical tap on ZEN24 / connected 3-way switch or timer",
                value: "11",
              },
              { label: "Z-Wave command from hub or timer", value: "12" },
              {
                label:
                  "Physical tap on ZEN24, Z-Wave command from hub, or timer",
                value: "13",
              },
              {
                label:
                  "Physical tap on ZEN24 / connected 3-way switch, Z-Wave command from hub, or timer",
                value: "14",
              },
              { label: "All of the above. (default)", value: "15" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "8",
            value: "2",
            label: "On Off Status After Power Failure",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help: "Status after Power Failure",
            Item: [
              { value: "0", label: "Off" },
              { value: "1", label: "On" },
              { value: "2", label: "Restore" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "9",
            value: "1",
            label: "Ramp Rate Control",
            units: "seconds",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "Adjust the physical ramp rate for your dimmer (fade-in / fade-out effect for on / off operation). Values correspond to the number of seconds it take for the dimmer to reach full brightness or turn off when operated manually. This setting is for physical taps only, see parameter 17 to adjust Z-Wave ramp rate. Values: 1 – 99 (seconds). 0 – instant on/off. Default: 1",
          },
          {
            genre: "config",
            instance: "1",
            index: "10",
            value: "1",
            label: "Minimum Brightness",
            units: "percent",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "Set the minimum brightness level (in %) for your dimmer. You won’t be able to dim the light below the set value. Default: 1",
          },
          {
            genre: "config",
            instance: "1",
            index: "11",
            value: "99",
            label: "Maximum Brightness",
            units: "percent",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "Set the maximum brightness level (in %) for your dimmer. You won’t be able to add brightness to the light beyond the set value. Note: if Parameter 12 is set to value 0, Parameter 11 is automatically disabled. Default: 99",
          },
          {
            genre: "config",
            instance: "1",
            index: "12",
            value: "0",
            label: "Double Tap Function",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Choose if you want the dimmer to turn on to full brightness or custom brightness level after you toggle the switch up twice quickly.",
            Item: [
              { value: "0", label: "Full Brightness" },
              { value: "1", label: "Maximum Brightness Level (Parameter 11)" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "13",
            value: "0",
            label: "Enable/Disable Scene Control",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Enable or disable scene control functionality for quick double tap triggers.",
            Item: [
              { value: "0", label: "Scene control disabled (default)." },
              { value: "1", label: "Scene Control enabled" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "14",
            value: "0",
            label: "Enable/Disable Double-tap",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help:
              "Enable or disable the double tap function and assign brightness level to single tap.",
            Item: [
              {
                value: "0",
                label:
                  "Double tap to full / maximum brightness level enabled (default).",
              },
              {
                value: "1",
                label:
                  "Double tap to full / maximum brightness level disabled, single tap turns light on to last brightness level.",
              },
              {
                value: "2",
                label:
                  "Double tap to full / maximum brightness level disabled, single tap turns light on to full / maximum brightness level.",
              },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "15",
            value: "1",
            label: "Smart Bulb Mode: Enable/Disable Paddle / Z-Wave Control",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Enable or disable manual on/off control. If enabled, you’ll only be able to control the connected light via Z-Wave. Scenes and other functionality will still be available through the physical switch.",
            Item: [
              { value: "0", label: "Physical toggle control disabled." },
              {
                value: "1",
                label: "Physical toggle control enabled (default).",
              },
              {
                value: "2",
                label:
                  "Physical toggle and Z-Wave control disabled. NOTE: toggle the switch up 10 times quickly to change this mode.",
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
              "Set the time it takes to get from 0% to 100% brightness when pressing and holding the toggle (physical dimming). The number entered as value corresponds to the number of seconds. Default 4.",
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
              "Set the custom brightness level (instead of the last set brightness level) you want the dimmer to come on to when you toggle the switch up once. Default: 0 - last brightness level",
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
                  "Toggle switch, use the connected 3-way switch to turn the light off or on to the last brightness level, dimming only available from the Zooz Z-Wave dimmer and from the hub (or through voice control if smart speaker is integrated with your Z-Wave hub)",
                value: "0",
              },
              {
                label:
                  "Toggle switch, toggle up or down once to change state (light on or off), toggle twice quickly to turn light on to full brightness, toggle 3 times quickly to enable a dimming sequence (the light will start dimming up and down in a loop) and toggle the switch again to set the selected brightness level",
                value: "1",
              },
              {
                label:
                  "Momentary switch, click once to change status (light on or off), click twice quickly to turn light on to full brightness, press and hold to adjust brightness (dim up / dim down in sequence)",
                value: "2",
              },
              {
                label:
                  "Momentary switch, click once to change status (light on or off), click twice quickly to turn light on to full brightness, press and hold to adjust brightness (dim up / dim down in sequence but always reduce brightness after double click). Default: 0.",
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
              "Choose how you'd like the dimmer to report when the toggle is held and physical / Z-Wave control is enabled or disabled.",
            Item: [
              {
                label:
                  "Report each brightness level to hub when physical / Z-Wave control is disabled for physical dimming (final level only reported if physical / Z-Wave control is enabled)",
                value: "0",
              },
              {
                label:
                  "Report final brightness level only for physical dimming, regardless of the physical / Z-Wave control mode",
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
                  "Switch reports on/off status and changes LED indicator state even if physical and Z-Wave control is disabled (default)",
                value: "0",
              },
              {
                label:
                  "Switch doesn't report on/off status or change LED indicator state when physical (and Z-Wave) control is disabled",
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
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Group 2", max_associations: "5" },
              { index: "3", label: "Group 3", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
