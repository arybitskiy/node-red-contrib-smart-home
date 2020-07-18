import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "ZEN23 Toggle Switch V3", name: "Name" },
          {
            text:
              'Product features:\r\n- Manual or remote on/off control from your mobile device or computer (when included to a Z-Wave gateway controller)\r\n- Z-Wave Plus with improved 500 chip for faster and safer wireless communication\r\n- Works with LED, CFL, and incandescent bulbs (minimum 15Watts on load required)\r\n- Based on simple and universal binary switch command class - supported by most Z-Wave controllers\r\n- May be associated and grouped with other Z-Wave devices for advanced home automation\r\n- Built-in Z-Wave signal repeater for a stronger and more reliable network \r\n\r\nSpecifications:\r\n- Z-Wave Signal Frequency: 908.42 MHz\r\n- Power: 120 V, 60 Hz\r\n- Maximum Load: 960W Incandescent, 150W LED and CFL bulbs, 1800W (15A) Resistive\r\n- Range: Up to 100 feet line of sight\r\n- Installation and Use: Indoor Only\r\n- Operating Temperature: 32-104° F (0-40° C)\r\n- Dimensions: 4 1/8" tall x 2 1/8" wide (with heat sink tabs,1 3/4" without the tabs) x 1 3/8" deep\r\n- Weight: 10 oz\r\n\r\n\r\nhttps://www.support.getzooz.com/kb/article/301-zen23-toggle-switch-change-log/\r\nhttps://www.support.getzooz.com/kb/article/317-zen23-on-off-toggle-switch-ver-3-05-advanced-settings/\r\nMANUAL CONTROL\r\nToggle Up: \r\n1 x tap: load on; Scene 1, attribute 00 (button 1)\r\n2 x tap: Scene 1, attribute 03 (button 3)\r\n3 x tap: enter inclusion (pairing) mode; Scene 1, attribute 04 (button 5)\r\n4 x tap: Scene 1, attribute 05 (button 7)\r\n6 x tap: change LED indicator mode (see parameter 2)\r\n10 x tap: change physical / Z-Wave control mode (see parameter 11)\r\ntap-tap-tap-and-hold: factory reset\r\n\r\nToggle Down: \r\n1 x tap: load off; Scene 2, attribute 00 (button 2)\r\n2 x tap: Scene 2, attribute 03 (button 4)\r\n3 x tap: enter exclusion (unpairing) mode; Scene 2, attribute 04 (button 6)\r\n4 x tap: Scene 2, attribute 05 (button 8)\r\ntap-tap-tap-and-hold: factory reset',
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/027a:251c:b111",
            name: "OzwInfoPage",
          },
          {
            text: "http://getzooz.com/zooz-zen23-24-toggle-switch.html",
            name: "ProductPage",
          },
          {
            text: "https://www.support.getzooz.com/kb/tag/3/",
            name: "ProductSupport",
          },
          { text: "images/zooz/zen23v3.png", name: "ProductPic" },
          {
            text:
              "https://cdn.shopify.com/s/files/1/0218/7704/files/zooz-z-wave-plus-toggle-switch-zen23-ver3-manual.pdf?26",
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
            id: "251c",
            name: "FrequencyName",
            type: "b111",
          },
          { text: "ZEN23v3", id: "251c", name: "Identifier", type: "b111" },
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
              { value: "0", label: "Timer disabled (default)" },
              { value: "1", label: "Timer enabled" },
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
              { label: "Physical tap on ZEN23 only", value: "1" },
              {
                label: "Physical tap on connected 3-way switch only",
                value: "2",
              },
              {
                label: "Physical tap on ZEN23 or connected 3-way switch",
                value: "3",
              },
              { label: "Z-Wave command from hub", value: "4" },
              {
                label: "Physical tap on ZEN23 or Z-Wave command from hub",
                value: "5",
              },
              {
                label:
                  "Physical tap on connected 3-way switch or Z-Wave command from hub",
                value: "6",
              },
              {
                label:
                  "Physical tap on ZEN23 / connected 3-way switch or Z-Wave command from hub",
                value: "7",
              },
              { label: "Timer only", value: "8" },
              { label: "Physical tap on ZEN23 or timer", value: "9" },
              {
                label: "Physical tap on connected 3-way switch or timer",
                value: "10",
              },
              {
                label:
                  "Physical tap on ZEN23 / connected 3-way switch or timer",
                value: "11",
              },
              { label: "Z-Wave command from hub or timer", value: "12" },
              {
                label:
                  "Physical tap on ZEN23, Z-Wave command from hub, or timer",
                value: "13",
              },
              {
                label:
                  "Physical tap on ZEN23 / connected 3-way switch, Z-Wave command from hub, or timer",
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
            index: "11",
            value: "1",
            label: "Smart Bulb Mode: Enable/Disable Paddle / Z-Wave Control",
            units: "",
            size: "1",
            min: "0",
            max: "2",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "13",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "19",
            label: "3-Way Switch Type",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Choose the type of 3-way switch you want to use in a 3-way set-up.",
            Item: [
              {
                label:
                  "Regular mechanical 3-way on/off switch, use the connected 3-way switch to turn the light on or off (default)",
                value: "0",
              },
              {
                label:
                  "Momentary switch, click once to change status (light on or off).",
                value: "1",
              },
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
